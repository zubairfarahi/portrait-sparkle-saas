
import { Zap, Shield, Download, Smartphone, Clock, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast AI",
      description: "Advanced neural networks process your images in seconds with professional-quality results."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All processing happens in your browser. Your images never leave your device."
    },
    {
      icon: Download,
      title: "High Quality Output",
      description: "Download high-resolution images with perfect edge detection and natural transparency."
    },
    {
      icon: Smartphone,
      title: "Works Anywhere",
      description: "Fully responsive design works seamlessly on desktop, tablet, and mobile devices."
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "No waiting in queues. Get your processed images immediately with real-time preview."
    },
    {
      icon: Star,
      title: "Professional Grade",
      description: "Studio-quality results trusted by photographers, designers, and content creators."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of image editing with cutting-edge AI technology 
            and user-friendly design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
