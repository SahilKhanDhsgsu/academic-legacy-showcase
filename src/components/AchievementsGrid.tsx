
import { Award, BookOpen, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AchievementsGrid = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-white" />,
      number: "150+",
      label: "Awards & Honors",
      description: "Recognition across teaching, research, and service",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      number: "200+",
      label: "Publications",
      description: "Books, journal articles, and conference papers",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      number: "1000+",
      label: "Students Mentored",
      description: "Undergraduate and graduate students guided",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      number: "30",
      label: "Years Experience",
      description: "Dedicated service in academia",
      gradient: "from-purple-500 to-violet-500"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Academic Excellence in Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A testament to decades of dedication, innovation, and impact in higher education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="text-center p-6 border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full blur-xl"></div>
                </div>
                
                <div className="text-4xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {achievement.number}
                </div>
                
                <div className="text-lg font-semibold text-slate-700 mb-3">
                  {achievement.label}
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsGrid;
