import { Button } from "@/components/ui/button";
import { RocketLaunch, PlayCircle, ArrowDown } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const TYPEWRITER_TEXT = "From the Latin term natalis (birth) and voyage (journey), Navo encapsulates the company’s vision to guide every pregnancy safely from start to delivery.";

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typewriter effect state
  const [typewriter, setTypewriter] = useState("");
  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;
    function type() {
      if (i <= TYPEWRITER_TEXT.length) {
        setTypewriter(TYPEWRITER_TEXT.slice(0, i));
        i++;
        timeout = setTimeout(type, 18);
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-teal-100 overflow-hidden font-manrope">
      {/* Desktop: floating absolute */}
      <img
        src="/lovable-uploads/navo-app.jpg"
        alt="Navo App Preview"
        className="hidden md:block absolute right-12 bottom-8 lg:right-24 lg:bottom-12 w-64 lg:w-80 xl:w-[28rem] z-0 drop-shadow-2xl pointer-events-none select-none"
        style={{
          transform: 'perspective(1200px) rotateY(-24deg) rotateX(18deg) scale(1.08)',
          animation: 'floatApp 4.5s ease-in-out infinite',
        }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 opacity-0 translate-y-8 animate-fade-in-hero delay-[100ms]">
          <img 
            src="/lovable-uploads/navo-logo.png" 
            alt="Navo Logo" 
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3 transition-all duration-700 opacity-0 translate-y-8 animate-fade-in-hero delay-[200ms]">
            <span className="text-teal-600">Navo</span>
          </h1>
          <div className="text-2xl md:text-3xl font-semibold italic text-gray-700 mb-6 transition-all duration-700 opacity-0 translate-y-8 animate-fade-in-hero delay-[300ms]">Supporting safer births, every step of the way</div>
        </div>

        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-12 bg-white/80 rounded-xl p-6 shadow-lg min-h-[180px] md:min-h-[220px] font-lora opacity-0 translate-y-8 animate-fade-in-hero delay-[400ms]">
          <div className="mb-4">
            <div className="text-sm text-gray-500 font-mono mb-1 font-lora">Navo (n.)</div>
            <div className="text-xs text-gray-400 italic mb-2 font-lora">/ˈnɑː-voʊ/</div>
            <div className="text-base text-gray-700 mb-2 min-h-[2.5em] font-lora">
              <span className="block whitespace-pre-line">{typewriter}<span className={typewriter.length < TYPEWRITER_TEXT.length ? "border-r-2 border-gray-500 animate-pulse" : ""}></span></span>
            </div>
            <div className="text-lg md:text-xl font-semibold italic text-teal-700 bg-teal-50/60 rounded-lg px-4 py-3 mb-2 shadow-sm">
              We are a health technology company focused on transforming prenatal care through AI. Navo is developing a clinical decision-support tool, a CTG (Cardiotocography) foetal health classifier, to assist healthcare providers in identifying, monitoring, and managing risks during pregnancy and labour.
            </div>
          </div>
        </div>

        {/* Mobile: app image below card, above CTA */}
        <div className="md:hidden w-full flex justify-center mb-8 mt-2">
          <img
            src="/lovable-uploads/navo-app.jpg"
            alt="Navo App Preview"
            className="w-40 xs:w-48 sm:w-56 rounded-xl drop-shadow-2xl pointer-events-none select-none"
            style={{
              transform: 'perspective(1200px) rotateY(-24deg) rotateX(18deg) scale(1.08)',
              animation: 'floatApp 4.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 translate-y-8 animate-fade-in-hero delay-[500ms]">
          <Button
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <a href="https://navo.health/" target="_blank" rel="noopener noreferrer">
              <RocketLaunch className="w-6 h-6 mr-2" weight="duotone" />
              Get Started
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <PlayCircle className="w-6 h-6 mr-2" weight="duotone" />
            Watch Demo
          </Button>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToFeatures}
          className="animate-bounce cursor-pointer p-2 rounded-full hover:bg-teal-100 transition-colors duration-300 opacity-0 translate-y-8 animate-fade-in-hero delay-[600ms]"
          aria-label="Scroll to features"
        >
          <ArrowDown className="w-8 h-8 text-teal-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

/* Add floating animation for the app image */
const style = document.createElement('style');
style.innerHTML = `@keyframes floatApp { 0%, 100% { transform: perspective(1200px) rotateY(-24deg) rotateX(18deg) translateY(0) scale(1.08); } 50% { transform: perspective(1200px) rotateY(-24deg) rotateX(18deg) translateY(-24px) scale(1.12); } }`;
if (typeof window !== 'undefined' && !document.getElementById('floatAppKeyframes')) {
  style.id = 'floatAppKeyframes';
  document.head.appendChild(style);
}
