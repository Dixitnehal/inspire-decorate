
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!spotlightRef.current) return;
      
      const spotlight = spotlightRef.current;
      const rect = spotlight.getBoundingClientRect();
      
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Update spotlight position
      spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(200, 168, 125, 0.4) 0%, rgba(200, 168, 125, 0) 70%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-decor-light/50"
        ></div>
        <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-[2px]"></div>
        </div>
        <div ref={spotlightRef} className="spotlight animate-spotlight"></div>
      </div>

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <span className="inline-block text-sm font-medium px-3 py-1 bg-decor-accent/10 text-decor-accent rounded-full mb-4">
                AI-Powered Interior Design
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-decor-primary">
                Transform Your Space with <span className="text-gradient">AI Design</span>
              </h1>
            </div>
            <p className="text-decor-secondary text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
              Create stunning interiors tailored to your style and budget with our AI-powered design assistant.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="bg-decor-accent hover:bg-decor-accent/90 text-white rounded-md w-full sm:w-auto"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-decor-gray-light hover:bg-decor-light w-full sm:w-auto"
                >
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
                alt="Modern interior design"
                className="w-full h-auto object-cover animate-fadeIn"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel rounded-xl p-4 backdrop-blur-lg bg-white/30">
                  <p className="text-white text-sm font-medium">
                    "DecorMind transformed my living room in minutes! The AI suggestions were spot on."
                  </p>
                  <p className="text-white/80 text-xs mt-2">- Emily Johnson, Interior Designer</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-28 h-28 glass-panel rounded-full flex items-center justify-center animate-float shadow-lg hidden lg:flex">
              <div className="text-center">
                <p className="text-2xl font-bold text-decor-primary">85%</p>
                <p className="text-xs text-decor-secondary">Time Saved</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl glass-panel p-3 shadow-lg hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
              <p className="text-sm text-decor-primary font-medium">AI Suggestions</p>
              <div className="flex gap-2 mt-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-md" 
                    style={{ 
                      backgroundColor: i === 1 ? "#E0D4C0" : i === 2 ? "#A69F88" : "#5A4F3F",
                      opacity: i === 1 ? 1 : i === 2 ? 0.8 : 0.6
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
