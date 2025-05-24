
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap } from "lucide-react";

interface PricingProps {
  onGetStarted: () => void;
}

const Pricing = ({ onGetStarted }: PricingProps) => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out our service",
      features: [
        "5 images per day",
        "Standard quality (1024px)",
        "Basic processing speed",
        "Watermark on images"
      ],
      buttonText: "Get Started Free",
      popular: false,
      icon: Zap
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Ideal for professionals and small teams",
      features: [
        "500 images per month",
        "High quality (4K resolution)",
        "Priority processing",
        "No watermarks",
        "Batch processing",
        "API access"
      ],
      buttonText: "Start Pro Trial",
      popular: true,
      icon: Crown
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For agencies and large organizations",
      features: [
        "Unlimited images",
        "Ultra-high quality (8K+)",
        "Fastest processing",
        "White-label solution",
        "Custom integrations",
        "Priority support",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-purple-600/20 to-pink-600/20 border-purple-400/50 shadow-xl' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="mb-4">
                  <plan.icon className={`w-12 h-12 mx-auto ${plan.popular ? 'text-purple-400' : 'text-gray-400'}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={onGetStarted}
                className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
