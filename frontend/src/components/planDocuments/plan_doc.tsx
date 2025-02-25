import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { BusinessPlanData } from './types';
import { getFormData } from '../../utils/getFormData';
import CoverPage from './coverPage';
import TableOfContents from './tableOfContent';
import ExecutiveSummary from './executiveSummary';
import CompanyOverview from './companyOverview';
import ProductOverview from './productOverview';
import MarketingPlan from './marketingPlan';
import TargetCustomers from './targetCustomers';
import OperationalPlan from './operationalPlan';
import SalesForecast from './saleFocast';
import FinancialOverview from './financialOverview';
import BalanceSheet from './balanceSheet';
import CashFlow from './cashFlow';

// Create a default state that matches BusinessPlanData structure
const defaultData: BusinessPlanData = {
  companyType: '',
  startMonth: '',
  startYear: '',
  industry: '',
  projectTitle: '',
  mission: '',
  vision: '',
  companyName: '',
  companyAddress: '',
  email: '',
  city: '',
  phone: '',
  country: '',
  website: '',
  ceoName: '',
  legalInformation: '',
  businessType: '',
  problemSolving: '',
  solutionDescription: '',
  isOperating: '',
  revenue: '',
  cashBalance: '',
  netProfit: '',
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
  objective: '',
  strategicSteps: ['', '', ''],
  competitiveAdvantage: '',
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
  customerDetails: {
    education: '',
    income: '',
    familySize: '',
    language: '',
    activities: '',
    maritalStatus: '',
    gender: '',
    location: '',
    occupation: '',
    age: '',
    population: '',
    other: '',
  },
  ownerContributions: '',
  ownerWithdrawals: '',
  loanDetails: '',
  interestType: '',
  expectedFundMonth: '',
  expectedFundYear: '',
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
  assets: [{ name: '', cost: '' }],
};

const PlanDocument: React.FC = () => {
  const [data, setData] = useState<BusinessPlanData>(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const formData = await getFormData();
        setData(formData);
      } catch (error) {
        console.error('Error loading form data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-5">
      <Container maxWidth="md">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <CoverPage data={data} />
          <TableOfContents />
          <ExecutiveSummary data={data} />
          <CompanyOverview data={data} />
          <ProductOverview data={data} />
          <MarketingPlan data={data} />
          <TargetCustomers data={data} />
          <OperationalPlan data={data} />
          <SalesForecast data={data} />
          <FinancialOverview data={data} />
          <BalanceSheet data={data} />
          <CashFlow data={data} />
        </div>
      </Container>
    </div>
  );
};

export default PlanDocument;
