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

             Rewrite the above text in different way but maintain the text lenght and number of paragraph. 
             Calculate the  net profit by year three and be concise and avoid any additiona
             instructions or explainations
             `;

  return prompt;
};

export const missionPrompt = (mission: string) => {
  const prompt = `${mission}. Rewrite this mission in a different way within within 3-4 lines.
   Be concise and avoid any additional instructions or explanations
  . `;
  return prompt;
};

export const vissionPrompt = (vision: string) => {
  const prompt = `${vision}. Rewrite this vision in a different way within 3 -4 lines. 
   Be concise and avoid any additional instructions or explanations`;
  return prompt;
};

export const promblemPrompt = async (problem: any) => {
  const prompt = `${problem}. Rewrite this  in a different way within 3 - 4 lines. 
   Be concise and avoid any additional instructions or explanations`;
  return prompt;
};
export const solutionPrompt = async (solution: any) => {
  const prompt = `${solution}. Rewrite this  in a different way within 3 - 4  lines. 
   Be concise and avoid any additional instructions or explanations`;
  return prompt;
};

export const companyInfoPrompt = async (
  companyName: string,
  ceoName: string,
  companyType: string,
  legalInformation: any,
  city: string
) => {
  const prompt = `${companyName} is a business that operates as ${companyType} company and it is legally a
                      ${legalInformation} form of business. This is an appropriate legal
                      structure for this type of business and will fit well with
                      its objectives. The business is owned by ${ceoName}, who
                      has experince in this industry. The ceo with his
                      management team will review this structure as the business
                      develops.
                       ${companyName} is well placed to offer their services in
                      ${city}. The management have the experince and competencies
                      to deliver the target they have set themselves.
                      Rewrite within 5 lines in simple good english. Be concise and avoid any additional
                      instructions or explanations. Do not keep some important like ${companyName},
                       ${companyType} , ${legalInformation},${ceoName}, ${city}informatio out`;
  return prompt;
};

export const objectivePrompts = (objective: string) => {
  const prompt = `${objective}. Rewrite this objective in a different way within 3 - 4 lines.
   Be concise and avoid any additional instructions or explanations`;
  return prompt;
};
export const competitiveAdvantagePrompts = (competitiveAdvantage: string) => {
  const prompt = `${competitiveAdvantage}. Rewrite this competitive Advantage in a different way within 3 - 4 lines.
   Be concise and avoid any additional instructions or explanations`;
  return prompt;
};
