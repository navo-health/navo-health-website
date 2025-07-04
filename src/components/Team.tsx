
import { Card, CardContent } from "@/components/ui/card";
import React, { useRef, useEffect, useState } from "react";

const Team = () => {
  const founders = [
    {
      name: "Joshua Yim",
      role: "Leading Navo's vision in AI-powered fetal health",
      image: "/lovable-uploads/joshua-yim.png",
      description: "Passionate about revolutionizing maternal-fetal medicine through cutting-edge AI technology."
    },
    {
      name: "Gavin Soh", 
      role: "Architecting the future of medical AI",
      image: "/lovable-uploads/gavin-soh.png",
      description: "Expert in machine learning and healthcare technology, driving innovation in predictive analytics."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
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
    <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[100ms] opacity-100 translate-y-0' : ''}`}> 
            Meet the <span className="text-teal-600">Founders</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[200ms] opacity-100 translate-y-0' : ''}`}> 
            Our team combines deep expertise in AI, healthcare technology, and clinical medicine 
            to transform fetal health assessment worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className={`transition-all duration-700 opacity-0 translate-y-8 ${visible ? `animate-fade-in-hero delay-[${300 + index * 200}ms] opacity-100 translate-y-0` : ''}`}>
              <Card 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-teal-100 group-hover:border-teal-200 transition-colors duration-300 shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-teal-600 font-semibold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {founder.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
