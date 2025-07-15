
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
          <Sparkles className="h-4 w-4" />
          Explore Academic Excellence
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Discover My Academic Journey
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          Explore three decades of research contributions, teaching philosophy, and academic impact. 
          Discover publications, awards, and ongoing commitment to educational excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/research" onClick={() =>window.scrollTo({top:0, behavior:"smooth"})}>
              View Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-white/30 hover:bg-white/60 hover:border-white/50 hover:scale-105 text-black backdrop-blur-sm transition-all duration-300">
            <Link to="/publications" onClick={() =>window.scrollTo({top:0, behavior:"smooth"})}>
              Browse Publications
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
