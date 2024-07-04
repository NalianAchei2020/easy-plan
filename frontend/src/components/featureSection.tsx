import FeatureCard from './featureCard';

interface FeatureProps {
  image: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    image: 'img1.png',
    title: 'Easy-to-Use Interface',
    description:
      'Our intuitive app simplifies business plan creation for entrepreneurs by providing a user-friendly platform. With a streamlined input process, you can effortlessly enter your information and transform it into a comprehensive business plan.',
  },
  {
    image: 'img1.png',
    title: 'Customizable Templates',
    description:
      'Explore our range of ready-made templates that are designed by professionals. Customize them to match your specific business requirements and give your brand a personalized look.',
  },
  {
    image: 'img1.png',
    title: 'Financial Analysis',
    description:
      "Easily assess the financial viability of your business using our tools. Generate reliable financial projections and visualize data with clear charts and graphs, helping you make informed decisions and understand your business's financial health.",
  },
];

const FeaturesSection = () => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">KEY FEATURES</h2>
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-col">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-black">
              Generate business plans
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
