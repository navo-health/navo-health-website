
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Fetal Health Care?
          </h2>
          <p className="text-xl text-teal-100 mb-12 leading-relaxed">
            Join leading healthcare institutions in revolutionizing maternal-fetal medicine 
            with AI-powered decision support that clinicians trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Request Demo
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white border-2 hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Contact Sales
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">✓ HIPAA Compliant</div>
              <div className="text-teal-100">Enterprise-grade security</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">✓ Easy Integration</div>
              <div className="text-teal-100">Seamless EMR connectivity</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">✓ 24/7 Support</div>
              <div className="text-teal-100">Dedicated clinical support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
