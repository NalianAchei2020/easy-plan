import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import {
  Container,
  Box,
  Button,
  LinearProgress,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import OverviewForm from './OverviewForm';
import CoverPageForm from './coverPageForm';
import CompanyInfoForm from './CompanyInfoPage';

const steps = [
  { id: 'overview', label: 'Overview', progress: 5 },
  { id: 'cover-page', label: 'Cover Page', progress: 15 },
  { id: 'company-info', label: "Company's Info", progress: 30 },
  { id: 'product-service', label: 'Product/Service', progress: 45 },
  { id: 'marketing', label: 'Marketing', progress: 60 },
  { id: 'target-customers', label: 'Target Customers', progress: 75 },
  { id: 'financial-overview', label: 'Financial Overview', progress: 85 },
  { id: 'contributions', label: 'Contributions & Loans', progress: 95 },
  { id: 'assets', label: 'Assets & Other Assets', progress: 100 },
];

const BusinessPlanForm = () => {
  const [currentStep, setCurrentStep] = useState(steps[0].id);
  const [formData, setFormData] = useState({
    // Overview data
    companyType: '',
    startMonth: '',
    startYear: '',
    industry: '',
    projectTitle: '',
    // Cover page data
    companyName: '',
    companyAddress: '',
    email: '',
    city: '',
    phone: '',
    country: '',
    website: '',
    ceoName: '',
    // Company info data
    legalInformation: '',
    businessType: '',
    problemSolving: '',
    solutionDescription: '',
    isOperating: '',
    revenue: '',
    cashBalance: '',
    netProfit: '',
  });

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
  const progress = steps[currentStepIndex].progress;

  const handleFormUpdate = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1].id);
    }
  };

  return (
    <Box sx={{ bgcolor: 'grey.100', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Progress Bar */}
        <Box sx={{ mb: 4, px: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 1,
            }}
          >
            <Typography variant="body2" color="primary">
              {progress}% Complete
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
              },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          {/* Steps Navigation */}
          <Paper sx={{ width: 240, flexShrink: 0 }}>
            <List>
              {steps.map((step) => (
                <ListItem key={step.id} disablePadding>
                  <ListItemButton
                    selected={currentStep === step.id}
                    onClick={() => setCurrentStep(step.id)}
                    sx={{
                      borderRadius: 1,
                      mb: 0.5,
                      '&.Mui-selected': {
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                        },
                      },
                    }}
                  >
                    <ListItemText primary={step.label} />
                    {currentStep === step.id && <ChevronRight />}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Form Content */}
          <Paper sx={{ flex: 1, p: 3 }}>
            {currentStep === 'overview' && (
              <OverviewForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
              />
            )}
            {currentStep === 'cover-page' && (
              <CoverPageForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
              />
            )}
            {currentStep === 'company-info' && (
              <CompanyInfoForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
              />
            )}
            {/* Add other form steps here */}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessPlanForm;
