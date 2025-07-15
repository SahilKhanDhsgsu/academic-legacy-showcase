
import { Link } from "react-router-dom";
import { Award, BookOpen, Users, Calendar, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      number: "150+",
      label: "Awards & Honors",
      description: "Recognition across teaching, research, and service"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      number: "200+",
      label: "Publications",
      description: "Books, journal articles, and conference papers"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      number: "1000+",
      label: "Students Mentored",
      description: "Undergraduate and graduate students guided"
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      number: "30",
      label: "Years Experience",
      description: "Dedicated service in academia"
    },
  ];

  const recentHighlights = [
    {
      title: "Lifetime Achievement Award 2024",
      description: "Received the prestigious Academic Excellence Award for outstanding contributions to higher education.",
      date: "March 2024"
    },
    {
      title: "International Conference Keynote",
      description: "Delivered keynote address at the Global Education Summit on innovative teaching methodologies.",
      date: "February 2024"
    },
    {
      title: "New Research Publication",
      description: "Latest paper on educational technology published in International Journal of Education.",
      date: "January 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Prof. Saroj Gupta
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-4 font-light">
                Distinguished Professor & Academic Leader
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
                With over three decades of dedication to academic excellence, research innovation, 
                and student mentorship. Recipient of 150+ awards and author of numerous 
                influential publications spanning years of scholarly contributions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-black hover:bg-neutral-300 hover:text-black">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl">
                  <img
                    src="/lovable-uploads/cfad9cfa-6c44-4bdc-8c5e-e6691702b1b3.png"
                    alt="Prof. Saroj Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-full shadow-lg">
                  <Award className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              Academic Excellence in Numbers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A testament to decades of dedication, innovation, and impact in higher education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-slate-600">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              Recent Highlights
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Latest achievements and contributions to the academic community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentHighlights.map((highlight, index) => (
              <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-sm text-slate-500 mb-2">{highlight.date}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                View All Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Explore My Academic Journey
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Discover my research contributions, teaching philosophy, and the impact 
            of three decades in academia. Learn about my publications, awards, and 
            ongoing commitment to educational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/research">
                View Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-neutral-300 hover:text-black">
              <Link to="/publications">
                Browse Publications
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
