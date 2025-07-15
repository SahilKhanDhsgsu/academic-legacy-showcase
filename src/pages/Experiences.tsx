
import { Users, Building, Globe, BookOpen, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Experiences = () => {
  const serviceStats = [
    { icon: <Building className="h-6 w-6 text-blue-600" />, number: "25+", label: "Committee Positions" },
    { icon: <Globe className="h-6 w-6 text-green-600" />, number: "15", label: "Editorial Boards" },
    { icon: <Users className="h-6 w-6 text-purple-600" />, number: "50+", label: "Review Panels" },
    { icon: <Award className="h-6 w-6 text-amber-600" />, number: "100+", label: "Community Programs" }
  ];

  const administrativeService = [
    {
      position: "Dean, Faculty of Education",
      organization: "Dr. Harisingh Gour University",
      duration: "2020-2024",
      description: "Led faculty development initiatives, curriculum reforms, and strategic planning for the education department.",
      achievements: [
        "Implemented new Ph.D. program in Educational Technology",
        "Increased research funding by 40%",
        "Established international collaboration programs"
      ]
    },
    {
      position: "Chairperson, Board of Studies",
      organization: "University Academic Council",
      duration: "2018-2022",
      description: "Oversaw curriculum development and academic standards for education programs across the university.",
      achievements: [
        "Revised 12 course curricula to meet modern standards",
        "Introduced competency-based assessment methods",
        "Facilitated industry-academia partnerships"
      ]
    },
    {
      position: "Director, Centre for Educational Innovation",
      organization: "Dr. Harisingh Gour University",
      duration: "2016-2020",
      description: "Established and managed center focused on innovative teaching methodologies and educational technology.",
      achievements: [
        "Trained 500+ faculty members in modern teaching methods",
        "Developed 20+ educational technology solutions",
        "Secured ₹50 lakhs in innovation grants"
      ]
    }
  ];

  const editorialService = [
    {
      journal: "International Journal of Educational Technology",
      role: "Associate Editor",
      duration: "2020-Present",
      publisher: "Taylor & Francis",
      impact: "Impact Factor: 3.2"
    },
    {
      journal: "Journal of Educational Research and Practice",
      role: "Editorial Board Member",
      duration: "2018-Present",
      publisher: "Springer",
      impact: "Impact Factor: 2.8"
    },
    {
      journal: "Educational Development Quarterly",
      role: "Guest Editor",
      duration: "2019-2021",
      publisher: "SAGE Publications",
      impact: "Impact Factor: 2.1"
    },
    {
      journal: "Asian Journal of Education",
      role: "Reviewer",
      duration: "2015-Present",
      publisher: "Academic Publishers",
      impact: "Regional Impact Journal"
    }
  ];

  const professionalService = [
    {
      organization: "University Grants Commission",
      role: "Expert Committee Member",
      duration: "2022-Present",
      focus: "Teacher Education Policy",
      description: "Advising on national teacher education standards and curriculum frameworks."
    },
    {
      organization: "National Council for Teacher Education",
      role: "Curriculum Review Panel",
      duration: "2021-2023",
      focus: "B.Ed. Curriculum Reform",
      description: "Leading curriculum reform initiatives for bachelor's education programs."
    },
    {
      organization: "Ministry of Education, India",
      role: "Policy Advisory Board",
      duration: "2020-2024",
      focus: "Higher Education Policy",
      description: "Contributing to national education policy development and implementation."
    },
    {
      organization: "Association of Indian Universities",
      role: "Executive Council Member",
      duration: "2019-2023",
      focus: "Quality Assurance",
      description: "Working on quality assurance frameworks for higher education institutions."
    }
  ];

  const communityService = [
    {
      program: "Rural Education Enhancement Initiative",
      role: "Program Director",
      duration: "2018-Present",
      impact: "50+ schools, 300+ teachers trained",
      description: "Comprehensive program to improve educational quality in rural Madhya Pradesh schools.",
      activities: [
        "Teacher training workshops",
        "Infrastructure development support",
        "Digital literacy programs",
        "Parent-community engagement"
      ]
    },
    {
      program: "Women's Education Empowerment Program",
      role: "Advisory Committee Chair",
      duration: "2020-Present",
      impact: "1000+ women beneficiaries",
      description: "Initiative to promote higher education access for women in underserved communities.",
      activities: [
        "Scholarship programs",
        "Career counseling sessions",
        "Skill development workshops",
        "Mentorship networks"
      ]
    },
    {
      program: "Digital Divide Bridge Project",
      role: "Technical Advisor",
      duration: "2019-2022",
      impact: "25 institutions equipped",
      description: "Project to provide digital infrastructure and training to educational institutions.",
      activities: [
        "Technology infrastructure setup",
        "Faculty digital literacy training",
        "Student computer skills programs",
        "Online learning platform development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Experiences & Outreach
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated service to the academic community, educational institutions, 
              and society through leadership, mentorship, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceStats.map((stat, index) => (
              <Card key={index} className="bg-white border-slate-200 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Administrative Leadership
          </h2>
          
          <div className="space-y-8">
            {administrativeService.map((service, index) => (
              <Card key={index} className="bg-white border-slate-200">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle className="text-xl text-slate-800">
                      {service.position}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {service.duration}
                    </Badge>
                  </div>
                  <p className="text-slate-600">{service.organization}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">{service.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Achievements</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                      {service.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Editorial & Review Service
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editorialService.map((service, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-slate-800 leading-tight">
                      {service.journal}
                    </h3>
                    <Badge variant={service.role === 'Associate Editor' ? 'default' : 'secondary'}>
                      {service.role}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Publisher:</span>
                      <span className="font-medium">{service.publisher}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Impact:</span>
                      <span className="font-medium">{service.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Professional Service
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalService.map((service, index) => (
              <Card key={index} className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {service.organization}
                    </h3>
                    <Badge variant="outline">
                      {service.duration}
                    </Badge>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-sm text-slate-600">Role: </span>
                    <span className="font-medium text-slate-800">{service.role}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-slate-600">Focus: </span>
                    <span className="font-medium text-slate-800">{service.focus}</span>
                  </div>
                  
                  <p className="text-slate-700 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Community Outreach
          </h2>
          
          <div className="space-y-8">
            {communityService.map((program, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle className="text-xl text-slate-800">
                      {program.program}
                    </CardTitle>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline">{program.duration}</Badge>
                      <Badge className="bg-green-100 text-green-800">{program.impact}</Badge>
                    </div>
                  </div>
                  <p className="text-slate-600">{program.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">{program.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Program Activities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">
                Philosophy of Service
              </h3>
              <blockquote className="text-lg text-slate-700 leading-relaxed italic">
                "True academic excellence extends beyond personal achievement to encompass 
                service to the community, mentorship of future leaders, and contribution to 
                the betterment of society. Through service, we fulfill our responsibility to 
                give back to the academic community that has nurtured our growth and to 
                ensure that knowledge serves the greater good."
              </blockquote>
              
              <Separator className="my-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800">Community First</p>
                  <p className="text-slate-600">Serving the broader community through education</p>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800">Global Impact</p>
                  <p className="text-slate-600">Contributing to worldwide educational advancement</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800">Knowledge Sharing</p>
                  <p className="text-slate-600">Making education accessible to all</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
