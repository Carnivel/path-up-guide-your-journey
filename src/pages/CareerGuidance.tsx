import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Calculator, Palette, Briefcase, ChevronRight } from "lucide-react";

const streams = [
  {
    icon: Microscope,
    title: "After 12th Science (PCM)",
    careers: [
      { name: "Engineering (B.Tech/BE)", path: "/courses" },
      { name: "Architecture (B.Arch)", path: "/courses" },
      { name: "Aviation & Pilot Training", path: "/courses" },
      { name: "Merchant Navy", path: "/courses" },
      { name: "BSc Physics/Math/Chemistry", path: "/courses" },
      { name: "Data Science & Analytics", path: "/courses" },
    ],
    color: "from-primary to-primary/80",
  },
  {
    icon: Microscope,
    title: "After 12th Science (PCB)",
    careers: [
      { name: "Medical (MBBS)", path: "/courses" },
      { name: "Dental (BDS)", path: "/courses" },
      { name: "Nursing (BSc Nursing/GNM)", path: "/nursing" },
      { name: "Pharmacy (B.Pharm)", path: "/courses" },
      { name: "Physiotherapy (BPT)", path: "/courses" },
      { name: "Biotechnology", path: "/courses" },
    ],
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Calculator,
    title: "After 12th Commerce",
    careers: [
      { name: "Chartered Accountancy (CA)", path: "/courses" },
      { name: "Company Secretary (CS)", path: "/courses" },
      { name: "Bachelor of Commerce (B.Com)", path: "/courses" },
      { name: "BBA & MBA", path: "/courses" },
      { name: "Banking & Finance", path: "/courses" },
      { name: "Economics & Statistics", path: "/courses" },
    ],
    color: "from-primary to-secondary",
  },
  {
    icon: Palette,
    title: "After 12th Arts/Humanities",
    careers: [
      { name: "Law (BA LLB)", path: "/courses" },
      { name: "Journalism & Mass Communication", path: "/courses" },
      { name: "Psychology", path: "/courses" },
      { name: "Hotel Management", path: "/courses" },
      { name: "Fashion Design", path: "/courses" },
      { name: "Civil Services (UPSC)", path: "/courses" },
    ],
    color: "from-secondary to-primary",
  },
];

const roadmapSteps = [
  { step: "1", title: "Self Assessment", description: "Understand your interests, strengths, and aptitude" },
  { step: "2", title: "Explore Options", description: "Research various career paths and their requirements" },
  { step: "3", title: "Get Guidance", description: "Consult with career counselors for expert advice" },
  { step: "4", title: "Make a Plan", description: "Create a roadmap with clear goals and timelines" },
  { step: "5", title: "Take Action", description: "Start preparation and work towards your goals" },
];

const CareerGuidance = () => {
  return (
    <Layout>
      <PageHeader
        badge="Career Guidance"
        title="Find Your Perfect Career Path"
        description="Explore career options based on your stream and interests"
      />

      {/* Career Options by Stream */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Career Options by Stream
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the best career paths based on your educational background.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {streams.map((stream, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stream.color} flex items-center justify-center mb-4`}>
                  <stream.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {stream.title}
                </h3>
                <ul className="space-y-2">
                  {stream.careers.map((career, i) => (
                    <li key={i}>
                      <Link
                        to={career.path}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {career.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Roadmap */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Your Roadmap
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Steps to Career Success
            </h2>
            <p className="text-muted-foreground text-lg">
              Follow this simple roadmap to discover and pursue your dream career.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-border" />

            <div className="space-y-8">
              {roadmapSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-4 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-card rounded-xl p-6 border border-border inline-block ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold z-10 shrink-0">
                    {step.step}
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
              Our expert counselors can help you identify the best career path based on your unique 
              strengths, interests, and goals.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Get Free Career Counseling
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerGuidance;
