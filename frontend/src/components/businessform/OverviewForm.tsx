import React from 'react';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  MenuItem,
  Button,
  Typography,
  Grid,
  Box,
} from '@mui/material';

interface OverviewFormProps {
  data: {
    companyType: string;
    startMonth: string;
    startYear: string;
    industry: string;
    projectTitle: string;
  };
  onUpdate: (data: Partial<OverviewFormProps['data']>) => void;
  onNext: () => void;
}

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

const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i);

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Retail',
  'Manufacturing',
  'Services',
  'Other',
];

const OverviewForm: React.FC<OverviewFormProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Overview
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Company Type */}
          <FormControl>
            <FormLabel>Is this a startup or an existing company?</FormLabel>
            <RadioGroup
              row
              value={data.companyType}
              onChange={(e) => onUpdate({ companyType: e.target.value })}
            >
              <FormControlLabel
                value="startup"
                control={<Radio />}
                label="Startup"
              />
              <FormControlLabel
                value="existing"
                control={<Radio />}
                label="Existing"
              />
            </RadioGroup>
          </FormControl>

          {/* Start Date */}
          <FormControl>
            <FormLabel sx={{ mb: 1 }}>
              Starting month and year of business
            </FormLabel>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  select
                  fullWidth
                  value={data.startMonth}
                  onChange={(e) => onUpdate({ startMonth: e.target.value })}
                  label="Month"
                >
                  {months.map((month) => (
                    <MenuItem key={month} value={month.toLowerCase()}>
                      {month}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  fullWidth
                  value={data.startYear}
                  onChange={(e) => onUpdate({ startYear: e.target.value })}
                  label="Year"
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year.toString()}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </FormControl>

          {/* Industry */}
          <FormControl>
            <FormLabel sx={{ mb: 1 }}>
              In what industry do you operate?
            </FormLabel>
            <TextField
              select
              fullWidth
              value={data.industry}
              onChange={(e) => onUpdate({ industry: e.target.value })}
              label="Select Industry"
            >
              {industries.map((industry) => (
                <MenuItem key={industry} value={industry.toLowerCase()}>
                  {industry}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          {/* Project Title */}
          <FormControl>
            <FormLabel sx={{ mb: 1 }}>Project Title</FormLabel>
            <TextField
              fullWidth
              value={data.projectTitle}
              onChange={(e) => onUpdate({ projectTitle: e.target.value })}
              placeholder="Enter your project title"
              label="Project Title"
            />
          </FormControl>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="submit" variant="contained" color="primary" size="large">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default OverviewForm;
