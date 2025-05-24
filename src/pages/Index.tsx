
import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import BackgroundRemover from "@/components/BackgroundRemover";

const Index = () => {
  const [showApp, setShowApp] = useState(false);

  if (showApp) {
    return <BackgroundRemover onBack={() => setShowApp(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero onStartNow={() => setShowApp(true)} />
      <Features />
      <Pricing onGetStarted={() => setShowApp(true)} />
      <Footer />
    </div>
  );
};

export default Index;
