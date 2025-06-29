import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroMinimal() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Floating technical keywords */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-16 left-12 px-3 py-1 bg-blue-100/70 text-blue-700 text-sm font-medium rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          React
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 px-3 py-1 bg-cyan-100/70 text-cyan-700 text-sm font-medium rounded-full"
          animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          TypeScript
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-16 px-3 py-1 bg-emerald-100/70 text-emerald-700 text-sm font-medium rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          Node.js
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-12 px-3 py-1 bg-purple-100/70 text-purple-700 text-sm font-medium rounded-full"
          animate={{ y: [0, -18, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          AWS
        </motion.div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
              ALEX CHEN
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-slate-600 font-light mb-12 tracking-wide">
            Developer. <span className="text-blue-600">Problem Solver.</span> Digital Craftsman.
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <Button 
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              VIEW JOURNEY
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-slate-400 text-sm font-medium tracking-wider"
          >
            SCROLL TO EXPLORE
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
        >
          <ChevronDown size={28} />
        </button>
      </motion.div>
    </section>
  );
}