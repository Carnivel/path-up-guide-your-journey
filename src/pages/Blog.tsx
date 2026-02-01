import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { format } from "date-fns";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <PageHeader
        badge="Blog"
        title="Career Insights & Tips"
        description="Expert advice and latest updates on education and careers"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-card rounded-2xl overflow-hidden border border-border">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6">
                    <Skeleton className="h-4 w-20 mb-3" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              ))
            ) : posts?.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <Newspaper className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              posts?.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-2xl overflow-hidden border border-border card-hover group"
                >
                  {/* Post Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image_url || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-block px-2 py-1 rounded bg-accent text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs">
                        <Calendar className="w-3 h-3" />
                        {post.published_at 
                          ? format(new Date(post.published_at), "MMM d, yyyy")
                          : "Draft"
                        }
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
