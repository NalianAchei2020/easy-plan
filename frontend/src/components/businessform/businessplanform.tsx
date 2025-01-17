import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import {
  Container,
  Box,
  LinearProgress,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  IconButton,
  Drawer,
  useTheme,
} from '@mui/material';
import { Menu } from 'lucide-react';
import OverviewForm from './OverviewForm';
import CoverPageForm from './coverPageForm';
import CompanyInfoForm from './CompanyInfoPage';
import ProductServiceForm from './ProductServiceForm';
import MarketingForm from './MarketingForm';
import TargetCustomersForm from './TargetCustomersForm';
import FinancialOverviewForm from './FinancialOverviewForm';
import ContributionsLoansForm from './ContributionsLoansForm';
import AssetsForm from './AssetsForm';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
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
    // Product/Service data
    products: [
      {
        name: '',
        currency: '',
        costOfGoods: {
          yearOne: '',
          yearTwo: '',
          yearThree: '',
        },
        revenueExpected: {
          yearOne: '',
          yearTwo: '',
          yearThree: '',
        },
      },
    ],
    // Marketing data
    objective: '',
    strategicSteps: ['', '', ''],
    competitiveAdvantage: '',
    // Target Customers data
    targetCustomers: {
      education: false,
      income: false,
      familySize: false,
      language: false,
      activities: false,
      maritalStatus: false,
      gender: false,
      location: false,
      occupation: false,
      age: false,
      population: false,
      other: false,
    },
    maritalStatusDetails: '',
    // Contributions & Loans data
    ownerContributions: '',
    ownerWithdrawals: '',
    loanDetails: '',
    interestType: '',
    expectedFundMonth: '',
    expectedFundYear: '',
    // Financial Overview
    companyBalance: '',
    billPaymentDays: '',
    customerCreditDays: '',
    creditCustomerPercentage: '',
    yearlyExpenses: '',
    supplierCreditDays: {
      yearOne: '',
      yearTwo: '',
      yearThree: '',
    },
    // Assets data
    assets: [{ name: '', cost: '' }],
  });

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
  const progress = steps[currentStepIndex].progress;

  const handleFormUpdate = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1].id);
      if (isMobile) {
        setMobileOpen(false);
      }
    }
  };

  const handlePrev = () => {
    if (currentStepIndex < steps.length + 1) {
      setCurrentStep(steps[currentStepIndex - 1].id);
      if (isMobile) {
        setMobileOpen(false);
      }
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleStepClick = (stepId: string) => {
    setCurrentStep(stepId);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const navigationContent = (
    <List>
      {steps.map((step) => (
        <ListItem key={step.id} disablePadding>
          <ListItemButton
            selected={currentStep === step.id}
            onClick={() => handleStepClick(step.id)}
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
            <ListItemText
              primary={step.label}
              sx={{
                '& .MuiTypography-root': {
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                },
              }}
            />
            {currentStep === step.id && <ChevronRight />}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ bgcolor: 'grey.100', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Mobile Menu Button */}
        {isMobile && (
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="subtitle1"
              color="primary.main"
              fontWeight="medium"
            >
              {steps.find((step) => step.id === currentStep)?.label}
            </Typography>
          </Box>
        )}

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
          {/* Mobile Drawer */}
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 280,
                  bgcolor: 'background.paper',
                  p: 2,
                },
              }}
            >
              {navigationContent}
            </Drawer>
          ) : (
            /* Desktop Navigation */
            <Paper
              sx={{
                width: { sm: 280, md: 300 },
                flexShrink: 0,
                display: { xs: 'none', md: 'block' },
                p: 2,
                height: 'fit-content',
              }}
            >
              {navigationContent}
            </Paper>
          )}

          {/* Form Content */}
          <Paper
            sx={{
              flex: 1,
              p: { xs: 2, sm: 3 },
              width: '100%',
              maxWidth: '100%',
            }}
          >
            {currentStep === 'overview' && (
              <OverviewForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
            {currentStep === 'cover-page' && (
              <CoverPageForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
            {currentStep === 'company-info' && (
              <CompanyInfoForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
            {currentStep === 'product-service' && (
              <ProductServiceForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
            {currentStep === 'marketing' && (
              <MarketingForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
            {currentStep === 'target-customers' && (
              <TargetCustomersForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
            {currentStep === 'financial-overview' && (
              <FinancialOverviewForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
            {currentStep === 'contributions' && (
              <ContributionsLoansForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
            {currentStep === 'assets' && (
              <AssetsForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessPlanForm;
