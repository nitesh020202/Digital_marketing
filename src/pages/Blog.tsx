import React from 'react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: '10 Digital Marketing Trends That Will Dominate 2025',
    excerpt: 'Stay ahead of the curve with these emerging trends that will shape the digital marketing landscape in 2025. From AI-powered personalization to voice search optimization.',
    author: 'Raghu Patel',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Digital Marketing Trends',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Trends', 'Strategy', 'AI', 'Future'],
  };

  const blogPosts = [
    {
      id: 2,
      title: 'How to Optimize Your Website for Voice Search in 2025',
      excerpt: 'Voice search is revolutionizing how users find information. Learn the latest strategies to optimize your content for voice queries and stay competitive.',
      author: 'Sarah Johnson',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Voice Search', 'SEO', 'Optimization'],
    },
    {
      id: 3,
      title: 'The Complete Guide to Google Ads Automation',
      excerpt: 'Discover how to leverage Google Ads automated bidding strategies to maximize your ROI while saving time on campaign management.',
      author: 'Michael Chen',
      date: 'January 10, 2025',
      readTime: '10 min read',
      category: 'PPC Advertising',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Google Ads', 'Automation', 'PPC'],
    },
    {
      id: 4,
      title: 'Social Media Content Calendar: Plan Like a Pro',
      excerpt: 'Create engaging social media content that resonates with your audience. Plus, get our free content calendar template to streamline your posting schedule.',
      author: 'Emily Rodriguez',
      date: 'January 8, 2025',
      readTime: '7 min read',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Social Media', 'Content Planning', 'Strategy'],
    },
    {
      id: 5,
      title: 'Email Marketing ROI: 5 Strategies for Better Results',
      excerpt: 'Email marketing continues to deliver the highest ROI. Learn five proven strategies to improve your email performance and drive more conversions.',
      author: 'Raghu Patel',
      date: 'January 5, 2025',
      readTime: '9 min read',
      category: 'Email Marketing',
      image: 'https://images.pexels.com/photos/4386775/pexels-photo-4386775.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Email Marketing', 'ROI', 'Conversion'],
    },
    {
      id: 6,
      title: 'Local SEO Checklist: Dominate Your Local Market',
      excerpt: 'A comprehensive checklist to improve your local search visibility and attract more customers from your geographic area.',
      author: 'David Kim',
      date: 'January 3, 2025',
      readTime: '12 min read',
      category: 'Local SEO',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Local SEO', 'Small Business', 'Local Marketing'],
    },
    {
      id: 7,
      title: 'Content Marketing Metrics That Actually Matter',
      excerpt: 'Stop vanity metrics and focus on the KPIs that truly indicate content marketing success and drive business growth.',
      author: 'Lisa Thompson',
      date: 'December 30, 2024',
      readTime: '8 min read',
      category: 'Content Marketing',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Content Marketing', 'Analytics', 'KPIs'],
    },
  ];

  const categories = [
    { name: 'All Posts', count: 25 },
    { name: 'SEO', count: 8 },
    { name: 'PPC Advertising', count: 6 },
    { name: 'Social Media', count: 7 },
    { name: 'Email Marketing', count: 4 },
    { name: 'Content Marketing', count: 5 },
    { name: 'Analytics', count: 3 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Digital Marketing <span className="text-cyan-400">Blog</span></h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Expert insights, proven strategies, and the latest trends in digital marketing. 
              Stay informed and grow your business with actionable advice from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                  {featuredPost.category}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{featuredPost.title}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{featuredPost.excerpt}</p>
                
                <div className="flex items-center mb-8 text-gray-500">
                  <User className="h-5 w-5 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 flex items-center group w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                <p className="text-lg text-gray-600">Discover actionable insights to grow your business</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        {post.category}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-cyan-600 transition-colors duration-200">
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold group"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">3</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-cyan-500" />
                    Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center justify-between text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full text-sm">
                            {category.count}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="mb-6">Get the latest digital marketing insights delivered to your inbox.</p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <div key={index} className="flex space-x-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 hover:text-cyan-600 transition-colors duration-200">
                            <a href={`/blog/${post.id}`}>{post.title.substring(0, 50)}...</a>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement These Strategies?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let our team help you apply these insights to grow your business with proven digital marketing strategies.
          </p>
          <a
            href="/contact"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center group"
          >
            Get Expert Help
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;