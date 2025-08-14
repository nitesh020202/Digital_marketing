import React from 'react';
import { TrendingUp, Users, MousePointer, Eye, ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Fashion Store',
      industry: 'Retail',
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'Low online visibility and poor conversion rates',
      solution: 'Comprehensive SEO strategy and conversion optimization',
      results: [
        { metric: 'Organic Traffic', value: '+320%', icon: TrendingUp },
        { metric: 'Conversion Rate', value: '+185%', icon: MousePointer },
        { metric: 'Revenue Growth', value: '+250%', icon: TrendingUp },
      ],
      testimonial: "Raghu's team transformed our online presence completely. Our sales have tripled!",
      client: 'Sarah Johnson, Fashion Boutique',
    },
    {
      title: 'SaaS Technology Platform',
      industry: 'Technology',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'High customer acquisition cost and low brand awareness',
      solution: 'Multi-channel digital marketing and content strategy',
      results: [
        { metric: 'Lead Generation', value: '+400%', icon: Users },
        { metric: 'Cost per Lead', value: '-60%', icon: TrendingUp },
        { metric: 'Brand Mentions', value: '+280%', icon: Eye },
      ],
      testimonial: "The ROI on our marketing spend has been incredible. Best investment we've made.",
      client: 'Michael Chen, TechFlow Solutions',
    },
    {
      title: 'Local Restaurant Chain',
      industry: 'Food & Beverage',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'Limited local visibility and declining foot traffic',
      solution: 'Local SEO optimization and social media marketing',
      results: [
        { metric: 'Local Searches', value: '+450%', icon: Eye },
        { metric: 'Social Engagement', value: '+380%', icon: Users },
        { metric: 'Foot Traffic', value: '+160%', icon: TrendingUp },
      ],
      testimonial: "Our restaurants are busier than ever. The local SEO strategy worked perfectly.",
      client: 'Maria Gonzalez, Taste of Home',
    },
    {
      title: 'B2B Consulting Firm',
      industry: 'Professional Services',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'Difficulty generating qualified leads',
      solution: 'LinkedIn marketing and content marketing strategy',
      results: [
        { metric: 'Qualified Leads', value: '+300%', icon: Users },
        { metric: 'LinkedIn Followers', value: '+500%', icon: Users },
        { metric: 'Proposal Requests', value: '+220%', icon: MousePointer },
      ],
      testimonial: "Our pipeline is full of high-quality leads. Outstanding results!",
      client: 'David Kim, Strategic Consulting Group',
    },
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '150%', label: 'Average ROI Increase' },
    { number: '95%', label: 'Client Retention Rate' },
    { number: '300%', label: 'Average Traffic Growth' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our <span className="text-cyan-400">Portfolio</span></h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Real results from real businesses. See how we've helped companies across industries 
              achieve remarkable growth through strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-cyan-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed case studies showcasing our proven methodology and exceptional results
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      {study.industry}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-2xl">
                          <result.icon className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900 mb-1">{result.value}</div>
                          <div className="text-sm text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <blockquote className="bg-blue-50 p-6 rounded-2xl mb-6">
                      <p className="text-lg text-gray-700 italic mb-4">"{study.testimonial}"</p>
                      <cite className="text-cyan-600 font-semibold">{study.client}</cite>
                    </blockquote>

                    <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 flex items-center group">
                      View Full Case Study
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We <span className="text-cyan-500">Serve</span>
            </h2>
            <p className="text-xl text-gray-600">
              We've delivered successful campaigns across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              'E-commerce',
              'SaaS & Tech',
              'Healthcare',
              'Real Estate',
              'Food & Beverage',
              'Professional Services',
              'Education',
              'Finance',
              'Manufacturing',
              'Non-Profit',
              'Automotive',
              'Travel & Tourism',
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-300">
                <div className="font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center group"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;