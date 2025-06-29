import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const { toast } = useToast();

  const handleDownloadCV = async () => {
    try {
      const response = await apiRequest("GET", "/api/download-cv");
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "CV Download",
          description: "Your CV download will begin shortly.",
        });
        // In a real implementation, this would trigger the actual file download
        window.open(data.downloadUrl, '_blank');
      }
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download CV. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-200 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-gray-300 rounded-full"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">
            ALEX CHEN
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Developer. Problem Solver. Digital Creator.
          </p>
          <div className="mb-8">
            <Button 
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              className="border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 px-8 py-3 text-lg font-medium"
              size="lg"
            >
              VIEW JOURNEY
            </Button>
          </div>
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            SCROLL TO EXPLORE
          </p>

          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
}
