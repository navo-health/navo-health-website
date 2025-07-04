
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Brain, Stethoscope, TestTube, Target, Calculator, ChartLine, Gauge } from "@phosphor-icons/react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React from "react";
import AutoScroll from 'embla-carousel-auto-scroll';

const Technology = () => {
  const techStack = [
    {
      category: "Machine Learning",
      icon: Brain,
      technologies: ["Advanced Classifiers", "SHAP Explainability", "Synthetic Data Generation"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "AI Integration", 
      icon: Cpu,
      technologies: ["GPT-4 / Claude", "AWS Bedrock", "RAG Pipeline"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      category: "Medical Data",
      icon: Stethoscope,
      technologies: ["CTG Analysis", "Clinical Validation", "Evidence-Based Reports"],
      color: "bg-teal-100 text-teal-800"
    }
  ];

  const [carouselApi, setCarouselApi] = React.useState(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[100ms] opacity-100 translate-y-0' : ''}`}
          >
            <span className="flex justify-center mb-2 sm:mb-0">
              <Cpu className="text-teal-600 w-10 h-10" weight="duotone" />
            </span>
            <span>
              <span className="text-teal-600">Technology</span> Stack
            </span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-xl md:max-w-3xl mx-auto px-2 sm:px-0 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[200ms] opacity-100 translate-y-0' : ''}`}>
            Our platform integrates cutting-edge AI technologies with medical expertise to deliver reliable, transparent fetal health assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full max-w-5xl mx-auto px-2">
          {techStack.map((stack, index) => (
            <div key={index} className={`transition-all duration-700 opacity-0 translate-y-8 flex justify-center ${visible ? `animate-fade-in-hero delay-[${300 + index * 150}ms] opacity-100 translate-y-0` : ''}`}> 
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg w-full max-w-xs">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center justify-center mb-4 min-h-[72px]">
                    <div className="flex items-center justify-center w-14 h-14 mb-2">
                      <stack.icon className="w-10 h-10 text-teal-600" weight="duotone" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {stack.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className={`px-4 py-2 rounded-full text-center font-medium ${stack.color} transition-all duration-300 hover:scale-105`}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Results Section - animated carousel */}
        <div className={`w-full mt-16 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[800ms] opacity-100 translate-y-0' : ''}`}>
          {/* Duplicate the cards to ensure enough slides for seamless looping on all screen sizes */}
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[AutoScroll({ speed: 2, stopOnInteraction: false, stopOnMouseEnter: false })]}
            className="w-full max-w-full"
            setApi={setCarouselApi}
          >
            <CarouselContent>
              {Array(3).fill(null).flatMap((_, repeatIdx) => {
                return [
                  // Confusion Matrix Card
                  (
                    <CarouselItem key={`confusion-${repeatIdx}`} className="flex justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 max-w-[320px] min-w-[220px]">
                      <div className="bg-blue-100 rounded-2xl shadow-md flex flex-col items-center justify-center w-full min-h-[260px] max-h-[260px] h-[260px] mx-auto flex-shrink-0">
                        <div className="text-xl md:text-2xl font-bold font-mono mb-2 text-center">Confusion Matrix</div>
                        <table className="border-separate border-spacing-1 text-center mx-auto">
                          <thead>
                            <tr className="text-gray-700 text-xs md:text-sm">
                              <th></th>
                              <th>N</th>
                              <th>S</th>
                              <th>P</th>
                            </tr>
                          </thead>
                          <tbody className="font-mono">
                            <tr>
                              <th className="text-gray-700 text-xs md:text-sm">N</th>
                              <td className="bg-blue-300 text-white font-bold rounded">489</td>
                              <td>7</td>
                              <td>1</td>
                            </tr>
                            <tr>
                              <th className="text-gray-700 text-xs md:text-sm">S</th>
                              <td>9</td>
                              <td className="bg-blue-200 text-gray-800 font-bold rounded">79</td>
                              <td>1</td>
                            </tr>
                            <tr>
                              <th className="text-gray-700 text-xs md:text-sm">P</th>
                              <td>0</td>
                              <td>1</td>
                              <td className="bg-blue-200 text-gray-800 font-bold rounded">52</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CarouselItem>
                  ),
                  // Metric Cards
                  ...[
                    {
                      icon: <Target className="w-14 h-14 md:w-16 md:h-16 mb-2 text-blue-700" weight="duotone" />,
                      label: "Accuracy",
                      value: "97%"
                    },
                    {
                      icon: <Calculator className="w-14 h-14 md:w-16 md:h-16 mb-2 text-blue-700" weight="duotone" />,
                      label: "F1-Score",
                      value: "95%"
                    },
                    {
                      icon: <ChartLine className="w-14 h-14 md:w-16 md:h-16 mb-2 text-blue-700" weight="duotone" />,
                      label: "ROC-AUC",
                      value: "99%"
                    },
                    {
                      icon: <Gauge className="w-14 h-14 md:w-16 md:h-16 mb-2 text-blue-700" weight="duotone" />,
                      label: "Brier Score",
                      value: "6%"
                    }
                  ].map((card, idx) => (
                    <CarouselItem key={`${card.label}-${repeatIdx}`} className="flex justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 max-w-[320px] min-w-[220px]">
                      <div className="bg-blue-100 rounded-2xl shadow-md flex flex-col items-center justify-center w-full min-h-[260px] max-h-[260px] h-[260px] mx-auto flex-shrink-0">
                        {card.icon}
                        <div className="text-xl md:text-2xl font-bold font-mono mb-2 text-center">{card.label}</div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-700 text-center">{card.value}</div>
                      </div>
                    </CarouselItem>
                  ))
                ];
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Technology;
