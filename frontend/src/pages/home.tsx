import FeaturesSection from '../components/featureSection';

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
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
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
    </>
  );
};

export default Home;
