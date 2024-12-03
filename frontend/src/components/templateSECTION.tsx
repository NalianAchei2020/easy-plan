import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTemplate } from '../redux/templateSlice';
import { RootState, AppDispatch } from '../redux/store';

const TemplateSECTION = () => {
  const dispatch: AppDispatch = useDispatch();
  const { templates, error, loading } = useSelector(
    (state: RootState) => state.template
  );

  const getTemplate = () => {
    dispatch(fetchTemplate());
  };

  useEffect(() => {
    getTemplate();
  }, [dispatch]);

  console.log(templates);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
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
    </div>
  );
};

export default TemplateSECTION;
