import { Helmet } from "react-helmet-async";
import { CLINIC } from "@/lib/clinic";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  schema?: object;
}

export const SEO = ({ title, description, path = "/", image, schema }: SEOProps) => {
  const url = `${CLINIC.url}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};
