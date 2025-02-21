export interface Product {
  name: string;
  currency: string;
  costOfGoods: {
    yearOne: string;
    yearTwo: string;
    yearThree: string;
  };
  revenueExpected: {
    yearOne: string;
    yearTwo: string;
    yearThree: string;
  };
}

export interface TargetCustomers {
  education: boolean;
  income: boolean;
  familySize: boolean;
  language: boolean;
  activities: boolean;
  maritalStatus: boolean;
  gender: boolean;
  location: boolean;
  occupation: boolean;
  age: boolean;
  population: boolean;
  other: boolean;
}

export interface CustomerDetails {
  education: string;
  income: string;
  familySize: string;
  language: string;
  activities: string;
  maritalStatus: string;
  gender: string;
  location: string;
  occupation: string;
  age: string;
  population: string;
  other: string;
}

export interface Asset {
  name: string;
  cost: string;
}

export interface BusinessPlanData {
  companyType: string;
  startMonth: string;
  startYear: string;
  industry: string;
  projectTitle: string;
  mission: string;
  vision: string;
  companyName: string;
  companyAddress: string;
  email: string;
  city: string;
  phone: string;
  country: string;
  website: string;
  ceoName: string;
  legalInformation: string;
  businessType: string;
  problemSolving: string;
  solutionDescription: string;
  isOperating: string;
  revenue: string;
  cashBalance: string;
  netProfit: string;
  products: Product[];
  objective: string;
  strategicSteps: string[];
  competitiveAdvantage: string;
  targetCustomers: TargetCustomers;
  customerDetails: CustomerDetails;
  ownerContributions: string;
  ownerWithdrawals: string;
  loanDetails: string;
  interestType: string;
  expectedFundMonth: string;
  expectedFundYear: string;
  companyBalance: string;
  billPaymentDays: string;
  customerCreditDays: string;
  creditCustomerPercentage: string;
  yearlyExpenses: string;
  supplierCreditDays: {
    yearOne: string;
    yearTwo: string;
    yearThree: string;
  };
  assets: Asset[];
}
