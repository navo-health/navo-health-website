
import { Card, CardContent } from "@/components/ui/card";

const Technology = () => {
  const techStack = [
    {
      category: "Machine Learning",
      technologies: ["Advanced Classifiers", "SHAP Explainability", "Synthetic Data Generation"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "AI Integration", 
      technologies: ["GPT-4 / Claude", "AWS Bedrock", "RAG Pipeline"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      category: "Medical Data",
      technologies: ["CTG Analysis", "Clinical Validation", "Evidence-Based Reports"],
      color: "bg-teal-100 text-teal-800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Powered by Advanced <span className="text-teal-600">Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform integrates cutting-edge AI technologies with medical expertise 
            to deliver reliable, transparent fetal health assessments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {techStack.map((stack, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {stack.category}
                </h3>
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
          ))}
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-teal-600 mb-2">99.2%</div>
            <div className="text-gray-600">Prediction Accuracy</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-teal-600 mb-2">&lt;2s</div>
            <div className="text-gray-600">Analysis Time</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-teal-600 mb-2">10k+</div>
            <div className="text-gray-600">Research Papers</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
            <div className="text-gray-600">HIPAA Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
