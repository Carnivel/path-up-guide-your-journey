import { 
  Award, 
  Clock, 
  Users, 
  Shield,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Counselors",
    description: "Our team of experienced career counselors brings years of expertise in guiding students to success.",
  },
  {
    icon: Clock,
    title: "Personalized Approach",
    description: "We understand that every student is unique and provide customized guidance based on individual needs.",
  },
  {
    icon: Users,
    title: "Proven Track Record",
    description: "Thousands of students have achieved their dream careers with our guidance and support.",
  },
  {
    icon: Shield,
    title: "Trusted by Parents",
    description: "Parents trust us for honest, transparent advice with their children's best interests at heart.",
  },
];

const highlights = [
  "Free initial consultation",
  "End-to-end admission support",
  "Regular progress updates",
  "Post-admission assistance",
  "Direct college partnerships",
  "Scholarship guidance",
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Why Path Up
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Your Trusted Partner in Career Success
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just help you choose a career - we become your partners in building 
              a successful future. Our comprehensive approach ensures you get the best 
              guidance at every step.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-foreground text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
