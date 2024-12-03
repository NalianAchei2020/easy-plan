import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';

import { fetchTemplate } from '../redux/templateSlice';
import { RootState, AppDispatch } from '../redux/store';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
    <div className="px-6 py-[50px]">
      <div className="grid grid-cols-5 gap-4 mb-6">
        {templates.map((template) => (
          <div key={template._id} className="w-full h-42">
            <Document
              file={template.filename} // Update this path as needed
              onLoadError={console.error}
            >
              <Page pageNumber={1} />
            </Document>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSECTION;
