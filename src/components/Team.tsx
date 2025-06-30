
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const founders = [
    {
      name: "Co-Founder & CEO",
      role: "Leading Navo's vision in AI-powered fetal health",
      image: "/lovable-uploads/13ef449c-020e-4f8a-a1c2-1fc40632d6c2.png",
      description: "Passionate about revolutionizing maternal-fetal medicine through cutting-edge AI technology."
    },
    {
      name: "Co-Founder & CTO", 
      role: "Architecting the future of medical AI",
      image: "/lovable-uploads/0a34d194-2362-4fa4-9838-70e5782a53fe.png",
      description: "Expert in machine learning and healthcare technology, driving innovation in predictive analytics."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-teal-600">Founders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team combines deep expertise in AI, healthcare technology, and clinical medicine 
            to transform fetal health assessment worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={index} 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
