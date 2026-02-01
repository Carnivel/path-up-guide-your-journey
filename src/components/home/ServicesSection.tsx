import { Link } from "react-router-dom";
import { 
  Compass, 
  GraduationCap, 
  Building2, 
  Stethoscope, 
  Globe, 
  FileCheck,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Career Counseling",
    description: "Personalized guidance to help you discover the right career path based on your interests and strengths.",
    color: "from-primary to-primary/80",
  },
  {
    icon: GraduationCap,
    title: "Course Selection",
    description: "Expert advice on choosing the best courses aligned with your career goals and academic background.",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Building2,
    title: "College Admissions",
    description: "End-to-end support for college applications, documentation, and admission processes.",
    color: "from-primary to-secondary",
  },
  {
    icon: Stethoscope,
    title: "Nursing Admissions",
    description: "Specialized guidance for BSc Nursing, GNM, and other healthcare programs.",
    color: "from-secondary to-primary",
  },
  {
    icon: Globe,
    title: "Study Abroad",
    description: "Comprehensive support for international education including visa guidance and university selection.",
    color: "from-primary to-primary/80",
  },
  {
    icon: FileCheck,
    title: "Resume & Interview",
    description: "Professional resume building and interview preparation to boost your placement chances.",
    color: "from-secondary to-secondary/80",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Comprehensive Career Support
          </h2>
          <p className="text-muted-foreground text-lg">
            From career discovery to successful placements, we provide complete guidance 
            at every step of your educational journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border card-hover"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
