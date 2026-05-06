import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const Blog = () => (
  <>
    <SEO
      title="Dental Care Tips and Treatment Guide in Debidwar, Comilla"
      description="Expert dental care tips, treatment guides and oral health advice from Motiur's Dental in Debidwar, Comilla. Learn about preventive dentistry, cosmetic treatments and more."
      path="/blog"
    />
    <section className="bg-hero-gradient py-14 md:py-20">
      <div className="container-page text-center max-w-3xl mx-auto">
        <span className="text-sm font-semibold text-primary">Blog</span>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-extrabold">
          Dental Care Tips and Treatment Guide in Debidwar, Comilla
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Expert oral health advice, treatment insights and preventive care tips from the trusted dentists at Motiur's Dental.
        </p>
      </div>
    </section>
    <section className="section-pad">
      <div className="container-page text-center py-16">
        <p className="text-2xl font-display font-bold text-primary">Coming Soon</p>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          We are preparing helpful dental care articles and treatment guides for you. Stay tuned for expert advice from Mr Motiur.
        </p>
        <Link to="/contact" className="mt-6 inline-block text-sm font-semibold text-primary bg-primary-soft px-5 py-2 rounded-full hover:bg-primary-soft/80 transition-colors">
          Suggest a Topic
        </Link>
      </div>
    </section>
  </>
);

export default Blog;
