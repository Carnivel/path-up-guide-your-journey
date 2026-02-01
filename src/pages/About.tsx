import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Target, Eye, Heart, Users, Award, BookOpen } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Student-First Approach",
    description: "Every decision we make is centered around what's best for our students and their future.",
  },
  {
    icon: Eye,
    title: "Transparent Guidance",
    description: "We provide honest, unbiased advice with complete transparency about opportunities and challenges.",
  },
  {
    icon: Heart,
    title: "Passionate Mentors",
    description: "Our team is genuinely passionate about helping students achieve their career aspirations.",
  },
  {
    icon: Users,
    title: "Personalized Support",
    description: "We understand each student is unique and provide customized guidance accordingly.",
  },
  {
    icon: Award,
    title: "Excellence Focus",
    description: "We strive for excellence in every aspect of our guidance and support services.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We stay updated with the latest trends and changes in education and career landscapes.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        badge="About Us"
        title="Your Trusted Career Partner"
        description="Guiding students towards successful careers since 2015"
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower every student in India with the knowledge, guidance, and support 
                they need to make informed career decisions. We believe that the right guidance 
                at the right time can transform lives and open doors to endless possibilities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted career guidance platform, helping millions of 
                students discover their true potential and build successful careers that align 
                with their passions and capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Who We Help
            </h2>
            <p className="text-muted-foreground text-lg">
              Our services are designed for students and families at every stage of the educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 text-center border border-border card-hover">
              <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                +2 Students
              </h3>
              <p className="text-muted-foreground text-sm">
                Students who have completed their 12th grade and are exploring career options 
                in various streams.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 text-center border border-border card-hover">
              <div className="w-20 h-20 rounded-full gradient-secondary mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                College Students
              </h3>
              <p className="text-muted-foreground text-sm">
                Undergraduates looking for higher studies, specializations, or career placement guidance.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 text-center border border-border card-hover">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍👩‍👧</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Parents
              </h3>
              <p className="text-muted-foreground text-sm">
                Parents seeking trustworthy guidance to help their children make the right career decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              These core values guide everything we do at Path Up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Students Guided" },
              { value: "500+", label: "College Partners" },
              { value: "95%", label: "Success Rate" },
              { value: "8+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
