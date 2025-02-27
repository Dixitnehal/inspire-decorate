
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Book, 
  HelpCircle, 
  Search, 
  ChevronRight, 
  MessageSquare, 
  FileText, 
  Video, 
  Phone,
  Mail
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ data
  const faqs = [
    {
      question: "How does DecorMind's AI technology work?",
      answer: "DecorMind uses advanced machine learning algorithms and computer vision to analyze your room's dimensions, existing furniture, and style preferences. Our AI then generates personalized design recommendations, taking into account your budget constraints and aesthetic preferences."
    },
    {
      question: "Can I customize the AI-generated designs?",
      answer: "Absolutely! After our AI generates initial design concepts, you can modify any aspect to suit your preferences. You can change colors, swap furniture pieces, adjust layouts, and more. The AI will adapt and provide updated recommendations based on your modifications."
    },
    {
      question: "How accurate are the room visualizations?",
      answer: "Our room visualizations are highly realistic, rendered using advanced 3D modeling technology. While they provide a very close representation of how your space will look, minor variations in color, texture, and lighting may occur between the visualization and real life."
    },
    {
      question: "Is my IKEA account information secure with DecorMind?",
      answer: "Yes, we take data security very seriously. DecorMind uses bank-level encryption to protect all user data, including your IKEA account information. We never store your IKEA password, instead using secure token-based authentication methods for integration."
    },
    {
      question: "Can I use DecorMind if I'm not buying furniture from IKEA?",
      answer: "Yes! While we offer seamless integration with IKEA products, DecorMind can be used with any furniture sources. You can manually add furniture from any retailer, or simply use our AI for layout and style recommendations without purchasing furniture through our platform."
    },
    {
      question: "What if I'm not satisfied with the design recommendations?",
      answer: "We stand behind our AI design technology. If you're not satisfied with the initial recommendations, you can provide feedback and our AI will generate new designs based on your input. If you're still not happy, our customer support team will work with you to ensure you get a design that meets your expectations."
    }
  ];

  // Support categories
  const supportCategories = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Chat Support",
      description: "Connect with our team via live chat",
      url: "#",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Documentation",
      description: "Detailed guides and resources",
      url: "#",
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Tutorials",
      description: "Step-by-step walkthrough videos",
      url: "#",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "24-48 hour response time",
      url: "#",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-decor-primary text-white py-16 md:py-24">
          <div className="content-container text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Find answers to common questions and learn how to make the most of DecorMind's features.
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Search for answers..."
                className="w-full h-12 px-5 pr-12 text-decor-primary rounded-lg border-0 focus-visible:ring-decor-accent/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-decor-secondary" />
            </div>
          </div>
        </section>
        
        {/* Support Categories Section */}
        <section className="py-16 bg-white">
          <div className="content-container">
            <h2 className="text-2xl font-semibold text-decor-primary mb-8 text-center">
              Support Categories
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportCategories.map((category, index) => (
                <a 
                  key={index} 
                  href={category.url}
                  className="bg-decor-light rounded-lg p-6 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-decor-accent