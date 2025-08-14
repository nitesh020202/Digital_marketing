import React, { useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Fashion Boutique',
      role: 'Owner',
      rating: 5,
      text: "Raghu and his team completely transformed our digital presence. Our website traffic increased by 300% within 6 months, and our online sales have tripled. The ROI has been incredible, and their strategic approach to social media marketing has built us a loyal community of customers. I can't recommend them highly enough!",
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      results: ['300% increase in website traffic', '200% boost in online sales', '150% growth in social media followers'],
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'TechFlow Solutions',
      role: 'CEO',
      rating: 5,
      text: "Working with Raghu Digital Marketing has been a game-changer for our SaaS platform. Their comprehensive approach to lead generation and conversion optimization has reduced our customer acquisition cost by 60% while increasing our lead quality significantly. The team's expertise in B2B marketing is unmatched.",
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      results: ['400% increase in qualified leads', '60% reduction in CAC', '280% growth in brand mentions'],
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Local Restaurant Chain',
      role: 'Marketing Director',
      rating: 5,
      text: "The local SEO strategy implemented by Raghu's team has been phenomenal for our restaurant chain. We're now ranking #1 for all our target keywords, and our foot traffic has increased by 160%. Their social media campaigns have created a buzz around our brand that we never experienced before.",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      results: ['450% increase in local searches', '160% boost in foot traffic', '380% growth in social engagement'],
    },
    {
      id: 4,
      name: 'David Kim',
      company: 'Strategic Consulting Group',
      role: 'Founder',
      rating: 5,
      text: "As a B2B consulting firm, we struggled with lead generation until we partnered with Raghu. Their LinkedIn marketing strategy and content marketing approach have filled our pipeline with high-quality prospects. The quality of leads has improved dramatically, and our conversion rates have never been higher.",
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      results: ['300% increase in qualified leads', '500% growth in LinkedIn followers', '220% boost in proposal requests'],
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      company: 'Wellness Center',
      role: 'Owner',
      rating: 5,
      text: "Raghu's holistic approach to digital marketing has transformed our wellness center. From SEO to social media to email marketing, every channel is working harmoniously. Our appointment bookings have increased by 250%, and we've built a strong online community of health enthusiasts.",
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      results: ['250% increase in bookings', '180% growth in email subscribers', '320% boost in organic traffic'],
    },
    {
      id: 6,
      name: 'Robert Martinez',
      company: 'Construction Company',
      role: 'Owner',
      rating: 5,
      text: "Before working with Raghu, our construction company relied solely on referrals. Now, we have a steady stream of leads from our optimized website and Google Ads campaigns. The local SEO work has made us the go-to choice for construction services in our area.",
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      results: ['200% increase in project inquiries', '150% boost in website conversions', '300% growth in Google visibility'],
    },
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Fashion Boutique',
      thumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2:15',
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'TechFlow Solutions',
      thumbnail: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '1:45',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Local Restaurant Chain',
      thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2:30',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Client <span className="text-cyan-400">Testimonials</span></h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Don't just take our word for it. Hear from our satisfied clients about their 
              success stories and the results we've delivered together.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image and Info */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-12 text-white flex flex-col justify-center">
                <div className="text-center">
                  <img
                    src={currentTest.image}
                    alt={currentTest.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white"
                  />
                  <h3 className="text-2xl font-bold mb-2">{currentTest.name}</h3>
                  <p className="text-blue-100 mb-1">{currentTest.role}</p>
                  <p className="text-cyan-200 font-semibold mb-6">{currentTest.company}</p>
                  
                  <div className="flex justify-center mb-8">
                    {[...Array(currentTest.rating)].map((_, i) => (
                      <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold mb-4">Key Results:</h4>
                    {currentTest.results.map((result, index) => (
                      <div key={index} className="text-sm bg-white/10 rounded-lg px-3 py-2">
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-12 flex flex-col justify-center">
                <Quote className="h-12 w-12 text-cyan-500 mb-6" />
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  {currentTest.text}
                </blockquote>
                
                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentTestimonial ? 'bg-cyan-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    >
                      <ArrowLeft className="h-5 w-5 text-gray-600" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    >
                      <ArrowRight className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Video <span className="text-cyan-500">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600">
              Watch our clients share their success stories in their own words
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={video.id} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={`${video.name} Video Testimonial`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-colors duration-300">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-cyan-500" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900">{video.name}</h4>
                  <p className="text-gray-600">{video.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              More Success <span className="text-cyan-500">Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text.substring(0, 150)}..."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Client <span className="text-cyan-400">Satisfaction</span>
            </h2>
            <p className="text-xl text-blue-100">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-xl text-blue-100">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">4.9/5</div>
              <div className="text-xl text-blue-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-xl text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">150%</div>
              <div className="text-xl text-blue-100">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's work together to create your own digital marketing success story.
          </p>
          <a
            href="/contact"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block text-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;