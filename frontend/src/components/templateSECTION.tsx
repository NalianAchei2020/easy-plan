const TemplateSECTION = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5]">
      <div className="p-6  text-center">
        <h2 className="text-2xl font-semibold mb-4">Pre-Made Templates</h2>
        <p className="text-gray-600 mb-6 mx-16">
          Save time with our ready-to-use templates that cater to diverse
          industries such as finance, technology, and more. Customize them
          instantly to suit your needs and start editing right away.
        </p>
        <div className="grid grid-cols-5 gap-4 mb-6">
          <img
            src="template.png"
            alt="Template 1"
            className="w-full h-42 object-cover"
          />
          <img
            src="template.png"
            alt="Template 2"
            className="w-full h-42 object-cover"
          />
          <img
            src="template.png"
            alt="Template 3"
            className="w-full h-42 object-cover"
          />
          <img
            src="template.png"
            alt="Template 4"
            className="w-full h-42 object-cover"
          />
          <img
            src="template.png"
            alt="Template 5"
            className="w-full h-42 object-cover"
          />
          <img
            src="template.png"
            alt="Template 6"
            className="w-full h-42 object-cover"
          />
          <img
            src="template.png"
            alt="Template 6"
            className="w-full h-42 object-cover"
          />
          <img
            src="template.png"
            alt="Template 6"
            className="w-full h-42 object-cover"
          />
          <img
            src="template.png"
            alt="Template 6"
            className="w-full h-42 object-cover"
          />
          <img
            src="template.png"
            alt="Template 6"
            className="w-full h-42 object-cover"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Browse Template
        </button>
      </div>
    </div>
  );
};

export default TemplateSECTION;
