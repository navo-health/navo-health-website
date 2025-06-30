
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
      const section = document.getElementById('journey');
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / sectionHeight));
        const step = Math.floor(scrollProgress * journeySteps.length);
        setActiveStep(Math.min(step, journeySteps.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Timeline */}
            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-500 ${
                    index <= activeStep ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-4'
                  }`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 ${
                    index <= activeStep ? 'bg-teal-600 scale-110' : 'bg-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {step.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Step Card */}
            <div className="lg:sticky lg:top-20">
              <Card className="shadow-2xl border-0 bg-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-teal-600">
                        {activeStep + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {journeySteps[activeStep].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {journeySteps[activeStep].description}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {journeySteps[activeStep].details}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
