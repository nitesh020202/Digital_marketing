import React from 'react';
import { Search, Users, MousePointer, PenTool, Mail, BarChart, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization to boost your organic visibility',
      features: ['On-Page SEO Optimization', 'Technical SEO Audit', 'Link Building Strategy', 'Keyword Research & Analysis', 'Local SEO Optimization', 'SEO Performance Reporting'],
      price: 'Starting at $1,500/month',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand awareness across all platforms',
      features: ['Content Strategy & Creation', 'Instagram & Facebook Ads', 'LinkedIn Marketing', 'Community Management', 'Influencer Partnerships', 'Social Media Analytics'],
      price: 'Starting at $1,200/month',
    },
    {
      icon: MousePointer,
      title: 'Pay-Per-Click Advertising',
      description: 'Targeted advertising campaigns that maximize your ROI',
      features: ['Google Ads Management', 'Bing Ads Campaigns', 'Facebook & Instagram Ads', 'Remarketing Campaigns', 'Landing Page Optimization', 'Conversion Tracking Setup'],
      price: 'Starting at $2,000/month',
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Compelling content that drives engagement and conversions',
      features: ['Blog Content Writing', 'Video Marketing Strategy', 'Infographic Design', 'Content Calendar Planning', 'Content Distribution', 'Performance Analytics'],
      price: 'Starting at $1,000/month',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Automated email campaigns that nurture leads and drive sales',
      features: ['Email Campaign Design', 'Marketing Automation', 'List Building Strategies', 'A/B Testing', 'Drip Campaign Setup', 'Email Analytics Reporting'],
      price: 'Starting at $800/month',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing performance',
      features: ['Google Analytics Setup', 'Custom Dashboard Creation', 'Monthly Performance Reports', 'Conversion Tracking', 'ROI Analysis', 'Strategic Recommendations'],
      price: 'Starting at $600/month',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, competitors, and target audience to develop a custom strategy.',
    },
    {
      step: '02',
      title: 'Implementation',
      description: 'Our expert team executes the strategy across all relevant digital channels.',
    },
    {
      step: '03',
      title: 'Optimization',
      description: 'We continuously monitor and optimize campaigns for maximum performance.',
    },
    {
      step: '04',
      title: 'Reporting',
      description: 'Regular detailed reports keep you informed of progress and results.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our <span className="text-cyan-400">Services</span></h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Comprehensive digital marketing solutions designed to accelerate your business growth 
              and maximize your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-cyan-500 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-cyan-500">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-cyan-500">Our Services?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                    <p className="text-gray-600">Over 200 successful campaigns with an average ROI increase of 150%.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Approach</h4>
                    <p className="text-gray-600">Every decision is backed by comprehensive analytics and performance data.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Transparent Reporting</h4>
                    <p className="text-gray-600">Monthly detailed reports with clear metrics and actionable insights.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h4>
                    <p className="text-gray-600">Direct access to your dedicated account manager and our expert team.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Why Choose Us"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss which services are right for your business and create a custom strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;