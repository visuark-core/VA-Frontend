import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Tag, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically come from an API or CMS
  const blogPost = {
    id: 1,
    slug: 'future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    tags: ['Web Development', 'Trends', 'AI', 'PWA'],
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications. As we move forward, developers need to stay ahead of the curve to create engaging, performant, and accessible digital experiences.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the way we write code. From GitHub Copilot to ChatGPT, AI-powered tools are becoming indispensable for developers. These tools can help with:</p>
      <ul>
        <li>Code generation and completion</li>
        <li>Bug detection and fixing</li>
        <li>Code optimization suggestions</li>
        <li>Documentation generation</li>
      </ul>

      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to gain traction as they bridge the gap between web and native applications. They offer:</p>
      <ul>
        <li>Offline functionality</li>
        <li>Push notifications</li>
        <li>App-like user experience</li>
        <li>Improved performance</li>
      </ul>

      <h2>3. WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance applications in the browser by allowing developers to run code written in languages like C++, Rust, and Go at near-native speed.</p>

      <h2>4. Micro-Frontends Architecture</h2>
      <p>As applications grow in complexity, micro-frontends are becoming a popular approach to break down large applications into smaller, manageable pieces that can be developed and deployed independently.</p>

      <h2>5. Enhanced Developer Experience</h2>
      <p>Tools like Vite, Next.js 13+, and improved TypeScript support are making development faster and more enjoyable. The focus on developer experience continues to drive innovation in build tools and frameworks.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is bright, with new technologies and approaches making it easier to build better applications. Staying informed about these trends and experimenting with new tools will help developers create more engaging and performant web experiences.</p>
    `
  };

  const relatedPosts = [
    {
      id: 2,
      slug: 'design-systems-guide',
      title: 'Building Scalable Design Systems',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      slug: 'performance-optimization-tips',
      title: 'Web Performance Optimization Tips',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blog</span>
              </Link>

              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPost.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blogPost.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPost.readTime}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {blogPost.title}
                </h1>

                <p className="text-xl text-gray-300 mb-8">
                  {blogPost.excerpt}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {blogPost.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center space-x-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share Article</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="prose prose-lg prose-invert max-w-none"
              >
                <div 
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-8 border border-gray-700"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt={blogPost.author}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{blogPost.author}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">Creative Director</p>
                    <p className="text-gray-300">
                      Sarah is a creative director with over 10 years of experience in web development 
                      and design. She's passionate about creating user-centered digital experiences 
                      and staying ahead of industry trends.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Related <span className="text-cyan-400">Articles</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {relatedPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                          <Link to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors flex items-center space-x-1"
                        >
                          <span>Read Article</span>
                          <ArrowLeft className="h-4 w-4 rotate-180" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default BlogPost;