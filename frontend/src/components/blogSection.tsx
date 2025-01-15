import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogProps {
  image: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

const blogs: BlogProps[] = [
  {
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2374&auto=format&fit=crop',
    title: 'Top Social Media Trends to Watch in 2024',
    description:
      'Discover the latest social media trends that will shape digital marketing strategies in 2024. From AI-driven content to emerging platforms.',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    category: 'Digital Marketing',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop',
    title: 'Client Story: Unshelf Design',
    description:
      'How a small design studio transformed their business model and achieved 300% growth in just one year using our platform.',
    date: 'Mar 12, 2024',
    readTime: '4 min read',
    category: 'Case Study',
  },
  {
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2371&auto=format&fit=crop',
    title: 'Logos and Beyond – Personifying Your Brand',
    description:
      'Learn how to create a compelling brand identity that goes beyond just logos. A comprehensive guide to brand storytelling.',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    category: 'Branding',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with our latest articles, success stories, and expert
            insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to="/blog" className="block">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group/btn">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
