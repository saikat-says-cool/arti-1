import { Helmet } from "react-helmet-async";

interface SEOProps {
  schema: object;
}

const SEO = ({ schema }: SEOProps) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;