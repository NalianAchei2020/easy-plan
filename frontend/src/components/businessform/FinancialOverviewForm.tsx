import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

interface FinancialOverviewFormProps {
  data: {
    companyBalance?: string;
    billPaymentDays?: string;
    customerCreditDays?: string;
    creditCustomerPercentage?: string;
    yearlyExpenses?: string;
    supplierCreditDays?: {
      yearOne?: string;
      yearTwo?: string;
      yearThree?: string;
    };
  };
  onUpdate: (data: Partial<any>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const FinancialOverviewForm: React.FC<FinancialOverviewFormProps> = ({
  data,
  onUpdate,
  onNext,
  onPrev,
}) => {
  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onUpdate({ [field]: event.target.value });
    };

  const handleSupplierCreditChange =
    (year: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onUpdate({
        supplierCreditDays: {
          ...data.supplierCreditDays,
          [year]: event.target.value,
        },
      });
    };

  return (
    <Box sx={{ maxWidth: '100%', width: '100%' }}>
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          fontWeight: 600,
          borderBottom: '1px solid #e0e0e0',
          pb: 2,
        }}
      >
        Financial Overview
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Company Balance */}
        <TextField
          fullWidth
          label="Company cash balance on the day you start the business"
          variant="outlined"
          value={data.companyBalance || ''}
          onChange={handleChange('companyBalance')}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />

        {/* Bill Payment Days */}
        <TextField
          fullWidth
          label="How many days do you wait to pay bills (account payable)"
          variant="outlined"
          value={data.billPaymentDays || ''}
          onChange={handleChange('billPaymentDays')}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />

        {/* Customer Credit Days */}
        <TextField
          fullWidth
          label="Days credit given to customers (account receivable)"
          variant="outlined"
          value={data.customerCreditDays || ''}
          onChange={handleChange('customerCreditDays')}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />

        {/* Credit Customer Percentage */}
        <TextField
          fullWidth
          label="Percentage of customers you extend credit to %"
          variant="outlined"
          value={data.creditCustomerPercentage || ''}
          onChange={handleChange('creditCustomerPercentage')}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />

        {/* Yearly Expenses */}
        <TextField
          fullWidth
          label="Total amount spend on expenses in each year"
          variant="outlined"
          value={data.yearlyExpenses || ''}
          onChange={handleChange('yearlyExpenses')}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />

        {/* Supplier Credit Days */}
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          Days credit given by supplier
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Year One"
              variant="outlined"
              value={data.supplierCreditDays?.yearOne || ''}
              onChange={handleSupplierCreditChange('yearOne')}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Year Two"
              variant="outlined"
              value={data.supplierCreditDays?.yearTwo || ''}
              onChange={handleSupplierCreditChange('yearTwo')}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Year Three"
              variant="outlined"
              value={data.supplierCreditDays?.yearThree || ''}
              onChange={handleSupplierCreditChange('yearThree')}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
            />
          </Grid>
        </Grid>

        {/* Next Button & previous button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="contained"
            onClick={onPrev}
            sx={{
              bgcolor: '#1976d2',
              color: 'white',
              px: 4,
              '&:hover': {
                bgcolor: '#1565c0',
              },
            }}
          >
            PREV
          </Button>
          <Button
            variant="contained"
            onClick={onNext}
            sx={{
              bgcolor: '#1976d2',
              color: 'white',
              px: 4,
              '&:hover': {
                bgcolor: '#1565c0',
              },
            }}
          >
            NEXT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FinancialOverviewForm;
