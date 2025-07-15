
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Award, Mic, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const RecentHighlights = () => {
  const recentHighlights = [
    {
      title: "Lifetime Achievement Award 2024",
      description: "Received the prestigious Academic Excellence Award for outstanding contributions to higher education and research innovation.",
      date: "March 2024",
      icon: <Award className="h-6 w-6 text-amber-500" />,
      category: "Award"
    },
    {
      title: "International Conference Keynote",
      description: "Delivered keynote address at the Global Education Summit on innovative teaching methodologies and digital transformation.",
      date: "February 2024",
      icon: <Mic className="h-6 w-6 text-blue-500" />,
      category: "Speaking"
    },
    {
      title: "New Research Publication",
      description: "Latest paper on educational technology and student engagement published in International Journal of Education.",
      date: "January 2024",
      icon: <FileText className="h-6 w-6 text-green-500" />,
      category: "Research"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Recent Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Latest achievements and contributions to the academic community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentHighlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-sm border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                      {highlight.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-500">{highlight.date}</span>
                    </div>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                    {highlight.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {highlight.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
                    <span>Read more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-500">
          <Button asChild variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300">
            <Link to="/blog">
              View All Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;
