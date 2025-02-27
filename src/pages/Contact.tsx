
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-decor-primary/90 to-decor-primary"></div>
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2067&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
          </div>
          <div className="content-container relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to our team with any questions, feedback, or inquiries.
            </p>
          </div>
        </section>
        
        {/* Contact Info & Form Section */}
        <section className="py-16 bg-white">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-decor-primary mb-6">
                    Contact Information
                  </h2>
                  <p className="text-decor-secondary mb-8">
                    Have questions about our AI-powered interior design platform? Our team is here to help you transform your space.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-decor-accent/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-decor-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-decor-primary mb-1">Our Location</h3>
                      <p className="text-decor-secondary">342, Clerk Colony Rd, Clerk Colony, Indore, Madhya Pradesh 452011</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-decor-accent/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-decor-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-decor-primary mb-1">Phone Number</h3>
                      <p className="text-decor-secondary">
                        <a href="tel:+917879798080" className="hover:text-decor-accent">
                          +91 7879798080
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-decor-accent/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-decor-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-decor-primary mb-1">Email Address</h3>
                      <p className="text-decor-secondary">
                        <a href="mailto:paramsachinjain@gmail.com" className="hover:text-decor-accent">
                          paramsachinjain@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-decor-accent/10 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-decor-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-decor-primary mb-1">Working Hours</h3>
                      <p className="text-decor-secondary">Monday - Friday: 9am - 6pm</p>
                      <p className="text-decor-secondary">Saturday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <div className="bg-decor-light p-6 rounded-lg">
                    <h3 className="font-medium text-decor-primary mb-3">Customer Support</h3>
                    <p className="text-decor-secondary text-sm mb-4">
                      Our customer support team is available to assist you with any questions or issues.
                    </p>
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-decor-gray-light hover:bg-decor-light-hover"
                        onClick={() => window.location.href = '/support'}
                      >
                        Visit Support Center
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-decor-primary mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-decor-primary">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-field"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-decor-primary">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-decor-primary">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="input-field"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-decor-primary">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="input-field min-h-[150px]"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-decor-accent hover:bg-decor-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-decor-light">
          <div className="content-container">
            <h2 className="text-2xl font-semibold text-decor-primary mb-8 text-center">
              Our Location
            </h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7736896861804!2d75.87051531493833!3d22.74918348610319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303ab5f5687ff%3A0x4451cfcea8e22f18!2s342%2C%20Clerk%20Colony%20Rd%2C%20Clerk%20Colony%2C%20Indore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1720352150728!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DecorMind Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
