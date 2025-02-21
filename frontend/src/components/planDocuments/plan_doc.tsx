import React, { useEffect, useState } from 'react';
import CoverPage from './coverPage';
import { getFormData } from '../../utils/getFormData';
import { Container } from '@mui/material';
import ExecutiveSummary from './executiveSummary';
import TableOfContents from './tableOfContent';

const PlanDocument = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const formData = getFormData();
    setData(formData);
  }, []);
  console.log(data);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-5">
      <Container maxWidth="md">
        <CoverPage data={data} />
        <TableOfContents />
        <ExecutiveSummary data={data} />
      </Container>
    </div>
  );
};

export default PlanDocument;
