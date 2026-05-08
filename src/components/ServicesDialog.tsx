import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SERVICES, type Service } from "@/data/services";

type Mode =
  | { kind: "single"; service: Service }
  | { kind: "all" };

const EVT = "open-service-dialog";

export function openServiceDialog(payload: { slug?: string } = {}) {
  window.dispatchEvent(new CustomEvent(EVT, { detail: payload }));
}

export const ServicesDialog = () => {
  const [mode, setMode] = useState<Mode | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      if (detail.slug) {
        const svc = SERVICES.find((s) => s.slug === detail.slug);
        if (svc) {
          setMode({ kind: "single", service: svc });
          setOpen(true);
          return;
        }
      }
      setMode({ kind: "all" });
      setOpen(true);
    };
    window.addEventListener(EVT, handler);
    return () => window.removeEventListener(EVT, handler);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        {mode?.kind === "single" && (
          <>
            <DialogHeader>
              <DialogTitle>
                <Link
                  to={`/${mode.service.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-2xl md:text-3xl font-display font-extrabold text-primary hover:text-pink transition-smooth inline-flex items-center gap-2"
                >
                  {mode.service.name}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Click the title above to open the full service page.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-2 space-y-4">
              <p className="text-foreground/80 text-sm leading-relaxed">{mode.service.description}</p>
              {mode.service.benefits?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-sm">Key Benefits</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-foreground/80">
                    {mode.service.benefits.map((b) => (
                      <li key={b} className="flex gap-2"><span className="text-pink">•</span>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}

        {mode?.kind === "all" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-display font-extrabold text-primary">
                All Services
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Click any service name to open its detail page.
              </DialogDescription>
            </DialogHeader>
            <ul className="mt-3 divide-y divide-border">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 py-3 group"
                  >
                    <div>
                      <div className="font-display font-bold text-primary group-hover:text-pink transition-smooth">
                        {s.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{s.short}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary/60 group-hover:text-pink group-hover:translate-x-1 transition-smooth shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
