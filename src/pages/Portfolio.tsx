
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Linkedin, Calendar, User, Briefcase, BookOpen } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "PortraitAI - Background Removal",
      description: "AI-powered background removal tool for portrait images with real-time processing",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      technologies: ["React", "TypeScript", "AI/ML", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const blogs = [
    {
      title: "Building AI-Powered Web Applications",
      excerpt: "A comprehensive guide to integrating AI capabilities into modern web applications using machine learning APIs and frameworks.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["AI", "Web Development", "Machine Learning"]
    },
    {
      title: "React Performance Optimization",
      excerpt: "Best practices and techniques for optimizing React applications for better performance and user experience.",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["React", "Performance", "JavaScript"]
    },
    {
      title: "The Future of SaaS Development",
      excerpt: "Exploring emerging trends and technologies that are shaping the future of Software as a Service development.",
      date: "2024-01-05",
      readTime: "5 min read",
      tags: ["SaaS", "Technology", "Trends"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-white">Portfolio</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
              <a href="#blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              John <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Developer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Full-stack developer passionate about creating innovative web applications and AI-powered solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating modern web applications. 
                I specialize in React, TypeScript, and AI integration, with a focus on building scalable SaaS solutions.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                When I'm not coding, you'll find me writing technical blogs, contributing to open source projects, 
                or exploring the latest trends in AI and machine learning.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Python", "AI/ML", "AWS", "Docker"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/10 text-white border-white/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Featured Work</h2>
            <p className="text-xl text-gray-300">A selection of projects I've worked on recently</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-white/20 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Latest Blogs</h2>
            <p className="text-xl text-gray-300">Thoughts on development, technology, and innovation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                    <span>•</span>
                    {blog.readTime}
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">{blog.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/20 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <BookOpen className="w-4 h-4 mr-2" />
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
          
          <div className="flex justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span>Available for freelance</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>john@example.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 John Developer. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
