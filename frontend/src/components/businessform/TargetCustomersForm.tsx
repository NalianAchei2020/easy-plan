import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Collapse,
} from '@mui/material';
import { HelpCircle } from 'lucide-react';

interface TargetCustomersFormProps {
  data: {
    targetCustomers: {
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
    };
    maritalStatusDetails: string;
  };
  onUpdate: (data: Partial<TargetCustomersFormProps['data']>) => void;
  onNext: () => void;
}

const TargetCustomersForm: React.FC<TargetCustomersFormProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleCheckboxChange = (field: keyof typeof data.targetCustomers) => {
    onUpdate({
      targetCustomers: {
        ...data.targetCustomers,
        [field]: !data.targetCustomers?.[field],
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Target Customers
        </Typography>

        <Box sx={{ mb: 4 }}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend" sx={{ mb: 2 }}>
              Who are your target customers?
            </FormLabel>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Check the box that represents the category of your target
              customers and briefly explain their characteristics.
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
              }}
            >
              <FormGroup>
                {[
                  { label: 'Education', value: 'education' },
                  { label: 'Income', value: 'income' },
                  { label: 'Family Size', value: 'familySize' },
                  { label: 'Language', value: 'language' },
                  { label: 'Activities', value: 'activities' },
                  { label: 'Marital Status', value: 'maritalStatus' },
                ].map((item) => (
                  <FormControlLabel
                    key={item.value}
                    control={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                          checked={
                            data.targetCustomers?.[
                              item.value as keyof typeof data.targetCustomers
                            ] || false
                          }
                          onChange={() =>
                            handleCheckboxChange(
                              item.value as keyof typeof data.targetCustomers
                            )
                          }
                        />
                        <HelpCircle
                          size={16}
                          style={{ marginLeft: 4, color: '#666' }}
                        />
                      </Box>
                    }
                    label={item.label}
                  />
                ))}
              </FormGroup>

              <FormGroup>
                {[
                  { label: 'Gender', value: 'gender' },
                  { label: 'Location', value: 'location' },
                  { label: 'Occupation', value: 'occupation' },
                  { label: 'Age', value: 'age' },
                  { label: 'Population', value: 'population' },
                  { label: 'Other', value: 'other' },
                ].map((item) => (
                  <FormControlLabel
                    key={item.value}
                    control={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                          checked={
                            data.targetCustomers?.[
                              item.value as keyof typeof data.targetCustomers
                            ] || false
                          }
                          onChange={() =>
                            handleCheckboxChange(
                              item.value as keyof typeof data.targetCustomers
                            )
                          }
                        />
                        <HelpCircle
                          size={16}
                          style={{ marginLeft: 4, color: '#666' }}
                        />
                      </Box>
                    }
                    label={item.label}
                  />
                ))}
              </FormGroup>
            </Box>

            <Collapse in={data.targetCustomers?.maritalStatus}>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Marital Status Details"
                  value={data.maritalStatusDetails || ''}
                  onChange={(e) =>
                    onUpdate({ maritalStatusDetails: e.target.value })
                  }
                  placeholder="Enter marital status details"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                    },
                  }}
                />
              </Box>
            </Collapse>
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

export default TargetCustomersForm;
