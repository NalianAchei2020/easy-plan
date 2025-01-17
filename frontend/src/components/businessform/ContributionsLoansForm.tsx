import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

interface ContributionsLoansFormProps {
  data: {
    ownerContributions?: string;
    ownerWithdrawals?: string;
    loanDetails?: string;
    interestType?: string;
    expectedFundMonth?: string;
    expectedFundYear?: string;
  };
  onUpdate: (data: Partial<any>) => void;
  onNext: () => void;
}

const ContributionsLoansForm: React.FC<ContributionsLoansFormProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onUpdate({ [field]: event.target.value });
    };

  return (
    <Box sx={{ maxWidth: '100%', width: '100%' }}>
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 600 }}>
        CONTRIBUTIONS, LOANS AND DRAWS
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Owner Contributions */}
        <TextField
          fullWidth
          label="How much cash are the owners contributing each year?"
          variant="outlined"
          value={data.ownerContributions || ''}
          onChange={handleChange('ownerContributions')}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />

        {/* Owner Withdrawals */}
        <TextField
          fullWidth
          label="How much cash are the owner withdrawing each year?"
          variant="outlined"
          value={data.ownerWithdrawals || ''}
          onChange={handleChange('ownerWithdrawals')}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />

        {/* Loan Details */}
        <TextField
          fullWidth
          label="Loan Details"
          variant="outlined"
          value={data.loanDetails || ''}
          onChange={handleChange('loanDetails')}
          multiline
          rows={3}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />

        {/* Interest Type */}
        <TextField
          fullWidth
          label="Interest type"
          variant="outlined"
          value={data.interestType || ''}
          onChange={handleChange('interestType')}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />

        {/* Expected Fund Date */}
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          When are expecting to receive the fund?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <FormControl fullWidth>
            <InputLabel>Month</InputLabel>
            <Select
              value={data.expectedFundMonth || ''}
              label="Month"
              onChange={(e) => onUpdate({ expectedFundMonth: e.target.value })}
            >
              {months.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Year</InputLabel>
            <Select
              value={data.expectedFundYear || ''}
              label="Year"
              onChange={(e) => onUpdate({ expectedFundYear: e.target.value })}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Next Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button
            variant="contained"
            onClick={onNext}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              px: 4,
              '&:hover': {
                bgcolor: 'primary.dark',
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

export default ContributionsLoansForm;
