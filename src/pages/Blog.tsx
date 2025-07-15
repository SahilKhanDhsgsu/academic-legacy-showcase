
import { useState } from "react";
import { Calendar, User, Tag, Clock, ArrowRight, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Educational Technology: Trends and Implications",
      excerpt: "Exploring how artificial intelligence, virtual reality, and adaptive learning systems are reshaping the educational landscape and what this means for educators and students.",
      content: "As we stand at the threshold of a new era in education, the integration of cutting-edge technology is revolutionizing how we teach and learn...",
      author: "Prof. Saroj Gupta",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Technology",
      tags: ["EdTech", "AI", "Future of Education", "Innovation"],
      featured: true
    },
    {
      id: 2,
      title: "Reimagining Assessment: Beyond Traditional Testing Methods",
      excerpt: "A comprehensive look at innovative assessment strategies that focus on authentic learning rather than rote memorization, including portfolio assessment and peer evaluation.",
      content: "Traditional testing methods have long been the cornerstone of educational assessment, but are they truly measuring what matters most?",
      author: "Prof. Saroj Gupta",
      date: "2024-03-08",
      readTime: "6 min read",
      category: "Assessment",
      tags: ["Assessment", "Innovation", "Student Learning", "Evaluation"],
      featured: false
    },
    {
      id: 3,
      title: "Building Inclusive Classrooms: Strategies for Diverse Learners",
      excerpt: "Practical approaches to creating educational environments that accommodate different learning styles, cultural backgrounds, and individual needs of all students.",
      content: "Inclusivity in education is not just a moral imperative but a pedagogical necessity that enhances learning outcomes for all students...",
      author: "Prof. Saroj Gupta",
      date: "2024-02-28",
      readTime: "7 min read",
      category: "Pedagogy",
      tags: ["Inclusive Education", "Diversity", "Teaching Methods", "Student Success"],
      featured: false
    },
    {
      id: 4,
      title: "The Role of Research in Educational Practice",
      excerpt: "Understanding how academic research translates into practical applications in the classroom and why evidence-based teaching is crucial for educational advancement.",
      content: "The bridge between educational research and classroom practice has often been fragmented, but recent developments show promising ways to connect theory with application...",
      author: "Prof. Saroj Gupta",
      date: "2024-02-20",
      readTime: "9 min read",
      category: "Research",
      tags: ["Educational Research", "Evidence-Based Teaching", "Academic Practice", "Research Translation"],
      featured: false
    },
    {
      id: 5,
      title: "Mentoring the Next Generation of Educators",
      excerpt: "Reflections on three decades of mentoring young faculty and graduate students, sharing insights on effective mentorship strategies and professional development.",
      content: "Mentorship is one of the most rewarding aspects of academic life, offering opportunities to shape the future of education through the development of emerging scholars...",
      author: "Prof. Saroj Gupta",
      date: "2024-02-10",
      readTime: "5 min read",
      category: "Mentorship",
      tags: ["Mentorship", "Professional Development", "Academic Career", "Teaching"],
      featured: false
    },
    {
      id: 6,
      title: "Global Perspectives on Higher Education Reform",
      excerpt: "Analyzing international trends in higher education reform and what institutions can learn from global best practices in curriculum design and student engagement.",
      content: "Higher education systems worldwide are undergoing significant transformations, driven by changing student demographics, technological advancement, and economic pressures...",
      author: "Prof. Saroj Gupta",
      date: "2024-01-25",
      readTime: "10 min read",
      category: "Higher Education",
      tags: ["Higher Education", "Global Trends", "Education Reform", "International Education"],
      featured: false
    }
  ];

  const categories = [
    { value: "all", label: "All Posts", count: blogPosts.length },
    { value: "Technology", label: "Technology", count: blogPosts.filter(post => post.category === "Technology").length },
    { value: "Assessment", label: "Assessment", count: blogPosts.filter(post => post.category === "Assessment").length },
    { value: "Pedagogy", label: "Pedagogy", count: blogPosts.filter(post => post.category === "Pedagogy").length },
    { value: "Research", label: "Research", count: blogPosts.filter(post => post.category === "Research").length },
    { value: "Mentorship", label: "Mentorship", count: blogPosts.filter(post => post.category === "Mentorship").length },
    { value: "Higher Education", label: "Higher Education", count: blogPosts.filter(post => post.category === "Higher Education").length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Thoughts, reflections, and insights on education, research, and academic life 
              from three decades of experience in higher education.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-slate-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">Featured Post</h2>
            </div>
            
            <Card className="bg-white border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">Featured</h3>
                    <p className="text-blue-100">Latest Insights</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-blue-100 text-blue-800">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read Full Post
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-800">
                  Recent Posts
                </h2>
                <span className="text-sm text-slate-500">
                  {filteredPosts.length} posts found
                </span>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="border-slate-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <Badge variant="outline">{post.category}</Badge>
                          <div className="flex items-center text-sm text-slate-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center text-sm text-slate-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl text-slate-800 hover:text-blue-600 transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-slate-500">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        
                        <Button variant="outline" size="sm">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`w-full flex justify-between items-center px-3 py-2 text-sm rounded-md transition-colors ${
                          selectedCategory === category.value
                            ? 'bg-blue-100 text-blue-800'
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span>{category.label}</span>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={post.id}>
                        <h4 className="font-medium text-slate-800 text-sm leading-tight mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-slate-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        {index < recentPosts.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* About */}
              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-800 mb-3">About This Blog</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    This blog shares insights and reflections from my journey in higher education, 
                    covering topics from innovative teaching methods to educational research and 
                    academic leadership.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
