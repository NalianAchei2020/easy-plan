interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard = ({ image, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 mb-4 ">
      <img src={image} alt={title} className="w-full md:w-1/3 rounded-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
