
import { useState } from "react";
import { Award, Trophy, Star, Medal, Calendar, Users, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Awards = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const awardStats = [
    { icon: <Trophy className="h-6 w-6 text-amber-600" />, number: "150+", label: "Total Awards" },
    { icon: <Medal className="h-6 w-6 text-blue-600" />, number: "45", label: "Teaching Awards" },
    { icon: <Star className="h-6 w-6 text-green-600" />, number: "38", label: "Research Awards" },
    { icon: <Users className="h-6 w-6 text-purple-600" />, number: "67", label: "Service Awards" }
  ];

  const teachingAwards = [
    {
      title: "Lifetime Achievement Award in Education",
      organization: "Ministry of Education, Government of India",
      year: 2024,
      level: "National",
      description: "Highest recognition for outstanding contribution to Indian education system over three decades.",
      significance: "Top national honor in education",
      category: "Lifetime Achievement"
    },
    {
      title: "Excellence in Teaching Award",
      organization: "University Grants Commission",
      year: 2023,
      level: "National",
      description: "Recognition for innovative teaching methodologies and student-centered learning approaches.",
      significance: "Prestigious UGC recognition",
      category: "Teaching Excellence"
    },
    {
      title: "Best Faculty Award",
      organization: "Dr. Harisingh Gour University",
      year: 2023,
      level: "University",
      description: "Annual recognition by students and peers for exceptional teaching performance.",
      significance: "Student choice award",
      category: "Faculty Recognition"
    },
    {
      title: "Innovation in Education Award",
      organization: "State Education Department, Madhya Pradesh",
      year: 2022,
      level: "State",
      description: "For developing and implementing innovative curriculum design methodologies.",
      significance: "State-level innovation recognition",
      category: "Innovation"
    },
    {
      title: "Outstanding Educator Award",
      organization: "Indian Association for Educational Research",
      year: 2021,
      level: "National",
      description: "Recognition for significant contributions to educational research and practice.",
      significance: "Professional association honor",
      category: "Professional Recognition"
    }
  ];

  const researchAwards = [
    {
      title: "Distinguished Researcher Award",
      organization: "Indian Council of Social Science Research",
      year: 2024,
      level: "National",
      description: "For groundbreaking research in educational technology and learning assessment.",
      significance: "Premier research council recognition",
      category: "Research Excellence"
    },
    {
      title: "Best Research Paper Award",
      organization: "International Conference on Educational Innovation",
      year: 2023,
      level: "International", 
      description: "For paper on 'AI-Powered Learning Analytics in Higher Education'.",
      significance: "International conference recognition",
      category: "Research Publication"
    },
    {
      title: "Research Excellence Award",
      organization: "Association of Indian Universities",
      year: 2022,
      level: "National",
      description: "Recognition for significant contributions to educational research methodology.",
      significance: "University association honor",
      category: "Research Methodology"
    },
    {
      title: "Young Researcher Award", 
      organization: "Indian Educational Research Association",
      year: 2020,
      level: "National",
      description: "For promising early-career research contributions in educational psychology.",
      significance: "Early career achievement",
      category: "Emerging Researcher"
    },
    {
      title: "Publication Excellence Award",
      organization: "International Journal of Educational Technology",
      year: 2019,
      level: "International",
      description: "Most cited paper award for research on digital learning transformation.",
      significance: "High-impact publication",
      category: "Publication Impact"
    }
  ];

  const serviceAwards = [
    {
      title: "Outstanding Service to Higher Education",
      organization: "Association of Indian Universities",
      year: 2024,
      level: "National",
      description: "Recognition for exceptional service in university administration and policy development.",
      significance: "National service recognition",
      category: "Administrative Service"
    },
    {
      title: "Community Impact Award",
      organization: "Madhya Pradesh Education Foundation",
      year: 2023,
      level: "State",
      description: "For initiatives in rural education development and teacher training programs.",
      significance: "Community development impact",
      category: "Community Service"
    },
    {
      title: "Professional Leadership Award",
      organization: "Indian Association of Teacher Educators",
      year: 2022,
      level: "National",
      description: "Recognition for leadership in teacher education and professional development.",
      significance: "Professional leadership honor",
      category: "Leadership"
    },
    {
      title: "Mentorship Excellence Award",
      organization: "Dr. Harisingh Gour University",
      year: 2021,
      level: "University",
      description: "For outstanding mentorship of doctoral students and junior faculty.",
      significance: "Mentorship recognition",
      category: "Mentorship"
    },
    {
      title: "Editorial Board Recognition",
      organization: "Multiple International Journals",
      year: 2020,
      level: "International",
      description: "Recognition for editorial contributions to leading educational journals.",
      significance: "Editorial excellence",
      category: "Editorial Service"
    }
  ];

  const internationalAwards = [
    {
      title: "Global Education Excellence Award",
      organization: "World Education Forum",
      year: 2024,
      level: "International",
      description: "Recognition for contributions to global educational development and cross-cultural education.",
      significance: "Top international honor",
      category: "Global Impact"
    },
    {
      title: "International Researcher Award",
      organization: "International Association for Educational Assessment",
      year: 2023,
      level: "International",
      description: "For research contributions in educational assessment and evaluation methodologies.",
      significance: "International research recognition",
      category: "Research Impact"
    },
    {
      title: "Cross-Cultural Education Award",
      organization: "UNESCO Education Division",
      year: 2022,
      level: "International",
      description: "Recognition for promoting cross-cultural understanding in educational programs.",
      significance: "UNESCO recognition",
      category: "Cultural Education"
    },
    {
      title: "International Collaboration Award",
      organization: "Commonwealth Educational Research Association",
      year: 2021,
      level: "International",
      description: "For fostering international research collaborations and knowledge exchange.",
      significance: "Commonwealth recognition",
      category: "International Collaboration"
    }
  ];

  const renderAwardCard = (award: any, index: number) => (
    <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-lg text-slate-800 leading-tight">
            {award.title}
          </CardTitle>
          <div className="flex flex-col gap-2">
            <Badge variant={award.level === 'International' ? 'default' : 
                          award.level === 'National' ? 'secondary' : 'outline'}>
              {award.level}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {award.year}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-slate-600">
            <Award className="h-4 w-4 mr-2" />
            {award.organization}
          </div>
          
          <p className="text-slate-700 text-sm leading-relaxed">
            {award.description}
          </p>
          
          <div className="flex justify-between items-center pt-2 border-t border-slate-100">
            <Badge variant="outline" className="text-xs">
              {award.category}
            </Badge>
            <span className="text-xs text-slate-500">
              {award.significance}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Awards & Honors
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Recognition of excellence spanning three decades of contributions to education, 
              research, and service to the academic community.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search awards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-slate-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award Statistics */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {awardStats.map((stat, index) => (
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

      {/* Awards Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="teaching" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="teaching">Teaching Awards</TabsTrigger>
              <TabsTrigger value="research">Research Awards</TabsTrigger>
              <TabsTrigger value="service">Service Awards</TabsTrigger>
              <TabsTrigger value="international">International</TabsTrigger>
            </TabsList>

            {/* Teaching Awards Tab */}
            <TabsContent value="teaching">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachingAwards.map((award, index) => renderAwardCard(award, index))}
              </div>
            </TabsContent>

            {/* Research Awards Tab */}
            <TabsContent value="research">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {researchAwards.map((award, index) => renderAwardCard(award, index))}
              </div>
            </TabsContent>

            {/* Service Awards Tab */}
            <TabsContent value="service">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceAwards.map((award, index) => renderAwardCard(award, index))}
              </div>
            </TabsContent>

            {/* International Awards Tab */}
            <TabsContent value="international">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {internationalAwards.map((award, index) => renderAwardCard(award, index))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Recognition Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Recent Recognition Timeline
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300"></div>
            
            <div className="space-y-8">
              {[
                { year: "2024", count: "15", description: "Major awards including Lifetime Achievement" },
                { year: "2023", count: "18", description: "Excellence in teaching and research recognition" },
                { year: "2022", count: "22", description: "Innovation and service awards" },
                { year: "2021", count: "19", description: "Professional and mentorship recognition" },
                { year: "2020", count: "16", description: "Research excellence and publication awards" }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-12">
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-slate-800">{item.year}</span>
                      <Badge className="bg-amber-100 text-amber-800">{item.count} Awards</Badge>
                    </div>
                    <p className="text-slate-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
