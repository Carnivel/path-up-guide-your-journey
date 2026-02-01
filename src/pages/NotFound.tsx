import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center section-padding">
        <div className="text-center max-w-md">
          <div className="text-8xl font-heading font-bold text-primary/20 mb-4">404</div>
          <h1 className="font-heading text-3xl text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved. 
            Let us help you find the right path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="default" size="lg">
                <Home className="w-5 h-5" />
                Go to Home
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
