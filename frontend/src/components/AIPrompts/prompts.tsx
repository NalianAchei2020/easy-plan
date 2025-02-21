type SummaryPromptParams = {
  comName: string;
  productService: string;
  targetCustomers: string;
  city: string;
  objective: string;
  expectedRevenueYr1: number;
  expectedRevenueYr2: number;
  expectedRevenueYr3: number;
  currencySymbol: string;
  month: string;
  year: number;
};

export const summaryPrompt = ({
  comName,
  productService,
  targetCustomers,
  city,
  objective,
  expectedRevenueYr1,
  expectedRevenueYr2,
  expectedRevenueYr3,
  currencySymbol,
  month,
  year,
}: SummaryPromptParams): string => {
  const prompt = `${comName} offers ${productService} to ${targetCustomers} in ${city}. The business
             has a strong market position and a coherent strategy. It has established clear steps to
             achieve its objective of ${objective} in the next three years.
             
             ${comName} has set targets that they are committed to achieving in the next three years.
             The business sales forecast is ${expectedRevenueYr1}${currencySymbol} in the first year, ${expectedRevenueYr2}${currencySymbol} in the second year,
             and ${expectedRevenueYr3}${currencySymbol} in the third year. By the final year of this plan, the business will be
             achieving a net profit of ${currencySymbol}. This will represent a good return and provide sufficient
             retained for future development plans. The starting date of this business plan is ${month} ${year}.
             `;

  return prompt;
};
