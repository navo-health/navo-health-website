
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-teal-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-teal-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-teal-400 rounded-full opacity-25 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/a2b4c7a5-f642-4e94-a589-da4d88b8fc8a.png" 
            alt="Navo Logo" 
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-teal-600">NAVO</span>
            <span className="block text-2xl md:text-3xl font-normal text-gray-600 mt-2">
              Fetal Health AI
            </span>
          </h1>
        </div>

        {/* Main headline */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in delay-300">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionizing Fetal Health Assessment with 
            <span className="text-teal-600"> AI-Powered Insights</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Empowering clinicians with predictive analytics, evidence-based validation, 
            and transparent decision support for better maternal-fetal outcomes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-500">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all duration-300 hover:scale-105">
            Watch Demo
          </Button>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToFeatures}
          className="animate-bounce cursor-pointer p-2 rounded-full hover:bg-teal-100 transition-colors duration-300"
          aria-label="Scroll to features"
        >
          <ArrowDown className="w-8 h-8 text-teal-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
