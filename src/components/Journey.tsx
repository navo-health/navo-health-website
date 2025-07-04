
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import mermaid from 'mermaid';
import { useRef } from 'react';
import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MapTrifold } from "@phosphor-icons/react";

// Interactive Mermaid Diagram with reset zoom
function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ startOnLoad: false });
      const id = `mermaid-diagram-${Math.random().toString(36).substr(2, 9)}`;
      // Dedent and trim chart string
      const dedented = chart.replace(/^\s+/gm, '').trim();
      setError(null);
      mermaid.render(id, dedented)
        .then(({ svg }) => {
          ref.current!.innerHTML = svg;
          // Make SVG responsive
          const svgEl = ref.current!.querySelector('svg');
          if (svgEl) {
            svgEl.setAttribute('width', '100%');
            svgEl.setAttribute('height', '100%');
            svgEl.style.maxWidth = '100%';
            svgEl.style.height = 'auto';
          }
        })
        .catch((err) => {
          setError('Diagram could not be rendered. Please try on a larger screen or check diagram syntax.');
        });
    }
  }, [chart]);
  return (
    <div style={{ width: '100%', overflowX: 'auto', minHeight: 120 }} className="bg-white rounded-lg border border-gray-100 p-2 shadow-sm">
      {error ? (
        <div className="text-red-500 text-center text-sm py-4">{error}</div>
      ) : null}
      <div ref={ref} style={{ display: error ? 'none' : undefined }} />
    </div>
  );
}

