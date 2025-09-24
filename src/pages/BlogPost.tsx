import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import SEO from "@/components/utils/SEO";

const fetchPost = async (slug: string) => {
  const { data, error } = await supabase.from("blogs").select("*").eq("slug", slug).single();
  if (error) throw new Error(error.message);
  return data;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => fetchPost(slug!),
    enabled: !!slug,
  });

  if (isLoading) return <div className="container mx-auto py-24 text-center">Loading...</div>;
  if (error || !post) return <div className="container mx-auto py-24 text-center text-destructive">Post not found.</div>;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.cover_image_url || "https://artificialyze.com/artificialyze-logo.svg",
    "author": {
      "@type": "Organization",
      "name": "Artificialyze"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Artificialyze",
      "logo": {
        "@type": "ImageObject",
        "url": "https://artificialyze.com/artificialyze-logo.svg"
      }
    },
    "datePublished": new Date(post.created_at).toISOString(),
    "description": post.content?.substring(0, 160) || "A blog post by Artificialyze."
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - Artificialyze</title>
        <meta name="description" content={post.content?.substring(0, 160) || "A blog post by Artificialyze."} />
      </Helmet>
      <SEO schema={articleSchema} />
      <div className="container mx-auto py-16 md:py-24">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center">{post.title}</h1>
          <p className="text-center text-muted-foreground mt-4">
            Published on {new Date(post.created_at).toLocaleDateString()} in {post.category}
          </p>
          <img 
            src={post.cover_image_url || "/artificialyze-logo.svg"} 
            alt={post.title} 
            className={`w-full h-64 rounded-lg my-8 bg-muted ${post.cover_image_url ? 'object-cover' : 'object-contain p-8'}`} 
          />
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content || ""}</ReactMarkdown>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;