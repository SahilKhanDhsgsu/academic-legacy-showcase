
import { BookOpen, Users, DollarSign, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const researchAreas = [
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
      title: "Educational Technology",
      description: "Integration of digital tools and platforms in modern education systems",
      publications: 45,
      projects: 8
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Curriculum Development",
      description: "Design and implementation of innovative academic programs",
      publications: 38,
      projects: 12
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Assessment Methodologies", 
      description: "Development of effective evaluation and assessment strategies",
      publications: 32,
      projects: 6
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Educational Psychology",
      description: "Understanding learning behaviors and cognitive development",
      publications: 28,
      projects: 9
    }
  ];

  const keyProjects = [
    {
      title: "Digital Learning Transformation Initiative",
      duration: "2020-2024",
      funding: "₹15,00,000",
      agency: "University Grants Commission",
      description: "Comprehensive study on the impact of digital technologies on student learning outcomes in higher education.",
      status: "Ongoing",
      outcomes: [
        "Published 12 research papers",
        "Presented at 8 international conferences",
        "Influenced policy at state level"
      ]
    },
    {
      title: "Innovative Assessment Methods in Higher Education",
      duration: "2018-2021",
      funding: "₹8,50,000",
      agency: "Ministry of Education",
      description: "Development and validation of new assessment strategies for better learning evaluation.",
      status: "Completed",
      outcomes: [
        "Developed 3 assessment frameworks",
        "Trained 200+ faculty members",
        "Adopted by 15 universities"
      ]
    },
    {
      title: "Rural Education Enhancement Program",
      duration: "2016-2019",
      funding: "₹12,00,000",
      agency: "State Education Department",
      description: "Strategies for improving educational quality and access in rural areas of Madhya Pradesh.",
      status: "Completed",
      outcomes: [
        "Impacted 50+ rural schools",
        "Trained 300+ teachers",
        "Improved learning outcomes by 35%"
      ]
    }
  ];

  const collaborations = [
    {
      institution: "Indian Institute of Technology, Delhi",
      type: "Research Collaboration",
      focus: "Educational Technology",
      duration: "2019-Present"
    },
    {
      institution: "Jawaharlal Nehru University, New Delhi",
      type: "Joint Research Project",
      focus: "Curriculum Development",
      duration: "2021-2024"
    },
    {
      institution: "University of Cambridge, UK",
      type: "International Exchange",
      focus: "Assessment Methods",
      duration: "2020-2022"
    },
    {
      institution: "National Institute of Educational Planning",
      type: "Advisory Role",
      focus: "Policy Development",
      duration: "2018-Present"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Research & Innovation
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Exploring the frontiers of education through systematic research, 
              innovation, and evidence-based practices that transform learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white border-slate-200 text-center">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">200+</div>
                <div className="text-sm text-slate-600">Publications</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-slate-200 text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">35+</div>
                <div className="text-sm text-slate-600">Research Projects</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-slate-200 text-center">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">₹2.5Cr+</div>
                <div className="text-sm text-slate-600">Funding Secured</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-slate-200 text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">50+</div>
                <div className="text-sm text-slate-600">Collaborations</div>
              </CardContent>
            </Card>
          </div>

          {/* Research Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8 text-center">
              Research Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {area.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">
                          {area.title}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {area.description}
                        </p>
                        <div className="flex gap-4 text-sm text-slate-500">
                          <span>{area.publications} Publications</span>
                          <span>{area.projects} Projects</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Major Research Projects
          </h2>
          
          <div className="space-y-8">
            {keyProjects.map((project, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle className="text-xl text-slate-800">
                      {project.title}
                    </CardTitle>
                    <Badge variant={project.status === 'Ongoing' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Duration</h4>
                      <p className="text-slate-600">{project.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Funding</h4>
                      <p className="text-slate-600">{project.funding}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Funding Agency</h4>
                      <p className="text-slate-600">{project.agency}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-6">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">Key Outcomes</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Research Collaborations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborations.map((collaboration, index) => (
              <Card key={index} className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {collaboration.institution}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Type:</span>
                      <span className="text-slate-800 font-medium">{collaboration.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Focus:</span>
                      <span className="text-slate-800 font-medium">{collaboration.focus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Duration:</span>
                      <span className="text-slate-800 font-medium">{collaboration.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
