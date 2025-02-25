import React, { useEffect, useState } from 'react';
import { BusinessPlanData } from './types';
import { Target, TrendingUp, Shield } from 'lucide-react';
import { AIchatSessionForSummary } from '../AIPrompts/summary';
import {
  competitiveAdvantagePrompts,
  objectivePrompts,
} from '../AIPrompts/prompts';
import {
  Box,
  Container,
  Typography,
  Paper,
  ThemeProvider,
  createTheme,
  alpha,
  Fade,
  CircularProgress,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: alpha('#2563eb', 0.1),
    },
    secondary: {
      main: '#7c3aed',
    },
    success: {
      main: '#22c55e',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#2563eb',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#374151',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: 24,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: '1rem',
          fontWeight: 500,
        },
      },
    },
  },
});

interface Props {
  data: BusinessPlanData;
}

const MarketingPlan: React.FC<Props> = ({ data }) => {
  const [objective, setObjective] = useState('');
  const [comAdvantage, setComAdvantage] = useState('');
  const [loading, setLoading] = useState(true);

  const generateObjective = async () => {
    try {
      const prompt = objectivePrompts(data.objective);
      const result = await AIchatSessionForSummary.sendMessage(prompt);
      const response = await result.response.text();
      setObjective(response);
    } catch (error) {
      console.error('Sorry, something happened');
    }
  };

  const generatecompetitiveAd = async () => {
    try {
      const prompt = competitiveAdvantagePrompts(data.competitiveAdvantage);
      const result = await AIchatSessionForSummary.sendMessage(prompt);
      const response = await result.response.text();
      setComAdvantage(response);
      setLoading(false);
    } catch (error) {
      console.error('Sorry, something happened');
      setLoading(false);
    }
  };

  useEffect(() => {
    generateObjective();
    generatecompetitiveAd();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f8fafc',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Paper
            elevation={3}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              },
            }}
          >
            <Box sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Target size={32} color={theme.palette.primary.main} />
                <Typography variant="h1" sx={{ ml: 2 }}>
                  Marketing Plan
                </Typography>
              </Box>
            </Box>

            <Fade in={!loading}>
              <Box sx={{ display: loading ? 'none' : 'block' }}>
                <Paper
                  elevation={2}
                  sx={{
                    mb: 4,
                    backgroundColor: theme.palette.primary.light,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Target size={24} color={theme.palette.primary.main} />
                    <Typography
                      variant="h2"
                      sx={{ ml: 2, mb: 0, color: theme.palette.primary.main }}
                    >
                      Business Objective
                    </Typography>
                  </Box>
                  <Typography variant="body1">{objective}</Typography>
                </Paper>

                <Paper
                  elevation={2}
                  sx={{
                    mb: 4,
                    backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <TrendingUp
                      size={24}
                      color={theme.palette.secondary.main}
                    />
                    <Typography
                      variant="h2"
                      sx={{ ml: 2, mb: 0, color: theme.palette.secondary.main }}
                    >
                      Strategic Steps
                    </Typography>
                  </Box>
                  <Stepper orientation="vertical">
                    {data.strategicSteps.map((step, index) => (
                      <Step key={index} active={true}>
                        <StepLabel>
                          <Typography
                            variant="h6"
                            sx={{ color: theme.palette.secondary.main }}
                          >
                            Step {index + 1}
                          </Typography>
                        </StepLabel>
                        <StepContent>
                          <Typography variant="body1">{step}</Typography>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Paper>

                <Paper
                  elevation={2}
                  sx={{
                    backgroundColor: alpha(theme.palette.success.main, 0.05),
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Shield size={24} color={theme.palette.success.main} />
                    <Typography
                      variant="h2"
                      sx={{ ml: 2, mb: 0, color: theme.palette.success.main }}
                    >
                      Competitive Advantage
                    </Typography>
                  </Box>
                  <Typography variant="body1">{comAdvantage}</Typography>
                </Paper>
              </Box>
            </Fade>

            {loading && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '300px',
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default MarketingPlan;
