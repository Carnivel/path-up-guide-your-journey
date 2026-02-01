import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 12345 67890", "+91 98765 43210"],
    action: { label: "Call Now", href: "tel:+911234567890" },
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@pathup.in", "support@pathup.in"],
    action: { label: "Send Email", href: "mailto:hello@pathup.in" },
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Education Street", "Knowledge City, India - 123456"],
    action: null,
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
    action: null,
  },
];

const Contact = () => {
  const whatsappNumber = "911234567890";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in career counseling from Path Up.");

  return (
    <Layout>
      <PageHeader
        badge="Contact Us"
        title="Get In Touch"
        description="We're here to help you find your perfect career path"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Have questions about your career options? Want to know more about our services? 
                Reach out to us through any of the channels below or fill out the enquiry form.
              </p>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-5 border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                    {info.action && (
                      <a href={info.action.href} className="mt-3 inline-block">
                        <Button variant="link" size="sm" className="p-0 h-auto">
                          {info.action.label} →
                        </Button>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Enquiry Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Send Us an Enquiry
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[400px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0097456899477!2d77.5945628!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Path Up Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
