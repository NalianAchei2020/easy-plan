import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Container,
} from '@mui/material';

interface CoverPageFormProps {
  data: {
    companyName: string;
    companyAddress: string;
    email: string;
    city: string;
    phone: string;
    country: string;
    website: string;
    ceoName: string;
  };
  onUpdate: (data: Partial<CoverPageFormProps['data']>) => void;
  onNext: () => void;
}

const CoverPageForm: React.FC<CoverPageFormProps> = ({
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
            Cover Page Information
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Please enter the information that you'd like to include on your
            cover page.
          </Typography>

          <Grid container spacing={3}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Company's name"
                  value={data.companyName}
                  onChange={(e) => onUpdate({ companyName: e.target.value })}
                  placeholder="Enter your company name"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={data.email}
                  onChange={(e) => onUpdate({ email: e.target.value })}
                  placeholder="Enter email"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => onUpdate({ phone: e.target.value })}
                  placeholder="Enter phone"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Website"
                  type="url"
                  value={data.website}
                  onChange={(e) => onUpdate({ website: e.target.value })}
                  placeholder="Enter website"
                  variant="outlined"
                />
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Company's address"
                  value={data.companyAddress}
                  onChange={(e) => onUpdate({ companyAddress: e.target.value })}
                  placeholder="Enter your company address"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="City"
                  value={data.city}
                  onChange={(e) => onUpdate({ city: e.target.value })}
                  placeholder="City"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Country"
                  value={data.country}
                  onChange={(e) => onUpdate({ country: e.target.value })}
                  placeholder="Country"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="CEO Name"
                  value={data.ceoName}
                  onChange={(e) => onUpdate({ ceoName: e.target.value })}
                  placeholder="Principal Name"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
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

export default CoverPageForm;
