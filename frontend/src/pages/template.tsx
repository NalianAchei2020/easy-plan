import TemplateSECTION from '../components/templateSECTION';

const Template = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-[400] mt-10 text-center">
          Choose a template and customize it{' '}
        </h1>
      </div>
      <TemplateSECTION />
    </div>
  );
};

export default Template;
