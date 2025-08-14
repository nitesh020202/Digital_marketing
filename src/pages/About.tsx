import React from 'react';
import { Award, TrendingUp, Users, Target, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy is designed with measurable outcomes and ROI in mind.',
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is our success. We build lasting partnerships, not just campaigns.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to give you a competitive edge.',
    },
  ];

  const team = [
    {
      name: 'Raghu Patel',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Digital marketing strategist with 5+ years of experience helping businesses achieve exponential growth.',
    },
    {
      name: 'Sarah Johnson',
      role: 'SEO Specialist',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'SEO expert who has helped dozens of websites achieve first-page rankings on Google.',
    },
    {
      name: 'Michael Chen',
      role: 'PPC Manager',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Google Ads certified professional with expertise in high-converting ad campaigns.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Social Media Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative strategist specializing in social media marketing and brand engagement.',
    },
  ];

  const achievements = [
    { number: '200+', label: 'Successful Projects' },
    { number: '150%', label: 'Average ROI Increase' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years of Excellence' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About <span className="text-cyan-400">Raghu Digital Marketing</span></h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Transforming businesses through innovative digital marketing strategies since 2019. 
              We're not just marketers—we're your growth partners.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Story Behind Our Success</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2019 by Raghu Patel, our agency was born from a simple belief: 
                  every business deserves to reach its full potential in the digital world.
                </p>
                <p>
                  After helping his first local business triple their online revenue, 
                  Raghu realized the transformative power of strategic digital marketing. 
                  What started as a solo venture has grown into a dedicated team of specialists.
                </p>
                <p>
                  Today, we've helped over 200 businesses achieve remarkable growth through 
                  data-driven strategies, innovative campaigns, and unwavering commitment to results.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-10">
                <div className="text-center">
                  <Award className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900">Google Certified</div>
                  <div className="text-gray-600">Partners</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900">Top 1%</div>
                  <div className="text-gray-600">Performance</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Journey"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital marketing strategies 
                that drive measurable growth, build lasting customer relationships, and create 
                sustainable competitive advantages in the digital marketplace.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the most trusted digital marketing partner for businesses worldwide, 
                known for delivering exceptional results, fostering innovation, and helping 
                our clients achieve their most ambitious growth goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-cyan-500">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-cyan-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-cyan-500">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600">Dedicated professionals committed to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-cyan-500 font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-cyan-400">Achievements</span></h2>
            <p className="text-xl text-blue-100">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                <div className="text-xl text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's work together to take your business to the next level with our proven strategies.
          </p>
          <a
            href="/contact"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block text-lg"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;