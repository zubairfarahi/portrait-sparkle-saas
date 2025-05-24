
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Users, User } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onStartNow: () => void;
}

const Hero = ({ onStartNow }: HeroProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        {/* Navigation */}
        <div className="absolute top-8 right-8">
          <Link to="/portfolio">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <User className="w-4 h-4 mr-2" />
              Portfolio
            </Button>
          </Link>
        </div>

        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white font-medium">AI-Powered Background Removal</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Perfect
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Portraits
            </span>
            <br />
            Every Time
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Remove backgrounds from portrait images instantly with our advanced AI technology. 
            Professional results in seconds, no design skills required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={onStartNow}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5 mr-2" />
              Try Free Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              View Pricing
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>50,000+ users</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div>⭐⭐⭐⭐⭐ 4.9/5 rating</div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div>1M+ images processed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
