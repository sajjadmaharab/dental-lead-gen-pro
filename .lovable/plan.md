## Goal

Update the Home page "OUR TOP SERVICES" section so it shows exactly the 6 services you listed, each with the matching uploaded icon, and restyle the cards to look like your reference image (image.png).

## Step 1 — Replace the 6 services on the Home page

Show these 6 services in this order on the Home page (linking to their existing detail pages):

1. Scaling, Polishing & Teeth Whitening → `/services/scaling-polishing-whitening`
2. Cosmetic Filling → `/services/cosmetic-filling`
3. Root Canal Treatment → `/services/root-canal-treatment`
4. Cap & Bridge → `/services/dental-bridges-caps`
5. Treatment Of Spacing in Between Teeth → `/services/tooth-gap-treatment`
6. Teeth Replacement → `/services/teeth-replacement`

(Other services like Implants, Braces, Wisdom Teeth, etc. will still be available on the full `/services` page — only the Home page grid changes.)

## Step 2 — Add the uploaded icons as image assets

Copy your 6 uploaded PNGs into `src/assets/services/`:

- `Scaling_Polishing_teeth_whitening.png` → Scaling card
- `Cosmetic_Filling.png` → Cosmetic Filling card
- `Root_Canal_Treatment.png` → Root Canal card
- `Cap_Bridge.png` → Cap & Bridge card
- `Treatment_Of_Spacing_in_Between_teeth.png` → Spacing card
- `Teeth_Replacement.png` → Teeth Replacement card

These will replace the current emoji icons (🦷, 💎, etc.) on the Home page only.

## Step 3 — Redesign the service card to match your reference

New card style based on `image.png`:

- Tall portrait card with rounded corners and soft shadow
- Subtle teal/sky tinted background using a faint dental-themed background pattern (very low opacity) so the cards have that "watercolor on dental imagery" feel from the reference
- Large centered icon (uploaded PNG, ~96–112px) at the top
- Bold dark-navy service title (display font), left-aligned under the icon
- Short description text in muted gray
- "Read More.." link in pink/red at the end of the paragraph (matches your reference exactly)
- Hover: slight lift + shadow increase
- Whole card is clickable and routes to the service detail page
- Responsive: 1 column on mobile, 2 on tablet, 3 on desktop

## Step 4 — Verification pass

After implementing, re-open the Home page and verify:

- All 6 cards render in the correct order with the correct titles
- Each card shows the correct uploaded icon (no emojis remain)
- Each card links to the right service detail page (no 404s)
- Card layout matches the reference style on mobile, tablet, and desktop
- "View All Services" button still works and shows the full service list

## Technical notes

- File to edit: `src/pages/Home.tsx` — replace the `SERVICES.slice(0, 6).map(...)` block with a new local `homeServices` array of `{ slug, name, description, icon }` so we control order and icons independently of `src/data/services.ts`.
- Icons imported as ES6 modules from `@/assets/services/*.png` for proper bundling.
- New card component can live inline in `Home.tsx` (small, page-specific) — no new shared component needed.
- `src/data/services.ts` is not changed; existing detail pages and `/services` listing keep working as-is.
- No changes to `clinic.ts`, navigation, or other pages.