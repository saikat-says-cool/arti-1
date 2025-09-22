import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const fetchBlogs = async () => {
  const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

const Blog = () => {
  const { data: posts, isLoading, error } = useQuery({ queryKey: ["blogs"], queryFn: fetchBlogs });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    if (!posts) return [];
    const uniqueCategories = new Set(posts.map(post => post.category).filter(Boolean));
    return ["All", ...Array.from(uniqueCategories)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter(post => {
      const matchesCategory = selectedCategory === "All" || !selectedCategory || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog - Artificialyze</title>
        <meta name="description" content="Explore the latest insights on AI automation, business efficiency, and technology trends from the experts at Artificialyze." />
      </Helmet>
      <div className="container mx-auto py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Insights on <span className="text-accent">AI & Automation</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay ahead of the curve with our expert analysis, tutorials, and case studies on the world of artificial intelligence.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Search articles..."
            className="flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex-shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          {isLoading && <p className="text-center">Loading posts...</p>}
          {error && <p className="text-center text-destructive">Failed to load posts.</p>}
          {filteredPosts && filteredPosts.length === 0 && !isLoading && (
            <p className="text-center text-muted-foreground">No posts found.</p>
          )}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts?.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <Card className="h-full bg-secondary/20 border-secondary/40 hover:border-accent transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <img 
                      src={post.cover_image_url || "/artificialyze-logo.svg"} 
                      alt={post.title} 
                      className={`w-full h-40 rounded-t-lg bg-muted ${post.cover_image_url ? 'object-cover' : 'object-contain p-4'}`} 
                    />
                    <CardTitle className="mt-4">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {new Date(post.created_at).toLocaleDateString()} | {post.category}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;