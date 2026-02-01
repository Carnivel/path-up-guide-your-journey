import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Award, BookOpen, ExternalLink, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Colleges = () => {
  const { data: colleges, isLoading } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("colleges")
        .select("*")
        .order("name");
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <PageHeader
        badge="Colleges"
        title="Partner Colleges"
        description="Explore our network of trusted educational institutions"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Colleges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-card rounded-2xl overflow-hidden border border-border">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-4" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))
            ) : colleges?.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">No colleges found.</p>
              </div>
            ) : (
              colleges?.map((college) => (
                <div
                  key={college.id}
                  className="bg-card rounded-2xl overflow-hidden border border-border card-hover"
                >
                  {/* College Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={college.image_url || "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop"}
                      alt={college.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {college.name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{college.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Award className="w-4 h-4 text-secondary" />
                      <span>{college.affiliation}</span>
                    </div>

                    {/* Courses Offered */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Courses Offered:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {college.courses_offered?.slice(0, 4).map((course, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 rounded bg-accent text-primary text-xs"
                          >
                            {course}
                          </span>
                        ))}
                        {(college.courses_offered?.length || 0) > 4 && (
                          <span className="inline-block px-2 py-1 rounded bg-muted text-muted-foreground text-xs">
                            +{(college.courses_offered?.length || 0) - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {college.admission_process && (
                      <p className="text-muted-foreground text-sm mb-4">
                        <strong>Admission:</strong> {college.admission_process}
                      </p>
                    )}

                    <div className="flex gap-2">
                      <Link to="/contact" className="flex-1">
                        <Button variant="default" size="sm" className="w-full">
                          Get Admission Help
                        </Button>
                      </Link>
                      {college.website_url && (
                        <a href={college.website_url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Colleges;
