import { useState } from "react";
import { BookOpen, FileText, Users, Calendar, ExternalLink, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const publicationStats = [
    { icon: <BookOpen className="h-6 w-6 text-blue-600" />, number: "12", label: "Books" },
    { icon: <FileText className="h-6 w-6 text-green-600" />, number: "85", label: "Journal Articles" },
    { icon: <Users className="h-6 w-6 text-purple-600" />, number: "45", label: "Conference Papers" },
    { icon: <Calendar className="h-6 w-6 text-amber-600" />, number: "58", label: "Other Publications" }
  ];

  const books = [
    {
      title: "Modern Educational Psychology: Theory and Practice",
      authors: "Saroj Gupta",
      publisher: "Academic Publishers India",
      year: 2023,
      isbn: "978-81-123-4567-8",
      pages: 345,
      description: "Comprehensive guide to understanding psychological principles in educational settings.",
      citations: 127,
      category: "Textbook"
    },
    {
      title: "Curriculum Development in Higher Education",
      authors: "Saroj Gupta, R.K. Sharma",
      publisher: "Educational Excellence Publications",
      year: 2022,
      isbn: "978-81-234-5678-9",
      pages: 412,
      description: "Innovative approaches to designing and implementing academic curricula.",
      citations: 89,
      category: "Research Book"
    },
    {
      title: "Assessment Strategies for Learning Enhancement",
      authors: "Saroj Gupta, M.P. Verma, A. Singh",
      publisher: "University Press",
      year: 2021,
      isbn: "978-81-345-6789-0",
      pages: 298,
      description: "Evidence-based assessment methods for improved student outcomes.",
      citations: 156,
      category: "Handbook"
    }
  ];

  const journalArticles = [
    {
      title: "Digital Transformation in Indian Higher Education: Challenges and Opportunities",
      authors: "Saroj Gupta, P.K. Mishra",
      journal: "International Journal of Educational Technology",
      volume: "15",
      issue: "3",
      pages: "45-62",
      year: 2024,
      doi: "10.1080/ijed.2024.123456",
      citations: 23,
      category: "Research Article"
    },
    {
      title: "Impact of Innovative Assessment Methods on Student Learning Outcomes",
      authors: "Saroj Gupta, R. Agarwal, S. Patel",
      journal: "Journal of Educational Research and Practice",
      volume: "12",
      issue: "2",
      pages: "78-95",
      year: 2024,
      doi: "10.1016/jerp.2024.234567",
      citations: 18,
      category: "Empirical Study"
    },
    {
      title: "Teacher Professional Development in Rural Settings: A Longitudinal Study",
      authors: "Saroj Gupta, K.L. Sharma, M. Gupta",
      journal: "Educational Development Quarterly",
      volume: "8",
      issue: "4",
      pages: "112-128",
      year: 2023,
      doi: "10.1007/edq.2023.345678",
      citations: 41,
      category: "Longitudinal Study"
    }
  ];

  const conferenceProceedings = [
    {
      title: "AI-Powered Learning Analytics: Transforming Educational Decision Making",
      authors: "Saroj Gupta, T.R. Singh",
      conference: "International Conference on Educational Technology",
      location: "New Delhi, India",
      year: 2024,
      pages: "234-241",
      publisher: "IEEE Education Society",
      type: "Keynote Paper"
    },
    {
      title: "Sustainable Practices in Curriculum Design for Environmental Education",
      authors: "Saroj Gupta, A.K. Pandey, S. Jain",
      conference: "Global Summit on Sustainable Education",
      location: "Mumbai, India", 
      year: 2023,
      pages: "156-163",
      publisher: "Springer Proceedings",
      type: "Full Paper"
    },
    {
      title: "Cross-Cultural Competency in International Education Programs",
      authors: "Saroj Gupta, R.M. Patel",
      conference: "World Conference on Higher Education",
      location: "Bangkok, Thailand",
      year: 2023,
      pages: "89-96",
      publisher: "Academic Conference Publishers",
      type: "Research Paper"
    }
  ];

  const otherPublications = [
    {
      title: "Policy Brief: Enhancing Quality in Teacher Education Programs",
      type: "Policy Document",
      publisher: "Ministry of Education, India",
      year: 2024,
      pages: 15,
      description: "Recommendations for improving teacher preparation programs nationwide."
    },
    {
      title: "Educational Technology Integration: A Practical Guide",
      type: "Manual",
      publisher: "University Training Center",
      year: 2023,
      pages: 78,
      description: "Step-by-step guide for faculty to integrate technology in teaching."
    },
    {
      title: "Annual Report on Rural Education Development",
      type: "Research Report",
      publisher: "State Education Department",
      year: 2023,
      pages: 124,
      description: "Comprehensive analysis of educational progress in rural Madhya Pradesh."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Publications & Scholarly Works
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of research contributions spanning three decades 
              of academic excellence and knowledge dissemination.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-slate-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publication Statistics */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {publicationStats.map((stat, index) => (
              <Card key={index} className="bg-white border-slate-200 text-center">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2">
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

      {/* Publications Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="journals">Journal Articles</TabsTrigger>
              <TabsTrigger value="conferences">Conference Papers</TabsTrigger>
              <TabsTrigger value="other">Other Works</TabsTrigger>
            </TabsList>

            {/* Books Tab */}
            <TabsContent value="books">
              <div className="space-y-6">
                {books.map((book, index) => (
                  <Card key={index} className="bg-white border-slate-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-slate-800 leading-tight">
                          {book.title}
                        </CardTitle>
                        <Badge variant="outline">{book.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-slate-700 mb-4">{book.description}</p>
                          <div className="space-y-2 text-sm text-slate-600">
                            <p><strong>Authors:</strong> {book.authors}</p>
                            <p><strong>Publisher:</strong> {book.publisher}</p>
                            <p><strong>Year:</strong> {book.year}</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-slate-600">
                          <p><strong>ISBN:</strong> {book.isbn}</p>
                          <p><strong>Pages:</strong> {book.pages}</p>
                          <p><strong>Citations:</strong> {book.citations}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Journal Articles Tab */}
            <TabsContent value="journals">
              <div className="space-y-6">
                {journalArticles.map((article, index) => (
                  <Card key={index} className="bg-white border-slate-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-slate-800 leading-tight">
                          {article.title}
                        </CardTitle>
                        <Badge variant="outline">{article.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 text-sm text-slate-600">
                          <p><strong>Authors:</strong> {article.authors}</p>
                          <p><strong>Journal:</strong> {article.journal}</p>
                          <p><strong>Volume/Issue:</strong> {article.volume}({article.issue})</p>
                          <p><strong>Pages:</strong> {article.pages}</p>
                        </div>
                        <div className="space-y-2 text-sm text-slate-600">
                          <p><strong>Year:</strong> {article.year}</p>
                          <p><strong>DOI:</strong> {article.doi}</p>
                          <p><strong>Citations:</strong> {article.citations}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Article
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Conference Papers Tab */}
            <TabsContent value="conferences">
              <div className="space-y-6">
                {conferenceProceedings.map((paper, index) => (
                  <Card key={index} className="bg-white border-slate-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-slate-800 leading-tight">
                          {paper.title}
                        </CardTitle>
                        <Badge variant="outline">{paper.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 text-sm text-slate-600">
                          <p><strong>Authors:</strong> {paper.authors}</p>
                          <p><strong>Conference:</strong> {paper.conference}</p>
                          <p><strong>Location:</strong> {paper.location}</p>
                        </div>
                        <div className="space-y-2 text-sm text-slate-600">
                          <p><strong>Year:</strong> {paper.year}</p>
                          <p><strong>Pages:</strong> {paper.pages}</p>
                          <p><strong>Publisher:</strong> {paper.publisher}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Paper
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other Publications Tab */}
            <TabsContent value="other">
              <div className="space-y-6">
                {otherPublications.map((publication, index) => (
                  <Card key={index} className="bg-white border-slate-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-slate-800 leading-tight">
                          {publication.title}
                        </CardTitle>
                        <Badge variant="outline">{publication.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-slate-700 mb-4">{publication.description}</p>
                        </div>
                        <div className="space-y-2 text-sm text-slate-600">
                          <p><strong>Publisher:</strong> {publication.publisher}</p>
                          <p><strong>Year:</strong> {publication.year}</p>
                          <p><strong>Pages:</strong> {publication.pages}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Access Document
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Publications;
