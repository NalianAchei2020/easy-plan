import React from 'react';
import { Building2 } from 'lucide-react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  useTheme,
  alpha,
} from '@mui/material';
import { BusinessPlanData } from './types';

interface Props {
  data: BusinessPlanData;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#7c3aed',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
      color: 'white', // Set h1 color to white
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 700,
      letterSpacing: '-0.00833em',
      color: 'white', // Set h2 color to white
    },
    subtitle1: {
      color: 'white', // Set subtitle1 color to white
    },
    body1: {
      color: 'white', // Set body1 color to white
    },
    h6: {
      color: 'white', // Set h6 color to white
    },
  },
});

const CoverPage: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={24}
            sx={{
              background: 'transparent',
              backdropFilter: 'blur(10px)',
              backgroundColor: alpha('#ffffff', 0.1),
              borderRadius: 4,
              p: 6,
              border: '1px solid',
              borderColor: alpha('#ffffff', 0.2),
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Building2 size={80} style={{ marginBottom: '2rem' }} />

              <Typography
                variant="h1"
                sx={{ mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
              >
                {data.projectTitle}
              </Typography>

              <Divider
                sx={{
                  width: 100,
                  height: 3,
                  backgroundColor: 'white',
                  my: 4,
                }}
              />

              <Typography
                variant="h2"
                sx={{ mb: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
              >
                {data.companyName}
              </Typography>

              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                {data.companyAddress}
                <br />
                {data.city}, {data.country}
              </Typography>

              <Grid container spacing={4} sx={{ mb: 6 }}>
                {[
                  { label: 'Phone', value: data.phone },
                  { label: 'Email', value: data.email },
                  { label: 'Website', value: data.website },
                  { label: 'CEO', value: data.ceoName },
                ].map((item) => (
                  <Grid item xs={6} key={item.label}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: alpha('#ffffff', 0.1),
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        {item.label}
                      </Typography>
                      <Typography variant="body1">{item.value}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 0.8,
                  fontStyle: 'italic',
                }}
              >
                Prepared: {data.startMonth} {data.startYear}
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CoverPage;
