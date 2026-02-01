import { ReactNode } from "react";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ badge, title, description, children }: PageHeaderProps) {
  return (
    <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      <div className="container-custom relative z-10 text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">
            {badge}
          </span>
        )}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
