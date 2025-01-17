import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

interface CompanyInfoFormProps {
  data: {
    legalInformation: string;
    businessType: string;
    problemSolving: string;
    solutionDescription: string;
    isOperating: string;
    revenue: string;
    cashBalance: string;
    netProfit: string;
  };
  onUpdate: (data: Partial<CompanyInfoFormProps['data']>) => void;
  onNext: () => void;
}

const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Company Overview
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            The Company Overview section offers a concise overview of your
            company's purpose since its establishment
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Legal Information */}
            <FormControl fullWidth>
              <InputLabel>Legal Information</InputLabel>
              <Select
                value={data.legalInformation}
                label="Legal Information"
                onChange={(e) => onUpdate({ legalInformation: e.target.value })}
              >
                <MenuItem value="sole-proprietorship">
                  Sole Proprietorship
                </MenuItem>
                <MenuItem value="llc">Limited Liability Company (LLC)</MenuItem>
                <MenuItem value="corporation">Corporation</MenuItem>
                <MenuItem value="partnership">Partnership</MenuItem>
              </Select>
            </FormControl>

            {/* Business Type */}
            <FormControl fullWidth>
              <InputLabel>
                Does business provide a service, manufacture products or both?
              </InputLabel>
              <Select
                value={data.businessType}
                label="Does business provide a service, manufacture products or both?"
                onChange={(e) => onUpdate({ businessType: e.target.value })}
              >
                <MenuItem value="service">Service</MenuItem>
                <MenuItem value="products">Products</MenuItem>
                <MenuItem value="both">Both</MenuItem>
              </Select>
            </FormControl>

            {/* Problem Description */}
            <TextField
              fullWidth
              multiline
              rows={4}
              label="What problem is your business solving?"
              value={data.problemSolving}
              onChange={(e) => onUpdate({ problemSolving: e.target.value })}
              placeholder="Describe the problem your business addresses"
            />

            {/* Solution Description */}
            <TextField
              fullWidth
              multiline
              rows={4}
              label="How does it solve the problem?"
              value={data.solutionDescription}
              onChange={(e) =>
                onUpdate({ solutionDescription: e.target.value })
              }
              placeholder="Explain how your business solves the problem"
            />

            {/* Business Operation Status */}
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Is your business already in operation?
              </FormLabel>
              <RadioGroup
                row
                value={data.isOperating}
                onChange={(e) => onUpdate({ isOperating: e.target.value })}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            {/* Business Performance Section */}
            {data.isOperating === 'yes' && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Business past performance
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Revenue"
                    value={data.revenue}
                    onChange={(e) => onUpdate({ revenue: e.target.value })}
                    type="number"
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Cash balance"
                    value={data.cashBalance}
                    onChange={(e) => onUpdate({ cashBalance: e.target.value })}
                    type="number"
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Net profit"
                    value={data.netProfit}
                    onChange={(e) => onUpdate({ netProfit: e.target.value })}
                    type="number"
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Next
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CompanyInfoForm;
