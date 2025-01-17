import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import OverviewForm from './OverviewForm';

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
    companyType: '',
    startMonth: '',
    startYear: '',
    industry: '',
    projectTitle: '',
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8 px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-600">
              {progress}% Complete
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-6">
          {/* Steps Navigation */}
          <div className="w-80 shrink-0 bg-white rounded-xl shadow-sm p-6 ">
            <nav className="space-y-1">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={cn(
                    'w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    currentStep === step.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <span className="flex-1 text-left">{step.label}</span>
                  {currentStep === step.id && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Form Content */}
          <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
            {currentStep === 'overview' && (
              <OverviewForm
                data={formData}
                onUpdate={handleFormUpdate}
                onNext={handleNext}
              />
            )}
            {/* Add other form steps here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanForm;
