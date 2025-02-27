
import { 
  PencilRuler, 
  Sparkles, 
  Palette, 
  CreditCard, 
  LayoutGrid, 
  Image as ImageIcon
} from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-decor-accent" />,
    title: "AI-Powered Design",
    description: "Our advanced AI algorithms generate stunning interior designs tailored to your preferences and space dimensions."
  },
  {
    icon: <Palette className="h-6 w-6 text-decor-accent" />,
    title: "Smart Color Schemes",
    description: "Get personalized color palette recommendations based on your style preferences and existing furniture."
  },
  {
    icon: <PencilRuler className="h-6 w-6 text-decor-accent" />,
    title: "Custom Layouts",
    description: "Generate multiple layout options for your space optimized for both aesthetics and functionality."
  },
  {
    icon: <CreditCard className="h-6 w-6 text-decor-accent" />,
    title: "Budget Management",
    description: "Set your budget and let our AI suggest furniture and decor items that fit within your financial constraints."
  },
  {
    icon: <LayoutGrid className="h-6 w-6 text-decor-accent" />,
    title: "IKEA Integration",
    description: "Seamlessly browse and include IKEA products in your design with real-time availability and pricing."
  },
  {
    icon: <ImageIcon className="h-6 w-6 text-decor-accent" />,
    title: "Realistic Renders",
    description: "View high-quality, realistic renderings of your space before making any purchasing decisions."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-decor-primary mb-4">
            Revolutionize Your Interior Design Experience
          </h2>
          <p className="text-decor-secondary text-lg">
            Our AI-powered platform offers a comprehensive suite of tools to make interior design accessible, affordable, and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-decor-light rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-decor-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-decor-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
