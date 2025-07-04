
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ShieldCheck, ChartBar, FileText, WarningDiamond } from "@phosphor-icons/react";
import React, { useRef, useEffect, useState } from "react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning models analyze CTG features to predict fetal health status with high accuracy."
    },
    {
      icon: ShieldCheck,
      title: "Evidence-Based Validation",
      description: "Every prediction is backed by relevant academic literature through our RAG pipeline integration."
    },
    {
      icon: ChartBar,
      title: "SHAP Transparency",
      description: "Understand exactly which features influence each prediction with explainable AI insights."
    },
    {
      icon: FileText,
      title: "Clinical Reports",
      description: "Generate comprehensive, medically grounded reports that clinicians can trust and understand."
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
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[100ms] opacity-100 translate-y-0' : ''}`}>
            <WarningDiamond className="text-teal-600 w-10 h-10" weight="duotone" />
            Problem &amp; Definition
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[200ms] opacity-100 translate-y-0' : ''}`}>
            Routine antenatal cardiotocography is not recommended for pregnant women to improve maternal and perinatal outcomes.
          </p>
          <blockquote className={`italic text-gray-500 mb-4 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[300ms] opacity-100 translate-y-0' : ''}`}>“CTG monitoring should never be regarded as a substitute for good clinical observation and judgement, or as an excuse for leaving the mother unattended during labour”<br/><span className="block mt-2 text-sm text-gray-400">International Federation of Gynecology and Obstetrics, 2015</span></blockquote>
          <blockquote className={`italic text-gray-500 mb-4 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[400ms] opacity-100 translate-y-0' : ''}`}>“No antepartum CTG should be carried out in low-risk cohorts”<br/><span className="block mt-2 text-sm text-gray-400">German Society of Gynecology and Obstetrics, 2014</span></blockquote>
          <blockquote className={`italic text-gray-500 mb-4 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[500ms] opacity-100 translate-y-0' : ''}`}>“Routine antenatal cardiotocography is not recommended for pregnant women to improve maternal and perinatal outcomes”<br/><span className="block mt-2 text-sm text-gray-400">“World Health Organization, 2016”</span></blockquote>
          <blockquote className={`italic text-gray-500 mb-8 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[600ms] opacity-100 translate-y-0' : ''}`}></blockquote>
          <div className={`grid md:grid-cols-3 gap-8 text-center mb-8 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[700ms] opacity-100 translate-y-0' : ''}`}>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">8% - 28%</div>
              <div className="text-gray-600">or 11 million births have a prevalence to develop pre/neonatal complications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">37 million</div>
              <div className="text-gray-600">births develop CTG-related precursors leading to these complications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">42 - 921k USD</div>
              <div className="text-gray-600">Typical lifetime costs to treat these cases</div>
            </div>
          </div>
          <div className={`text-gray-500 text-sm mb-2 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[800ms] opacity-100 translate-y-0' : ''}`}>In 2024, there were 132 million births globally*</div>
          <div className={`text-gray-400 text-xs transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[900ms] opacity-100 translate-y-0' : ''}`}>United Nations World Population Prospects 2024</div>
        </div>
      </div>
    </section>
  );
};

export default Features;
