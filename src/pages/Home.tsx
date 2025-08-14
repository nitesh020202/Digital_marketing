import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Users, MousePointer, PenTool, Mail, Star, TrendingUp, Award, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { number: '200+', label: 'Happy Clients' },
    { number: '150%', label: 'Average ROI Increase' },
    { number: '95%', label: 'Client Retention Rate' },
    { number: '5+', label: 'Years Experience' },
  ];

  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Boost your search rankings and drive organic traffic with our comprehensive SEO strategies.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand awareness across all major social platforms.',
    },
    {
      icon: MousePointer,
      title: 'Google Ads',
      description: 'Maximize your ad spend with targeted PPC campaigns that convert visitors into customers.',
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives engagement.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Innovations Inc.',
      rating: 5,
      text: 'Raghu transformed our digital presence completely. Our website traffic increased by 300% within 6 months!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Michael Chen',
      company: 'Growth Dynamics',
      rating: 5,
      text: 'The ROI on our Google Ads campaigns has been incredible. Raghu truly understands digital marketing.',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      company: 'Local Boutique',
      rating: 5,
      text: 'Our social media engagement skyrocketed after working with Raghu. Highly recommend!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Growth, <span className="text-cyan-400">Our Strategy</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Transform your business with data-driven digital marketing strategies that deliver measurable results. 
                Let's accelerate your growth together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300 transform hover:scale-105"
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Digital Marketing"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Raghu - Digital Marketing Expert"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet <span className="text-cyan-500">Raghu</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 5 years of experience in digital marketing, I've helped 200+ businesses 
                achieve their growth goals through strategic, data-driven marketing campaigns.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-cyan-500 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Certified Expert</div>
                    <div className="text-sm text-gray-600">Google & Facebook</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-cyan-500 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Proven Results</div>
                    <div className="text-sm text-gray-600">150% Avg ROI</div>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-semibold group"
              >
                Learn More About My Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-cyan-500">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 inline-flex items-center group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-cyan-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-cyan-500 font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss your goals and create a custom digital marketing strategy that delivers results.
          </p>
          <Link
            to="/contact"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center group text-lg"
          >
            Book Your Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;