const Journey = () => {
  const [activeStep, setActiveStep] = useState(0);
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

  const journeySteps = [
    {
      title: "Data Collection",
      description: "Clinicians input CTG features including baseline heart rate, accelerations, and prolonged decelerations.",
      details: "Our secure platform accepts standardized CTG parameters, ensuring consistent data quality for accurate predictions."
    },
    {
      title: "AI Analysis",
      description: "Advanced machine learning models process the data to predict fetal health status.",
      details: "Trained classifiers categorize the fetus as Normal, Suspect, or Pathological with confidence scores."
    },
    {
      title: "SHAP Interpretation",
      description: "Explainable AI identifies the most influential features behind each prediction.",
      details: "SHAP values provide transparency, showing exactly which factors contribute to the assessment."
    },
    {
      title: "Literature Validation",
      description: "RAG pipeline retrieves relevant academic research to support predictions.",
      details: "Our vectorized database matches predictions with published medical literature for evidence-based validation."
    },
    {
      title: "Clinical Report",
      description: "LLM generates comprehensive, medically grounded reports for clinicians.",
      details: "Human-readable reports combine AI insights with academic evidence for informed decision-making."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById('journey-timeline');
      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Animate as the timeline scrolls through the vertical center of the viewport.
        // Progress is 0 when the top of the timeline reaches the center,
        // and 1 when the bottom of the timeline reaches the center.
        const triggerPoint = viewportHeight / 2;
        const progress = (triggerPoint - rect.top) / rect.height;
        const scrollProgress = Math.max(0, Math.min(1, progress));

        const step = Math.floor(scrollProgress * journeySteps.length);
        setActiveStep(Math.min(step, journeySteps.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [journeySteps.length]);

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3 transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[100ms] opacity-100 translate-y-0' : ''}`}>
            <MapTrifold className="text-teal-600 w-10 h-10" weight="duotone" />
            The <span className="text-teal-600">Navo</span> Journey
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[200ms] opacity-100 translate-y-0' : ''}`}>
            From data input to clinical insight - discover how our AI-driven platform 
            transforms fetal health assessment.
          </p>
        </div>

        {/* Interactive AI Stack Diagram and Steps Side by Side */}
        <div className={`flex flex-col lg:flex-row gap-8 items-center justify-center mb-16 w-full max-w-6xl mx-auto transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[300ms] opacity-100 translate-y-0' : ''}`}> 
          {/* Steps and Animated Cards (left) */}
          <div className={`flex-1 w-full flex flex-col lg:flex-row gap-8 order-1 lg:order-none items-center lg:items-start justify-center transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[400ms] opacity-100 translate-y-0' : ''}`}> 
            {/* Steps List */}
            <div className="max-w-sm w-full mx-auto">
              <div className="grid gap-8">
            <div id="journey-timeline" className="space-y-12">
              {journeySteps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-6 transition-all duration-700 opacity-0 translate-y-8 ${visible ? `animate-fade-in-hero delay-[${500 + index * 100}ms] opacity-100 translate-y-0` : ''} ${index === activeStep ? 'opacity-100' : 'opacity-50'}`}
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-2xl transition-all duration-500 ${
                    index === activeStep ? 'bg-teal-600 scale-110' : 'bg-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
              </div>
            </div>
            {/* Animated Cards (right of steps, only on large screens) */}
            <div className={`lg:sticky lg:top-24 h-[450px] hidden lg:block flex-1 min-w-[300px] mx-auto transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[700ms] opacity-100 translate-y-0' : ''}`}>
              <div className="relative w-full h-full">
                {journeySteps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeStep
                        ? 'opacity-100 translate-y-0'
                        : index < activeStep
                        ? 'opacity-0 -translate-y-10'
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transformOrigin: 'center' }}
                  >
                    <Card className="shadow-2xl border-0 bg-white h-full w-full">
                      <CardContent className="p-8 flex flex-col justify-center items-center text-center h-full">
                        {/* Removed the number in the card */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          {step.description}
                        </p>
                        <p className="text-base text-gray-500 leading-relaxed">
                          {step.details}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Diagram (right) */}
          <div className={`hidden md:flex flex-1 min-w-[250px] max-w-md mx-auto lg:mx-0 order-2 lg:order-none flex-col items-center justify-center transition-all duration-700 opacity-0 translate-y-8 ${visible ? 'animate-fade-in-hero delay-[800ms] opacity-100 translate-y-0' : ''}`}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full rounded-xl shadow-lg bg-white p-4 border border-teal-100 hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                  <MermaidDiagram chart={`flowchart TD
  subgraph Preprocessing & Model Training
    A1["Representative Data Split"]
    A2["Feature Selection"]
    A3["Hyperparameter Tuning"]
    A4["Model Training"]
    A5["Metrics & Monitoring"]
    A1 --> A2
    A2 --> A3
    A3 --> A4
    A4 --> A5
  end
  subgraph Health Classification
    B1["Model Predictions"]
    B2["SHAP Analysis"]
    B1 --> B2
  end
  subgraph Context Creation
    C1["Knowledge Base"]
    C2["Top Feature Extraction"]
    C3["Retrieval Augmented Generation"]
    C1 --> C2
    C2 --> C3
  end
  subgraph Final Output
    D1["Report Generation"]
    D2["Users are given a report with citations for more well informed decision-making"]
    D1 --> D2
  end
  A5 --> B1
  B2 --> C2
  C3 --> D1

  %% Custom node styles for cohesion
  classDef teal fill:#14b8a6,color:#fff,stroke:#0f766e,stroke-width:2px;
  classDef blue fill:#38bdf8,color:#fff,stroke:#0ea5e9,stroke-width:2px;
  classDef purple fill:#a78bfa,color:#fff,stroke:#7c3aed,stroke-width:2px;
  classDef gray fill:#f1f5f9,color:#334155,stroke:#cbd5e1,stroke-width:2px;

  class A1,A2,A3,A4,A5 teal;
  class B1,B2 blue;
  class C1,C2,C3 purple;
  class D1,D2 gray;
`} />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <DialogTitle>Navo AI Stack & Report Generation Pipeline</DialogTitle>
                <div className="w-full max-h-[70vh] overflow-auto">
                  <MermaidDiagram chart={`flowchart TD
  subgraph Preprocessing & Model Training
    A1["Representative Data Split"]
    A2["Feature Selection"]
    A3["Hyperparameter Tuning"]
    A4["Model Training"]
    A5["Metrics & Monitoring"]
    A1 --> A2
    A2 --> A3
    A3 --> A4
    A4 --> A5
  end
  subgraph Health Classification
    B1["Model Predictions"]
    B2["SHAP Analysis"]
    B1 --> B2
  end
  subgraph Context Creation
    C1["Knowledge Base"]
    C2["Top Feature Extraction"]
    C3["Retrieval Augmented Generation"]
    C1 --> C2
    C2 --> C3
  end
  subgraph Final Output
    D1["Report Generation"]
    D2["Users are given a report with citations for more well informed decision-making"]
    D1 --> D2
  end
  A5 --> B1
  B2 --> C2
  C3 --> D1

  %% Custom node styles for cohesion
  classDef teal fill:#14b8a6,color:#fff,stroke:#0f766e,stroke-width:2px;
  classDef blue fill:#38bdf8,color:#fff,stroke:#0ea5e9,stroke-width:2px;
  classDef purple fill:#a78bfa,color:#fff,stroke:#7c3aed,stroke-width:2px;
  classDef gray fill:#f1f5f9,color:#334155,stroke:#cbd5e1,stroke-width:2px;

  class A1,A2,A3,A4,A5 teal;
  class B1,B2 blue;
  class C1,C2,C3 purple;
  class D1,D2 gray;
`} />
                </div>
              </DialogContent>
            </Dialog>
            <div className="text-gray-500 text-sm mt-2 text-center">Click to enlarge: Navo AI Stack &amp; Report Generation Pipeline</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
