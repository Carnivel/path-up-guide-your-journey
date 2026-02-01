import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Stethoscope, 
  Clock, 
  GraduationCap, 
  CheckCircle2,
  Award,
  Building2
} from "lucide-react";

const nursingPrograms = [
  {
    title: "BSc Nursing",
    duration: "4 Years",
    eligibility: "12th with PCB, minimum 45% marks, age 17-35",
    description: "A comprehensive undergraduate program covering all aspects of nursing practice, patient care, and healthcare management.",
    highlights: [
      "Recognized by Indian Nursing Council",
      "Clinical rotations in top hospitals",
      "Government & private job opportunities",
      "Foundation for higher studies",
    ],
  },
  {
    title: "GNM (General Nursing & Midwifery)",
    duration: "3 Years + 6 months internship",
    eligibility: "12th pass with minimum 40% marks, age 17-35",
    description: "A diploma program focusing on general nursing skills and midwifery, ideal for quick entry into healthcare careers.",
    highlights: [
      "Shorter duration than BSc",
      "Practical-oriented curriculum",
      "Good starting salary",
      "Path to BSc Nursing later",
    ],
  },
  {
    title: "ANM (Auxiliary Nursing Midwifery)",
    duration: "2 Years",
    eligibility: "10th pass, minimum 40% marks, age 17-35",
    description: "An entry-level nursing program for those who want to start a healthcare career after 10th standard.",
    highlights: [
      "Shortest nursing program",
      "Community health focus",
      "Rural healthcare opportunities",
      "Can upgrade to GNM later",
    ],
  },
  {
    title: "Post Basic BSc Nursing",
    duration: "2 Years",
    eligibility: "GNM with 1+ year experience, registered nurse",
    description: "For GNM holders who want to upgrade their qualification to a bachelor's degree while continuing to work.",
    highlights: [
      "For working nurses",
      "Distance learning available",
      "Career advancement",
      "Higher salary potential",
    ],
  },
];

const whyNursing = [
  { icon: Stethoscope, title: "High Demand", description: "Healthcare sector needs 2 million+ nurses in India" },
  { icon: Building2, title: "Job Security", description: "Recession-proof career with stable employment" },
  { icon: GraduationCap, title: "Career Growth", description: "Multiple specializations and advancement paths" },
  { icon: Award, title: "Respect", description: "Highly respected profession in society" },
];

const Nursing = () => {
  return (
    <Layout>
      <PageHeader
        badge="Nursing Admissions"
        title="Start Your Healthcare Career"
        description="Specialized guidance for nursing admissions in top institutions"
      />

      {/* Why Nursing */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Nursing?
            </h2>
            <p className="text-muted-foreground text-lg">
              A rewarding career dedicated to saving lives and making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyNursing.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center card-hover"
              >
                <div className="w-14 h-14 rounded-full gradient-secondary mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nursing Programs */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Programs
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Nursing Programs We Support
            </h2>
            <p className="text-muted-foreground text-lg">
              We provide admission guidance for all major nursing programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {nursingPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span>{program.eligibility}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-2 mb-6">
                  {program.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-foreground text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button variant="outline" size="sm" className="w-full">
                    Get Admission Help
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
                Get Started
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Ready to Begin Your Nursing Career?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Fill out the enquiry form and our nursing admission specialists will 
                guide you through the entire process - from college selection to final enrollment.
              </p>
              <div className="space-y-3">
                {[
                  "Free counseling session",
                  "College & course selection",
                  "Application assistance",
                  "Documentation support",
                  "Seat confirmation help",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Nursing Admission Enquiry
              </h3>
              <EnquiryForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-secondary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Questions About Nursing Admissions?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help you navigate the nursing admission process. 
            Get in touch for personalized guidance.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Nursing;
