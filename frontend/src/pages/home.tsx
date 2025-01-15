import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import BlogSection from '../components/blogSection';
import FeaturesSection from '../components/featureSection';
import TemplateSECTION from '../components/templateSECTION';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/50" />
        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 lg:px-8 py-20">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left fade-in-section">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight">
                Generate Professional
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 block mt-2">
                  Business Plans in Minutes
                </span>
              </h1>
              <div className="space-y-4">
                <p className="text-gray-700 text-xl md:text-2xl max-w-xl">
                  Our go-to solution for hassle-free business plan creation
                </p>
                <p className="text-gray-600 text-lg max-w-xl">
                  Our web app simplifies the process of creating a business plan
                  by providing ready-to-use templates and intuitive tools.
                </p>
              </div>
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-500 opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative">Get Started for Free</span>
              </button>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 p-4 fade-in-section">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full transform -translate-y-4 translate-x-4" />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
                  alt="Business Planning"
                  className="relative rounded-2xl shadow-2xl w-full transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fade-in-section">
        <FeaturesSection />
      </div>

      {/* Templates Section */}
      <section className="relative py-20 overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Pre-Made Templates
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Save time with our ready-to-use templates that cater to diverse
              industries such as finance, technology, and more. Customize them
              instantly to suit your needs and start editing right away.
            </p>
          </div>
          <TemplateSECTION />
          <div className="text-center mt-12">
            <Link to="/blog">
              <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-500 opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative">Browse Templates</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <BlogSection />
        </div>
      </section>

      {/* Get Started Section */}
      <section
        className="relative py-32 bg-cover bg-center bg-fixed fade-in-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/90" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto backdrop-blur-sm rounded-3xl p-12">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-300/30 rounded-full blur-xl animate-pulse delay-700" />

              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Start Creating Your Business Plan Today
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
                  We are a leading business plan generator platform that helps
                  entrepreneurs and startups bring their ideas to life.
                </p>
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-xl overflow-hidden transition-all duration-300 ease-out hover:text-white hover:bg-blue-600">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-gray-100 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300"></span>
                  <span className="relative">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
