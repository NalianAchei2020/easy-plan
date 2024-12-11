import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
import PDF from './cv.pdf';
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
      <div className="gap-4 mb-6">
        {templates.map((template) => (
          <div
            key={template._id}
            className="w-25 h-42 p-[50px] bg-gray-500 border-2- border-red"
          >
            <Document file={PDF} onLoadError={console.error}>
              <Page
                pageNumber={1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSECTION;
