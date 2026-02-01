import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Courses", path: "/courses" },
  { label: "Colleges", path: "/colleges" },
  { label: "Career Guidance", path: "/career-guidance" },
  { label: "Study Abroad", path: "/study-abroad" },
  { label: "Nursing", path: "/nursing" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading text-xl md:text-2xl font-bold text-primary">
              Path Up
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 8).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary bg-accent"
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 transition-colors">
                More ▾
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[160px]">
                  {navItems.slice(8).map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="cta" size="sm">
                Free Counseling
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary bg-accent"
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-4" onClick={() => setIsMenuOpen(false)}>
              <Button variant="cta" size="lg" className="w-full">
                Get Free Counseling
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
