## Changes

### 1. Home Page: Add text overlay on Before/After slider (like screenshot)

Each slide will get a **title** and **description** text overlay on top of the image, plus a **"Click Here"** button that links to the service page. Style matches the reference screenshot:
- Bold title at top-center (e.g. "Expert Care for Dental Trauma")
- Smaller description text in the middle (e.g. "A perfect cosmetic filling treatment done by Mr Motiur")
- "Click Here" button with border outline at bottom-center

Slide text mapping:
- Cosmetic Filling: "Expert Cosmetic Filling" / "A flawless cosmetic filling done by Mr Motiur"
- Scaling & Polishing: "Professional Teeth Cleaning" / "Scaling and polishing results by Mr Motiur"  
- Tooth Gap Treatment: "Tooth Gap Correction" / "A perfect gap closure treatment done by Mr Motiur"
- Dental Bridge & Cap: "Dental Bridge and Cap" / "A custom bridge and cap work done by Mr Motiur"

The existing bottom gradient with service name and "View Service" button will be replaced by this new centered overlay style.

### 2. Blog Page: Remove all blog posts, update H1 with SEO text

- Remove all blog post cards (POSTS array content)
- Update H1 to an SEO-optimized heading like: "Dental Care Tips and Treatment Guide in Debidwar, Comilla"
- Update meta title/description for better SEO
- Show a "Coming Soon" message instead of blog cards

**Files to edit:** `src/pages/Home.tsx`, `src/pages/Blog.tsx`
