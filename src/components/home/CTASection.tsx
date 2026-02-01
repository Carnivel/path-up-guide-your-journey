import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
            Get free career counseling from our experts. We'll help you discover 
            the best path for your future, absolutely free of charge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+911234567890">
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>

          <p className="mt-6 text-white/60 text-sm">
            No obligations • 100% Free • Instant Response
          </p>
        </div>
      </div>
    </section>
  );
}
