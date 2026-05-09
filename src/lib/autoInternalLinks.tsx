import React, { Children, isValidElement, cloneElement, ReactNode, Fragment } from "react";
import { Link } from "react-router-dom";

/**
 * Auto internal-linking utility.
 *
 * Wrap any page section in <AutoInternalLinks currentPath={...}>...</AutoInternalLinks>
 * and the first occurrence of each known service keyword in the rendered text
 * will be turned into a <Link> to its corresponding route.
 *
 * Rules are ordered most-specific first so that "root canal treatment" wins
 * over "root canal" etc. Each href is linked at most once per render and
 * self-links (matches against the current path) are skipped automatically.
 */

type Rule = { pattern: RegExp; href: string };

export const INTERNAL_LINK_RULES: Rule[] = [
  // Root canal
  { pattern: /\broot canal treatment\b/i, href: "/root-canal-treatment" },
  { pattern: /\broot canal\b/i, href: "/root-canal-treatment" },
  { pattern: /\bendodontic(?: treatment)?\b/i, href: "/root-canal-treatment" },

  // Dental implants
  { pattern: /\bdental implants?\b/i, href: "/dental-implants" },

  // Crowns / bridges / caps
  { pattern: /\bcrown and bridge(?: treatment)?\b/i, href: "/dental-bridges-caps" },
  { pattern: /\bdental bridges?(?: and (?:crowns?|caps?))?\b/i, href: "/dental-bridges-caps" },
  { pattern: /\bdental (?:crowns?|caps?)\b/i, href: "/dental-bridges-caps" },

  // Braces / orthodontic
  { pattern: /\bbraces(?: treatment)?\b/i, href: "/braces-orthodontic" },
  { pattern: /\borthodontic(?: treatment)?\b/i, href: "/braces-orthodontic" },
  { pattern: /\bclear aligners?\b/i, href: "/braces-orthodontic" },

  // Scaling / polishing / whitening
  { pattern: /\bteeth whitening\b/i, href: "/scaling-polishing-whitening" },
  { pattern: /\bscaling(?: and polishing)?\b/i, href: "/scaling-polishing-whitening" },
  { pattern: /\bprofessional (?:teeth )?cleaning\b/i, href: "/scaling-polishing-whitening" },

  // Cosmetic / dental filling
  { pattern: /\bcosmetic fillings?\b/i, href: "/cosmetic-filling" },
  { pattern: /\bdental fillings?\b/i, href: "/cosmetic-filling" },
  { pattern: /\btooth(?:-| )coloured fillings?\b/i, href: "/cosmetic-filling" },

  // Tooth gap
  { pattern: /\btooth gap(?: treatment)?\b/i, href: "/tooth-gap-treatment" },
  { pattern: /\bgap(?:s)? between (?:the )?teeth\b/i, href: "/tooth-gap-treatment" },
  { pattern: /\bdiastema\b/i, href: "/tooth-gap-treatment" },

  // Wisdom teeth
  { pattern: /\bwisdom (?:tooth|teeth)(?: (?:removal|extraction|treatment))?\b/i, href: "/wisdom-teeth-treatment" },

  // Minor oral surgery
  { pattern: /\bminor oral surgery\b/i, href: "/minor-oral-surgery" },

  // Fractured / chipped teeth
  { pattern: /\b(?:fractured|chipped|cracked|broken) (?:tooth|teeth)\b/i, href: "/fractured-teeth-treatment" },

  // Tooth extraction
  { pattern: /\b(?:tooth|teeth) extractions?\b/i, href: "/tooth-extraction" },

  // Teeth replacement
  { pattern: /\bteeth replacement\b/i, href: "/teeth-replacement" },
  { pattern: /\bdentures?\b/i, href: "/teeth-replacement" },
];

// Tags whose text we never want to mutate.
const SKIP_TAGS = new Set([
  "h1", "h2", "h3", "h4", "h5", "h6",
  "a", "button", "input", "textarea", "label",
  "code", "pre",
]);

const linkClass =
  "text-primary font-medium underline decoration-primary/40 underline-offset-2 hover:decoration-primary transition-colors";

function processString(
  text: string,
  used: Set<string>,
  currentPath: string,
  keyPrefix: string
): ReactNode {
  let segments: Array<string | ReactNode> = [text];

  for (let r = 0; r < INTERNAL_LINK_RULES.length; r++) {
    const rule = INTERNAL_LINK_RULES[r];
    if (used.has(rule.href)) continue;
    if (rule.href === currentPath) continue;

    let replaced = false;
    const next: Array<string | ReactNode> = [];

    for (const seg of segments) {
      if (replaced || typeof seg !== "string") {
        next.push(seg);
        continue;
      }
      const m = rule.pattern.exec(seg);
      if (!m) {
        next.push(seg);
        continue;
      }
      replaced = true;
      used.add(rule.href);
      const before = seg.slice(0, m.index);
      const match = m[0];
      const after = seg.slice(m.index + match.length);
      if (before) next.push(before);
      next.push(
        <Link
          key={`${keyPrefix}-${r}`}
          to={rule.href}
          className={linkClass}
        >
          {match}
        </Link>
      );
      if (after) next.push(after);
    }
    segments = next;
  }

  if (segments.length === 1 && typeof segments[0] === "string") return segments[0];
  return (
    <>
      {segments.map((s, i) => (
        <Fragment key={i}>{s}</Fragment>
      ))}
    </>
  );
}

function walk(
  node: ReactNode,
  used: Set<string>,
  currentPath: string,
  keyPath: string
): ReactNode {
  if (node == null || typeof node === "boolean") return node;
  if (typeof node === "string") return processString(node, used, currentPath, keyPath);
  if (typeof node === "number") return node;

  if (Array.isArray(node)) {
    return node.map((c, i) => (
      <Fragment key={i}>{walk(c, used, currentPath, `${keyPath}.${i}`)}</Fragment>
    ));
  }

  if (!isValidElement(node)) return node;

  const type = node.type as unknown;
  const tagName = typeof type === "string" ? type : "";
  if (
    type === Link ||
    (typeof tagName === "string" && SKIP_TAGS.has(tagName))
  ) {
    return node;
  }

  const props: Record<string, unknown> & { children?: ReactNode } =
    (node.props as Record<string, unknown> & { children?: ReactNode }) ?? {};
  if (props.children == null) return node;

  const newChildren = walk(props.children, used, currentPath, `${keyPath}>`);
  return cloneElement(node, undefined, newChildren);
}

export function AutoInternalLinks({
  children,
  currentPath,
}: {
  children: ReactNode;
  currentPath: string;
}) {
  const used = new Set<string>();
  return <>{walk(children, used, currentPath, "ail")}</>;
}
