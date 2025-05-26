
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="py-6 px-6 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">PEERU</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Articles</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Essays</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Translations</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Discussions</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Series</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Book Reviews</a></li>
              <li>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
                  Print Edition
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Abstract Background */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Our Newsroom
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-300 px-6 py-4 rounded-lg focus:bg-white/15 focus:border-purple-400 transition-all"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Popular Tags */}
          <div className="flex justify-center space-x-4 mb-12">
            <span className="text-sm text-gray-300 mr-2">Popular Tags:</span>
            <span className="inline-block bg-gray-700/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-600/50 cursor-pointer transition-colors">
              Design
            </span>
            <span className="inline-block bg-gray-700/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-600/50 cursor-pointer transition-colors">
              User Experience
            </span>
            <span className="inline-block bg-gray-700/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-600/50 cursor-pointer transition-colors">
              User Interfaces
            </span>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="w-full md:w-1/2 relative overflow-hidden">
                <img 
                  src="/lovable-uploads/3abdfaf7-0d95-4904-a73a-0b0672a238b6.png" 
                  alt="Ancient temple architecture" 
                  className="w-full h-64 md:h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Featured
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-gray-800">
                  Cheap Airline Tickets: Great Ways To Save
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance in the...
                </p>
                
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Author" 
                      className="w-12 h-12 rounded-full mr-4 border-2 border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Viola Manisa</p>
                      <p className="text-sm text-gray-500">Verified writer</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">02 May</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/50 backdrop-blur-sm border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 PEERU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
