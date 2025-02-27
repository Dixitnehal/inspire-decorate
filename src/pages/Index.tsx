
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FilterOptions from "@/components/FilterOptions";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

// Sample product data
const featuredProducts = [
  {
    id: "p1",
    name: "Modern Leather Sofa",
    price: 899.99,
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "p2",
    name: "Minimalist Dining Table",
    price: 549.99,
    category: "Dining",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "Scandinavian Bed Frame",
    price: 699.99,
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "p4",
    name: "Ergonomic Office Chair",
    price: 349.99,
    category: "Office",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1974&auto=format&fit=crop",
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <FeaturesSection />
        
        {/* Featured Products Section */}
        <section className="py-20 bg-decor-light">
          <div className="content-container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-semibold text-decor-primary mb-2">Featured Products</h2>
                <p className="text-decor-secondary max-w-2xl">
                  High-quality furniture pieces selected by our AI based on current trends and customer favorites.
                </p>
              </div>
              <Link to="/products" className="hidden md:flex items-center mt-4 md:mt-0 text-decor-accent hover:text-decor-accent/80 font-medium">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="mb-10">
              <FilterOptions />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="text-center mt-10 md:hidden">
              <Link to="/products">
                <Button variant="outline" className="border-decor-gray-light">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="content-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-decor-primary mb-4">
                How DecorMind Works
              </h2>
              <p className="text-decor-secondary text-lg">
                Our simple process makes interior design accessible to everyone, regardless of design experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Share Your Space",
                  description: "Upload photos and measurements of your room along with your design preferences and budget.",
                  image: "https://images.unsplash.com/photo-1581439645268-ea7bbe6bd091?q=80&w=2012&auto=format&fit=crop"
                },
                {
                  step: "02",
                  title: "AI Design Generation",
                  description: "Our AI analyzes your inputs and generates multiple design options tailored to your needs.",
                  image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop"
                },
                {
                  step: "03",
                  title: "Customize & Purchase",
                  description: "Refine the design to your liking and purchase the recommended furniture with one click.",
                  image: "https://images.unsplash.com/photo-1575909812264-6902b55846ad?q=80&w=2070&auto=format&fit=crop"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-md mb-6">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start">
                    <span className="text-3xl font-bold text-decor-accent mr-4 font-serif">{item.step}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-decor-primary mb-2">{item.title}</h3>
                      <p className="text-decor-secondary">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-decor-primary text-white">
          <div className="content-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to transform your space?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of homeowners who have revolutionized their interiors with DecorMind's AI-powered design platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                {[
                  "Free design consultations",
                  "Access to exclusive products",
                  "Custom AI recommendations"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-decor-accent flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button 
                    size="lg" 
                    className="bg-white text-decor-primary hover:bg-white/90 w-full sm:w-auto"
                  >
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
