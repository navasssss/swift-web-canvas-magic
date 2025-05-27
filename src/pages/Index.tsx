import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header with Background Image */}
      <header 
        className="py-6 px-6 relative z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/b18b904c-6729-4ef7-8588-0072adeca3ad.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <div className="text-2xl font-bold tracking-wider text-white">PEERU</div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 text-sm text-white">
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

      {/* Hero Section with Background Image */}
      <section 
        className="py-20 px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/b18b904c-6729-4ef7-8588-0072adeca3ad.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Our Newsroom
          </h1>
          
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
          
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className="text-sm text-gray-300">Popular Tags:</span>
            <span className="inline-block bg-gray-700/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-600/50 cursor-pointer transition-colors text-white">
              Design
            </span>
            <span className="inline-block bg-gray-700/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-600/50 cursor-pointer transition-colors text-white">
              User Experience
            </span>
            <span className="inline-block bg-gray-700/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-600/50 cursor-pointer transition-colors text-white">
              User Interfaces
            </span>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: `url('/lovable-uploads/b18b904c-6729-4ef7-8588-0072adeca3ad.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            <div className="flex flex-col md:flex-row relative z-10">
              <div 
                className="w-full md:w-1/2 relative overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `url('/lovable-uploads/b18b904c-6729-4ef7-8588-0072adeca3ad.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <img 
                  src="/lovable-uploads/3abdfaf7-0d95-4904-a73a-0b0672a238b6.png" 
                  alt="Ancient temple architecture" 
                  className="w-full h-64 md:h-full object-cover hover:scale-110 transition-transform duration-700 relative z-10"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-gray-800">
                  Cheap Airline Tickets: Great Ways To Save
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance in the...
                </p>
                
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

      {/* Popular Articles */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Popular Articles</h2>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              View all
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Family protection" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    How to prevent and protect your family from Carbon monoxide
                  </h3>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div className="text-white text-sm">
                      <span className="font-medium">Emily Johnson</span>
                      <span className="mx-2">•</span>
                      <span>15 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Motherhood" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    Motherhood is the hardest and the best job ever
                  </h3>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div className="text-white text-sm">
                      <span className="font-medium">Sarah Wilson</span>
                      <span className="mx-2">•</span>
                      <span>12 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Articles</h2>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              View all
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Future of Work" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Future of Work</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Majority of Peeps will work in jobs that don't exist today.
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <div className="text-white text-xs">
                      <span className="font-medium">John Smith</span>
                      <span className="mx-1">•</span>
                      <span>8 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
                  alt="Future of Data" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Future of Data</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Majority of Peeps will work in jobs that don't exist today.
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <div className="text-white text-xs">
                      <span className="font-medium">Mike Johnson</span>
                      <span className="mx-1">•</span>
                      <span>6 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
                  alt="Future of Learning" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Future of Learning</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Majority of Peeps will work in jobs that don't exist today.
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <div className="text-white text-xs">
                      <span className="font-medium">Lisa Chen</span>
                      <span className="mx-1">•</span>
                      <span>4 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">History</h2>
              <p className="text-gray-600 text-sm mt-1">History gives a view of its richness</p>
            </div>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              View all +
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2834&q=80" 
                  alt="Historic cityscape" 
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    History
                  </span>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Cheap Airline Tickets: Great Ways To Save
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance in the...
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Viola Manisa</p>
                      <p className="text-xs text-gray-500">Verified writer</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">02 May</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faith and Spirituality Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Faith and Spirituality</h2>
            </div>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              View all +
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Spiritual scene" 
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Faith
                  </span>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Cheap Airline Tickets: Great Ways To Save
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance in the...
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Viola Manisa</p>
                      <p className="text-xs text-gray-500">Verified writer</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">02 May</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For more button */}
      <section className="py-8 px-6">
        <div className="container mx-auto text-center">
          <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full">
            For more →
          </Button>
        </div>
      </section>

      {/* All Articles Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Articles</h2>
            <p className="text-gray-600">
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose. There are many variations of passages.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="How to prevent" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-3">
                    How to prevent and protect your family from Carbon monoxide
                  </h3>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div className="text-white text-sm">
                      <span className="font-medium">Emily Johnson</span>
                      <span className="mx-2">•</span>
                      <span>15 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Motherhood" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-3">
                    Motherhood is the hardest and the best job ever.
                  </h3>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div className="text-white text-sm">
                      <span className="font-medium">Sarah Wilson</span>
                      <span className="mx-2">•</span>
                      <span>12 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Future of Work" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Future of Work</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Majority of Peeps will work in jobs that don't exist today.
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <div className="text-white text-xs">
                      <span className="font-medium">John Smith</span>
                      <span className="mx-1">•</span>
                      <span>8 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
                  alt="Future of Data" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Future of Data</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Majority of Peeps will work in jobs that don't exist today.
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <div className="text-white text-xs">
                      <span className="font-medium">Mike Johnson</span>
                      <span className="mx-1">•</span>
                      <span>6 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
                  alt="Future of Learning" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Future of Learning</h3>
                  <p className="text-white/90 text-sm mb-3">
                    Majority of Peeps will work in jobs that don't exist today.
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                      alt="Author" 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <div className="text-white text-xs">
                      <span className="font-medium">Lisa Chen</span>
                      <span className="mx-1">•</span>
                      <span>4 Jan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; 2024 PEERU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
