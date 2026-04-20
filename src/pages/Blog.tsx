import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { SEO } from "@/components/SEO";

const POSTS = [
  { slug: "best-dentist-in-debidwar", title: "Best Dentist in Debidwar — How to Choose the Right Clinic", excerpt: "Looking for the best dental clinic in Debidwar? Here's what to look for: experience, hygiene, modern equipment and patient reviews." },
  { slug: "tooth-pain-causes-treatment", title: "Tooth Pain — Causes & Treatment Options", excerpt: "Tooth pain has many causes: cavities, infection, gum issues or sensitivity. Learn what each means and when to see a dentist in Comilla." },
  { slug: "root-canal-vs-extraction", title: "Root Canal vs Extraction — Which Is Better?", excerpt: "Should you save your tooth with a root canal or remove it? Pros, cons and what we recommend at Motiur's Dental." },
  { slug: "teeth-whitening-guide", title: "Teeth Whitening Guide for Bangladesh", excerpt: "Everything you need to know about safe, professional teeth whitening in Debidwar — methods, results and safety." },
  { slug: "dental-care-tips", title: "10 Dental Care Tips for a Healthy Smile", excerpt: "Simple daily habits that protect your teeth, prevent cavities and keep your smile bright for life." },
];

const Blog = () => (
  <>
    <SEO
      title="Dental Blog — Tips from a Dentist in Debidwar | Motiur's Dental"
      description="Dental health tips, treatment guides and patient stories from Motiur's Dental, Debidwar. Trusted dentist serving Comilla."
      path="/blog"
    />
    <section className="bg-hero-gradient py-14 md:py-20">
      <div className="container-page text-center max-w-3xl mx-auto">
        <span className="text-sm font-semibold text-primary">Blog</span>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-extrabold">Dental Health, Made Simple</h1>
        <p className="mt-4 text-muted-foreground text-lg">Practical tips and treatment guides from our dentists in Debidwar.</p>
      </div>
    </section>
    <section className="section-pad">
      <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {POSTS.map((p) => (
          <article key={p.slug} className="bg-card border border-border/60 rounded-2xl p-6 shadow-card hover:shadow-medium hover:-translate-y-1 transition-smooth">
            <div className="aspect-[16/9] rounded-xl bg-hero-gradient mb-4 flex items-center justify-center">
              <span className="text-5xl">📝</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> Coming soon</div>
            <h2 className="mt-2 font-display font-bold text-lg leading-snug">{p.title}</h2>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{p.excerpt}</p>
            <span className="mt-4 inline-block text-xs font-semibold text-primary bg-primary-soft px-3 py-1 rounded-full">Coming soon</span>
          </article>
        ))}
      </div>
      <div className="container-page mt-10 text-center text-sm text-muted-foreground">
        Want a specific topic covered? <Link to="/contact" className="text-primary font-semibold">Let us know</Link>.
      </div>
    </section>
  </>
);

export default Blog;
