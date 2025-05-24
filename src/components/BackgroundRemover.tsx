
import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Upload, Download, Zap, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";

interface BackgroundRemoverProps {
  onBack: () => void;
}

const BackgroundRemover = ({ onBack }: BackgroundRemoverProps) => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFiles = useCallback(async (files: FileList) => {
    const file = files[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file (PNG, JPG, JPEG, WebP)",
        variant: "destructive",
      });
      return;
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 10MB",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsProcessing(true);
      setProgress(0);
      setProcessedImage(null);
      
      // Load and display original image
      const imageUrl = URL.createObjectURL(file);
      setOriginalImage(imageUrl);
      setProgress(20);

      // Load image for processing
      const img = await loadImage(file);
      setProgress(40);

      toast({
        title: "Processing started",
        description: "AI is removing the background from your image...",
      });

      // Process with AI
      const processedBlob = await removeBackground(img);
      setProgress(80);

      // Create URL for processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedUrl);
      setProgress(100);

      toast({
        title: "Success!",
        description: "Background removed successfully",
      });
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: "Processing failed",
        description: "There was an error processing your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  }, [toast]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'background-removed.png';
      link.click();
    }
  };

  const reset = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setIsProcessing(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            onClick={onBack}
            variant="outline" 
            size="sm"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-white">AI Background Remover</h1>
        </div>

        {/* Upload Area */}
        {!originalImage && (
          <div className="mb-8">
            <div
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-purple-400 bg-purple-400/10' 
                  : 'border-white/30 hover:border-white/50 hover:bg-white/5'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Drop your image here or click to upload
                  </h3>
                  <p className="text-gray-300">
                    Supports PNG, JPG, JPEG, WebP • Max 10MB
                  </p>
                </div>
                <Button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Choose Image
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Processing Progress */}
        {isProcessing && (
          <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-white font-medium">Processing your image...</span>
            </div>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-gray-300 mt-2">
              {progress < 40 ? "Loading image..." : 
               progress < 80 ? "AI removing background..." : 
               "Finalizing..."}
            </p>
          </div>
        )}

        {/* Image Comparison */}
        {originalImage && (
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Original Image */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Original
              </h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4">
                <img 
                  src={originalImage} 
                  alt="Original" 
                  className="w-full h-auto rounded-xl max-h-96 object-contain mx-auto"
                />
              </div>
            </div>

            {/* Processed Image */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Background Removed
              </h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 relative">
                {processedImage ? (
                  <div className="relative">
                    {/* Checkered background to show transparency */}
                    <div className="absolute inset-0 rounded-xl" style={{
                      backgroundImage: `linear-gradient(45deg, #374151 25%, transparent 25%), 
                                       linear-gradient(-45deg, #374151 25%, transparent 25%), 
                                       linear-gradient(45deg, transparent 75%, #374151 75%), 
                                       linear-gradient(-45deg, transparent 75%, #374151 75%)`,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }}></div>
                    <img 
                      src={processedImage} 
                      alt="Processed" 
                      className="relative w-full h-auto rounded-xl max-h-96 object-contain mx-auto"
                    />
                  </div>
                ) : (
                  <div className="h-96 flex items-center justify-center text-gray-400">
                    {isProcessing ? "Processing..." : "Upload an image to see results"}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {originalImage && (
          <div className="flex flex-wrap gap-4 justify-center">
            {processedImage && (
              <Button 
                onClick={handleDownload}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Result
              </Button>
            )}
            <Button 
              onClick={reset}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Try Another Image
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundRemover;
