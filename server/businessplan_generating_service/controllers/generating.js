import { HfInference } from '@huggingface/inference';
import config from '../config.js';

export const generateBusinessPlan = async (req, res) => {
  const { formData } = req.body;

  const prompt = `
  Write a detailed business plan for a restaurant business. 
  Here are the details:
  
  **Overview:**
  - Company Type: ${formData.companyType}
  - Start Month: ${formData.startMonth}
  - Start Year: ${formData.startYear}
  - Industry: ${formData.industry}
  - Project Title: ${formData.projectTitle}

  **Cover Page:**
  - Company Name: ${formData.companyName}
  - Company Address: ${formData.companyAddress}
  - Email: ${formData.email}
  - City: ${formData.city}
  - Phone: ${formData.phone}
  - Country: ${formData.country}
  - Website: ${formData.website}
  - CEO Name: ${formData.ceoName}

  **Company Information:**
  - Legal Information: ${formData.legalInformation}
  - Business Type: ${formData.businessType}
  - Problem Solving: ${formData.problemSolving}
  - Solution Description: ${formData.solutionDescription}
  - Is Operating: ${formData.isOperating}
  - Revenue: ${formData.revenue}
  - Cash Balance: ${formData.cashBalance}
  - Net Profit: ${formData.netProfit}

  **Products/Services:**
  - List of Products: 
    ${formData.products
      .map(
        (product) => `
      Name: ${product.name}
      Currency: ${product.currency}
      Cost of Goods:
        - Year 1: ${product.costOfGoods.yearOne}
        - Year 2: ${product.costOfGoods.yearTwo}
        - Year 3: ${product.costOfGoods.yearThree}
      Revenue Expected:
        - Year 1: ${product.revenueExpected.yearOne}
        - Year 2: ${product.revenueExpected.yearTwo}
        - Year 3: ${product.revenueExpected.yearThree}
    `
      )
      .join('\n')}
  
  **Marketing Strategy:**
  - Objective: ${formData.objective}
  - Strategic Steps: ${formData.strategicSteps.join(', ')}
  - Competitive Advantage: ${formData.competitiveAdvantage}

  **Target Customers:**
  - Target Customer Details:
    - Education: ${formData.targetCustomers.education}
    - Income: ${formData.targetCustomers.income}
    - Family Size: ${formData.targetCustomers.familySize}
    - Language: ${formData.targetCustomers.language}
    - Activities: ${formData.targetCustomers.activities}
    - Marital Status: ${formData.targetCustomers.maritalStatus}
    - Gender: ${formData.targetCustomers.gender}
    - Location: ${formData.targetCustomers.location}
    - Occupation: ${formData.targetCustomers.occupation}
    - Age: ${formData.targetCustomers.age}
    - Population: ${formData.targetCustomers.population}
    - Other: ${formData.targetCustomers.other}

  **Customer Details:**
  - Education: ${formData.customerDetails.education}
  - Income: ${formData.customerDetails.income}
  - Family Size: ${formData.customerDetails.familySize}
  - Language: ${formData.customerDetails.language}
  - Activities: ${formData.customerDetails.activities}
  - Marital Status: ${formData.customerDetails.maritalStatus}
  - Gender: ${formData.customerDetails.gender}
  - Location: ${formData.customerDetails.location}
  - Occupation: ${formData.customerDetails.occupation}
  - Age: ${formData.customerDetails.age}
  - Population: ${formData.customerDetails.population}
  - Other: ${formData.customerDetails.other}

  **Contributions & Loans:**
  - Owner Contributions: ${formData.ownerContributions}
  - Owner Withdrawals: ${formData.ownerWithdrawals}
  - Loan Details: ${formData.loanDetails}
  - Interest Type: ${formData.interestType}
  - Expected Fund Month: ${formData.expectedFundMonth}
  - Expected Fund Year: ${formData.expectedFundYear}

  **Financial Overview:**
  - Company Balance: ${formData.companyBalance}
  - Bill Payment Days: ${formData.billPaymentDays}
  - Customer Credit Days: ${formData.customerCreditDays}
  - Credit Customer Percentage: ${formData.creditCustomerPercentage}
  - Yearly Expenses: ${formData.yearlyExpenses}
  - Supplier Credit Days:
    - Year 1: ${formData.supplierCreditDays.yearOne}
    - Year 2: ${formData.supplierCreditDays.yearTwo}
    - Year 3: ${formData.supplierCreditDays.yearThree}

  **Assets:**
  - List of Assets:
    ${formData.assets
      .map(
        (asset) => `
      Name: ${asset.name}
      Cost: ${asset.cost}
    `
      )
      .join('\n')}
  `;
  try {
    const client = new HfInference(config.HUGGINGFACE_API_KEY);

    let out = '';

    const stream = client.chatCompletionStream({
      model: 'google/gemma-2-2b-it',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 5000,
    });

    // Collect all chunks of output
    for await (const chunk of stream) {
      if (chunk.choices && chunk.choices.length > 0) {
        const newContent = chunk.choices[0].delta.content;
        out += newContent;
      }
    }

    // Send the complete output after the stream is finished
    res.send(out);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to get response from Hugging Face API',
      details: error.message,
    });
    console.log({
      success: false,
      error: 'Failed to get response from Hugging Face API',
      details: error.message,
    });
  }
};
