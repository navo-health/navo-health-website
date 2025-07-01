
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Journey = () => {
  const [activeStep, setActiveStep] = useState(0);

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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The <span className="text-teal-600">Navo</span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From data input to clinical insight - discover how our AI-driven platform 
            transforms fetal health assessment.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Timeline */}
            <div id="journey-timeline" className="space-y-12">
              {journeySteps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-6 transition-all duration-500 ${
                    index === activeStep ? 'opacity-100' : 'opacity-50'
                  }`}
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

            {/* Animated Cards */}
            <div className="lg:sticky lg:top-24 h-[450px]">
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
                        <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-3xl font-bold text-teal-600">
                            {index + 1}
                          </span>
                        </div>
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
        </div>
      </div>
    </section>
  );
};

export default Journey;
