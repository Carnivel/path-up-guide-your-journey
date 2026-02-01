import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, GraduationCap, CheckCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

type Stream = "All" | "Science" | "Commerce" | "Arts" | "Medical" | "Engineering" | "Other";

const streams: Stream[] = ["All", "Science", "Commerce", "Arts", "Medical", "Engineering", "Other"];

const Courses = () => {
  const [selectedStream, setSelectedStream] = useState<Stream>("All");

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("name");
      
      if (error) throw error;
      return data;
    },
  });

  const filteredCourses = courses?.filter(
    (course) => selectedStream === "All" || course.stream === selectedStream
  );

  return (
    <Layout>
      <PageHeader
        badge="Courses"
        title="Explore Available Courses"
        description="Discover the perfect course for your career aspirations"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {streams.map((stream) => (
              <Button
                key={stream}
                variant={selectedStream === stream ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStream(stream)}
              >
                {stream}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))
            ) : filteredCourses?.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">No courses found for this stream.</p>
              </div>
            ) : (
              filteredCourses?.map((course) => (
                <div
                  key={course.id}
                  className="bg-card rounded-2xl p-6 border border-border card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-medium">
                      {course.stream}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {course.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <GraduationCap className="w-4 h-4" />
                    <span>{course.eligibility}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {course.description}
                  </p>

                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="w-full">
                      <CheckCircle className="w-4 h-4" />
                      Get Admission Help
                    </Button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
