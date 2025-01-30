import { motion } from 'framer-motion';
import { ArrowRight, Layout, PieChart, Sliders } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  image: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Layout className="w-6 h-6" />,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    title: 'Easy-to-Use Interface',
    description:
      'Our intuitive app simplifies business plan creation for entrepreneurs by providing a user-friendly platform. With a streamlined input process, you can effortlessly enter your information and transform it into a comprehensive business plan.',
  },
  {
    icon: <Sliders className="w-6 h-6" />,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop',
    title: 'Customizable Templates',
    description:
      'Explore our range of ready-made templates that are designed by professionals. Customize them to match your specific business requirements and give your brand a personalized look.',
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop',
    title: 'Financial Analysis',
    description:
      "Easily assess the financial viability of your business using our tools. Generate reliable financial projections and visualize data with clear charts and graphs, helping you make informed decisions and understand your business's financial health.",
  },
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the powerful tools and features that make our platform the
            perfect choice for your business planning needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <button className="text-blue-600 font-medium inline-flex items-center group/btn">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 lg:mt-16"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Generate Business Plans
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
