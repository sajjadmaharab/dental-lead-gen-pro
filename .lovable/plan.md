## Redesign Google Reviews Section (GMB Style)

Replace the current stagger-testimonials with a Google-style review carousel matching the reference image.

### Design
- **Header**: "EXCELLENT" + 5 gold stars + "Based on 201 reviews" + Google logo (keep existing)
- **Review cards** (white rounded cards):
  - Circular avatar with reviewer photo OR colored initials fallback
  - Reviewer name + date (e.g. "25 March 2026")
  - Google "G" icon (top-right, using Google colors)
  - 5 gold stars + blue verified checkmark (✓)
  - Review text, truncated with "Read more" for long reviews
- **Carousel**: Horizontal swipeable, 3 cards on desktop, 1 on mobile, with left/right arrow navigation

### Technical Changes

1. **Create `src/components/GoogleReviewCard.tsx`**
   - Single review card component
   - Avatar with initials fallback (colored circle + first letters)
   - Google "G" SVG icon
   - Star rating + verified badge (blue checkmark)
   - Text truncation with "Read more" toggle

2. **Create `src/components/GoogleReviewCarousel.tsx`**
   - Horizontal carousel with state-based index
   - Left/right navigation arrows
   - Responsive: 3 cards on lg, 2 on md, 1 on sm
   - Smooth slide animation

3. **Update `src/pages/Home.tsx`**
   - Replace `StaggerTestimonials` with `GoogleReviewCarousel`
   - Update reviews data array with: name, date, text, rating, optional image URL
   - Keep existing header (EXCELLENT, stars, Google logo)

### Review Data (your real GMB reviews)
You can update the reviews array anytime. Each review has: `name`, `date`, `text`, `rating` (1-5), and optional `image` (URL). Without an image, a colored initials avatar auto-generates.
