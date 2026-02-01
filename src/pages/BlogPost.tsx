import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { format } from "date-fns";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-48 mb-8" />
          <Skeleton className="h-96 w-full mb-8" />
          <Skeleton className="h-64 w-full" />
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="font-heading text-3xl text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="default">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-20">
        <div className="container-custom">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.published_at 
                  ? format(new Date(post.published_at), "MMMM d, yyyy")
                  : "Draft"
                }
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {post.image_url && (
            <div className="max-w-4xl mx-auto mb-12">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-12 p-8 bg-accent rounded-2xl text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Need Career Guidance?
            </h3>
            <p className="text-muted-foreground mb-4">
              Get personalized advice from our expert counselors.
            </p>
            <Link to="/contact">
              <Button variant="default">
                Get Free Counseling
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
