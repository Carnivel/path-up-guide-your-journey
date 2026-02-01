import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, BookOpen, Globe } from "lucide-react";

export function HeroSection() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Students Guided" },
    { icon: BookOpen, value: "500+", label: "Courses" },
    { icon: Globe, value: "50+", label: "Partner Colleges" },
  ];

  return (
    <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-amber" />
              <span className="text-white/90 text-sm font-medium">Your Career Journey Starts Here</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-fade-up stagger-1">
              Find the Right Path
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-secondary">
                For Your Future
              </span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up stagger-2">
              Expert career counseling for students after +2 and graduates. 
              Let us guide you to the right course, college, and career path.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <Link to="/contact">
                <Button variant="cta" size="xl">
                  Get Free Counseling
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="heroOutline" size="xl">
                  Explore Courses
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-up stagger-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <stat.icon className="w-6 h-6 text-secondary mx-auto lg:mx-0 mb-2" />
                  <p className="font-heading text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="hidden lg:block animate-fade-up stagger-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-3xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
                alt="Students celebrating success"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Join 10,000+</p>
                    <p className="text-sm text-muted-foreground">Happy Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
