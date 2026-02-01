import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Compass,
  GraduationCap,
  Building2,
  Stethoscope,
  Globe,
  FileCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Career Counseling",
    description: "Discover your true calling with our expert career counselors who understand your unique strengths, interests, and goals.",
    features: [
      "Psychometric assessments",
      "One-on-one counseling sessions",
      "Career aptitude testing",
      "Industry insights & trends",
      "Personalized career roadmap",
    ],
    color: "from-primary to-primary/80",
  },
  {
    icon: GraduationCap,
    title: "Course Selection",
    description: "Make informed decisions about your educational path with comprehensive course comparison and guidance.",
    features: [
      "Stream-wise course options",
      "Eligibility assessment",
      "Future scope analysis",
      "Fee structure comparison",
      "Career outcomes mapping",
    ],
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Building2,
    title: "College Admission Support",
    description: "Navigate the complex admission process with end-to-end support from application to enrollment.",
    features: [
      "College shortlisting",
      "Application assistance",
      "Document preparation",
      "Admission tracking",
      "Seat confirmation support",
    ],
    color: "from-primary to-secondary",
  },
  {
    icon: Stethoscope,
    title: "Nursing Admissions",
    description: "Specialized guidance for aspiring healthcare professionals looking to pursue nursing programs.",
    features: [
      "BSc Nursing guidance",
      "GNM & ANM support",
      "Post Basic B.Sc Nursing",
      "Top nursing college list",
      "Scholarship assistance",
    ],
    color: "from-secondary to-primary",
  },
  {
    icon: Globe,
    title: "Study Abroad Guidance",
    description: "Explore international education opportunities with comprehensive support for overseas admissions.",
    features: [
      "Country & university selection",
      "Entrance test preparation",
      "Visa documentation",
      "Scholarship guidance",
      "Pre-departure briefing",
    ],
    color: "from-primary to-primary/80",
  },
  {
    icon: FileCheck,
    title: "Resume & Interview Support",
    description: "Boost your placement chances with professional resume building and interview preparation.",
    features: [
      "Professional resume writing",
      "LinkedIn profile optimization",
      "Mock interviews",
      "Presentation skills training",
      "Placement preparation",
    ],
    color: "from-secondary to-secondary/80",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        badge="Our Services"
        title="Comprehensive Career Support"
        description="From career discovery to successful placements, we're with you at every step"
      />

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="default" size="lg">
                      Enquire Now
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-2xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`} />
                  <div className="bg-card rounded-2xl p-8 border border-border relative">
                    <div className="text-center">
                      <service.icon className="w-20 h-20 text-primary/20 mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">
                        Get personalized {service.title.toLowerCase()} tailored to your needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a free counseling session with our experts and take the first step towards your dream career.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
