import { Link } from 'react-router-dom';
import BlogSection from '../components/blogSection';
import FeaturesSection from '../components/featureSection';
import TemplateSECTION from '../components/templateSECTION';

const Home = () => {
  return (
    <>
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage: "url('download 1.png')",
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center  bg-opacity-75 rounded-lg p-6">
          <div className="md:w-1/2 p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
              Generate Professional Business Plans in Minutes
            </h1>
            <p className="text-gray-700 mt-4">
              Our go-to solution for hassle-free business plan creation
            </p>
            <p className="text-gray-700 mt-2">
              Our web app simplifies the process of creating a business plan by
              providing ready-to-use templates and intuitive tools.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-black">
              Get Started for free
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 p-4">
            <img
              src="img1.png"
              alt="Business Plan"
              className="rounded shadow-lg w-full"
            />
          </div>
        </div>
      </section>
      <FeaturesSection />
      {/* template section */}
      <div className="flex flex-col px-4 md:px-16 bg-[#F5F5F5] py-8">
        <div className="flex flex-col items-center md:px-20 px-2">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Pre-Made Templates
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Save time with our ready-to-use templates that cater to diverse
            industries such as finance, technology, and more. Customize them
            instantly to suit your needs and start editing right away.
          </p>
        </div>
        <TemplateSECTION />
        <div className="text-center my-[-5px]">
          <Link to="/blog">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-black">
              Browse Template
            </button>
          </Link>
        </div>
      </div>

      {/*Blog section */}
      <div>
        <div>
          <h2 className="font-bold text-center mt-12 text-xl">
            Small Business Blogs and Client Stories
          </h2>
        </div>
        <BlogSection />
        <div className="text-center my-8">
          <Link to="/blog">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-black">
              View all blogs
            </button>
          </Link>
        </div>
      </div>

      {/*Get started section */}
      <div
        className="flex flex-col items-center justify-center py-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('Group 62.png')",
        }}
      >
        <div className="p-6 max-w-2xl text-center relative">
          <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-xl font-semibold mb-4">
            Start Creating Your Business Plan Today
          </h2>
          <p className="text-gray-600 mb-6">
            We are a leading business plan generator platform that helps
            entrepreneurs and startups bring their ideas to life.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-[#1447FB]">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
