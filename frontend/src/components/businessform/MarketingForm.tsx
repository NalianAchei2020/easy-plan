import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
} from '@mui/material';

interface MarketingFormProps {
  data: {
    objective: string;
    strategicSteps: string[];
    competitiveAdvantage: string;
  };
  onUpdate: (data: Partial<MarketingFormProps['data']>) => void;
  onNext: () => void;
}

const MarketingForm: React.FC<MarketingFormProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleStepChange = (index: number, value: string) => {
    const updatedSteps = [...(data.strategicSteps || ['', '', ''])];
    updatedSteps[index] = value;
    onUpdate({ strategicSteps: updatedSteps });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Marketing
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Company Objective */}
          <FormControl>
            <FormLabel sx={{ mb: 1 }}>
              What is the objective of your company
            </FormLabel>
            <TextField
              multiline
              rows={4}
              value={data.objective || ''}
              onChange={(e) => onUpdate({ objective: e.target.value })}
              placeholder="Enter your company's objective"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                },
              }}
            />
          </FormControl>

          {/* Strategic Steps */}
          <FormControl>
            <FormLabel sx={{ mb: 1 }}>
              Enter strategic steps to achieve business objective
            </FormLabel>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[0, 1, 2].map((index) => (
                <TextField
                  key={index}
                  value={data.strategicSteps?.[index] || ''}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                    },
                  }}
                />
              ))}
            </Box>
          </FormControl>

          {/* Competitive Advantage */}
          <FormControl>
            <FormLabel sx={{ mb: 1 }}>Competitive advantage</FormLabel>
            <TextField
              multiline
              rows={4}
              value={data.competitiveAdvantage || ''}
              onChange={(e) =>
                onUpdate({ competitiveAdvantage: e.target.value })
              }
              placeholder="Enter your competitive advantage"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                },
              }}
            />
          </FormControl>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            minWidth: { xs: '100%', sm: 'auto' },
          }}
        >
          Next
        </Button>
      </Box>
    </form>
  );
};

export default MarketingForm;
