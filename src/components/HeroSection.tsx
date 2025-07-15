
import { Link } from "react-router-dom";
import { Award, BookOpen, Users, Calendar, ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <Sparkles className="h-4 w-4" />
              Distinguished Academic Leader
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Prof. Saroj Gupta
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-4 font-light">
              Three Decades of Academic Excellence
            </p>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              With over 30 years of dedication to higher education, 150+ prestigious awards, 
              and countless contributions to research and student development across multiple disciplines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link to="/about">
                  Explore My Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img
                  src="/lovable-uploads/cfad9cfa-6c44-4bdc-8c5e-e6691702b1b3.png"
                  alt="Prof. Saroj Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-full shadow-lg animate-bounce">
                <Award className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
