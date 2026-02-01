import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Star, Quote } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4);
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from students and parents who achieved their goals with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {isLoading ? (
            // Loading Skeletons
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-20 w-full mb-4" />
                <div className="flex items-center gap-3">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </div>
            ))
          ) : testimonials?.length === 0 ? (
            <p className="col-span-2 text-center text-muted-foreground">
              No testimonials yet.
            </p>
          ) : (
            testimonials?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-2xl p-6 border border-border card-hover relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
