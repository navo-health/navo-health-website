
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, ChartBar, FileText } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning models analyze CTG features to predict fetal health status with high accuracy."
    },
    {
      icon: Shield,
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

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-teal-600">Navo</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI with medical expertise 
            to deliver trustworthy fetal health assessments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-teal-50"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
