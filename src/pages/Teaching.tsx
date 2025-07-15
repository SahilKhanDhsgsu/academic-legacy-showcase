
import { GraduationCap, Users, BookOpen, Star, Clock, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Teaching = () => {
  const teachingStats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "1000+",
      label: "Students Taught",
      description: "Across undergraduate and graduate programs"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
      number: "25+",
      label: "Courses Designed",
      description: "Innovative curriculum development"
    },
    {
      icon: <Star className="h-8 w-8 text-amber-600" />,
      number: "4.8/5",
      label: "Student Rating",
      description: "Consistent excellence in teaching"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      number: "30",
      label: "Years Experience",
      description: "Dedicated to educational excellence"
    }
  ];

  const courses = [
    {
      level: "Undergraduate",
      courses: [
        {
          code: "EDU 101",
          title: "Foundations of Education",
          credits: 4,
          description: "Introduction to educational theory, philosophy, and practice"
        },
        {
          code: "EDU 201",
          title: "Educational Psychology",
          credits: 3,
          description: "Understanding learning processes and student development"
        },
        {
          code: "EDU 301",
          title: "Curriculum Development",
          credits: 4,
          description: "Principles and practices of curriculum design and implementation"
        }
      ]
    },
    {
      level: "Graduate",
      courses: [
        {
          code: "MEDU 501",
          title: "Advanced Educational Research",
          credits: 4,
          description: "Research methodologies and statistical analysis in education"
        },
        {
          code: "MEDU 502",
          title: "Educational Technology Integration",
          credits: 3,
          description: "Modern technologies in teaching and learning environments"
        },
        {
          code: "MEDU 601",
          title: "Educational Leadership",
          credits: 4,
          description: "Leadership principles and practices in educational institutions"
        }
      ]
    },
    {
      level: "Doctoral",
      courses: [
        {
          code: "PHD 701",
          title: "Advanced Research Seminar",
          credits: 2,
          description: "Doctoral research methodology and dissertation guidance"
        },
        {
          code: "PHD 702",
          title: "Educational Policy Analysis",
          credits: 3,
          description: "Critical analysis of educational policies and their implications"
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      position: "Assistant Professor, Delhi University",
      year: "Ph.D. Graduate, 2020",
      quote: "Professor Gupta's mentorship transformed my understanding of educational research. Her guidance helped me develop critical thinking skills that continue to shape my academic career.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      position: "Principal, Government Higher Secondary School",
      year: "M.Ed. Graduate, 2018",
      quote: "The practical insights and theoretical foundation provided by Professor Gupta have been invaluable in my role as an educational administrator. Her teaching methods are truly inspiring.",
      rating: 5
    },
    {
      name: "Sunita Patel",
      position: "Educational Consultant",
      year: "M.Ed. Graduate, 2019",
      quote: "Professor Gupta's approach to curriculum development opened new perspectives for me. Her courses were challenging yet supportive, pushing us to achieve our best potential.",
      rating: 5
    }
  ];

  const teachingPhilosophy = [
    {
      principle: "Student-Centered Learning",
      description: "Focus on individual student needs, learning styles, and academic goals to create personalized educational experiences."
    },
    {
      principle: "Active Engagement",
      description: "Encourage active participation through discussions, collaborative projects, and hands-on learning activities."
    },
    {
      principle: "Critical Thinking",
      description: "Develop analytical skills and encourage questioning, reflection, and evidence-based reasoning."
    },
    {
      principle: "Practical Application",
      description: "Connect theoretical concepts to real-world scenarios and professional practice in education."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Teaching Excellence
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Inspiring the next generation of educators through innovative pedagogy, 
              mentorship, and a commitment to lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {teachingStats.map((stat, index) => (
              <Card key={index} className="bg-white border-slate-200 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-slate-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Teaching Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {teachingPhilosophy.map((item, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {item.principle}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 text-center">
                My Teaching Approach
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
                "Education is not just about transferring knowledge; it's about igniting curiosity, 
                fostering critical thinking, and empowering students to become lifelong learners. 
                My approach combines rigorous academic standards with compassionate mentorship, 
                creating an environment where every student can thrive and reach their full potential."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Courses Taught */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Courses Taught
          </h2>
          
          <div className="space-y-12">
            {courses.map((level, levelIndex) => (
              <div key={levelIndex}>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                  <GraduationCap className="h-6 w-6 mr-3 text-blue-600" />
                  {level.level} Courses
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {level.courses.map((course, courseIndex) => (
                    <Card key={courseIndex} className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          <div className="flex justify-between items-start">
                            <span>{course.title}</span>
                            <Badge variant="outline">{course.credits} Credits</Badge>
                          </div>
                        </CardTitle>
                        <p className="text-sm text-slate-600 font-mono">{course.code}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 text-sm">
                          {course.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Student Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-700 mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.position}</p>
                    <p className="text-sm text-slate-500">{testimonial.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Awards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Teaching Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border-slate-200 text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Excellence in Teaching Award</h3>
                <p className="text-slate-600 mb-2">University Level Recognition</p>
                <p className="text-sm text-slate-500">2023, 2021, 2019</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-slate-200 text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Best Faculty Award</h3>
                <p className="text-slate-600 mb-2">Student Choice Award</p>
                <p className="text-sm text-slate-500">2022, 2020, 2018</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-slate-200 text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Innovation in Education</h3>
                <p className="text-slate-600 mb-2">State Education Department</p>
                <p className="text-sm text-slate-500">2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;
