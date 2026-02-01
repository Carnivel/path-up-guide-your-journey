import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Globe, 
  DollarSign, 
  GraduationCap, 
  FileCheck, 
  Plane,
  CheckCircle2 
} from "lucide-react";

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    universities: "4,000+",
    popular: ["MIT", "Stanford", "Harvard"],
    tests: ["GRE", "TOEFL", "SAT"],
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: "150+",
    popular: ["Oxford", "Cambridge", "Imperial"],
    tests: ["IELTS", "PTE"],
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    universities: "100+",
    popular: ["UofT", "McGill", "UBC"],
    tests: ["IELTS", "TOEFL"],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    universities: "40+",
    popular: ["Melbourne", "Sydney", "ANU"],
    tests: ["IELTS", "PTE"],
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    universities: "400+",
    popular: ["TUM", "LMU", "Heidelberg"],
    tests: ["IELTS", "TestDaF"],
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    universities: "8",
    popular: ["Auckland", "Otago", "Victoria"],
    tests: ["IELTS", "PTE"],
  },
];

const steps = [
  { icon: Globe, title: "Research", description: "Explore countries, universities, and programs" },
  { icon: FileCheck, title: "Eligibility", description: "Check admission requirements and prepare documents" },
  { icon: GraduationCap, title: "Entrance Tests", description: "Prepare for required standardized tests" },
  { icon: DollarSign, title: "Funding", description: "Explore scholarships and financial aid options" },
  { icon: FileCheck, title: "Applications", description: "Submit applications to shortlisted universities" },
  { icon: Plane, title: "Visa & Travel", description: "Complete visa process and prepare for departure" },
];

const benefits = [
  "World-class education and facilities",
  "Global career opportunities",
  "Cultural exposure and personal growth",
  "Research and innovation exposure",
  "International networking",
  "Higher earning potential",
];

const StudyAbroad = () => {
  return (
    <Layout>
      <PageHeader
        badge="Study Abroad"
        title="Your Gateway to Global Education"
        description="Comprehensive guidance for international education opportunities"
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Why Study Abroad?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Studying abroad opens doors to world-class education, diverse cultures, and 
                global career opportunities. It's an investment that pays dividends throughout 
                your professional life.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Get Study Abroad Guidance
              </h3>
              <EnquiryForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Destinations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Popular Study Destinations
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore top countries for international education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {country.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {country.universities} Universities
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Top Universities:</p>
                  <div className="flex flex-wrap gap-1">
                    {country.popular.map((uni, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-accent text-primary text-xs">
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Required Tests:</p>
                  <div className="flex flex-wrap gap-1">
                    {country.tests.map((test, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs">
                        {test}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Your Study Abroad Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              We guide you through every step of the process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border card-hover relative"
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Ready to Study Abroad?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get expert guidance from our study abroad counselors. We'll help you choose 
            the right country, university, and program for your career goals.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default StudyAbroad;
