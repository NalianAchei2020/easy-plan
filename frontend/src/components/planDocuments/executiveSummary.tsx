import React, { useEffect, useState } from 'react';
import { BusinessPlanData } from './types';
import {
  missionPrompt,
  summaryPrompt,
  vissionPrompt,
} from '../AIPrompts/prompts';
import { AIchatSessionForSummary } from '../AIPrompts/summary';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  ThemeProvider,
  createTheme,
  Skeleton,
  alpha,
} from '@mui/material';
import {
  Target,
  Lightbulb,
  DollarSign,
  Wallet,
  TrendingUp,
  PiggyBank,
} from 'lucide-react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: alpha('#2563eb', 0.1),
    },
    secondary: {
      main: '#7c3aed',
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
  },
});

interface Props {
  data: BusinessPlanData;
}

const ExecutiveSummary: React.FC<Props> = ({ data }) => {
  const [summary, setSummary] = useState('');
  const [mission, setMission] = useState('');
  const [vision, setVision] = useState('');
  const [loading, setLoading] = useState(true);

  const generateSummary = async () => {
    const promptParams = {
      comName: data.companyName,
      productService: data.products[0]?.name,
      targetCustomers: JSON.stringify(data.customerDetails),
      city: data.city,
      objective: data.objective,
      expectedRevenueYr1: parseFloat(data.products[0].revenueExpected.yearOne),
      expectedRevenueYr2: parseFloat(data.products[0].revenueExpected.yearTwo),
      expectedRevenueYr3: parseFloat(
        data.products[0].revenueExpected.yearThree
      ),
      currencySymbol: data.products[0].currency,
      month: data.startMonth,
      year: Number(data.startYear),
    };

    const prompt = summaryPrompt(promptParams);
    const result = await AIchatSessionForSummary.sendMessage(prompt);
    const response = result.response.text();
    setSummary(response);
  };

  const generateMission = async () => {
    const prompt = missionPrompt(data.mission);
    const result = await AIchatSessionForSummary.sendMessage(prompt);
    const response = result.response.text();
    setMission(response);
  };

  const generateVission = async () => {
    const prompt = vissionPrompt(data.vision);
    const result = await AIchatSessionForSummary.sendMessage(prompt);
    const response = result.response.text();
    setVision(response);
    setLoading(false);
  };

  useEffect(() => {
    generateSummary();
    generateMission();
    generateVission();
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
              <Typography variant="h1" gutterBottom>
                Executive Summary
              </Typography>
              {loading ? (
                <Skeleton variant="text" height={100} />
              ) : (
                <Typography variant="body1">{summary}</Typography>
              )}
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h2">Mission & Vision</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Target size={24} color={theme.palette.primary.main} />
                      <Typography
                        variant="h3"
                        sx={{ ml: 2, color: theme.palette.primary.main }}
                      >
                        Mission Statement
                      </Typography>
                    </Box>
                    {loading ? (
                      <Skeleton variant="text" height={80} />
                    ) : (
                      <Typography variant="body1">{mission}</Typography>
                    )}
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Lightbulb size={24} color={theme.palette.primary.main} />
                      <Typography
                        variant="h3"
                        sx={{ ml: 2, color: theme.palette.primary.main }}
                      >
                        Vision Statement
                      </Typography>
                    </Box>
                    {loading ? (
                      <Skeleton variant="text" height={80} />
                    ) : (
                      <Typography variant="body1">{vision}</Typography>
                    )}
                  </Paper>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Typography variant="h2">Financial Highlights</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper
                    sx={{
                      textAlign: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <DollarSign
                      size={32}
                      color={theme.palette.primary.main}
                      style={{ margin: '0 auto 16px' }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, color: 'text.secondary' }}
                    >
                      Current Revenue
                    </Typography>
                    <Typography variant="h4">{data.revenue}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper
                    sx={{
                      textAlign: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Wallet
                      size={32}
                      color={theme.palette.primary.main}
                      style={{ margin: '0 auto 16px' }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, color: 'text.secondary' }}
                    >
                      Cash Balance
                    </Typography>
                    <Typography variant="h4">{data.cashBalance}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper
                    sx={{
                      textAlign: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <TrendingUp
                      size={32}
                      color={theme.palette.primary.main}
                      style={{ margin: '0 auto 16px' }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, color: 'text.secondary' }}
                    >
                      Net Profit
                    </Typography>
                    <Typography variant="h4">{data.netProfit}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper
                    sx={{
                      textAlign: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <PiggyBank
                      size={32}
                      color={theme.palette.primary.main}
                      style={{ margin: '0 auto 16px' }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, color: 'text.secondary' }}
                    >
                      Funding Needed
                    </Typography>
                    <Typography variant="h4">{data.loanDetails}</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ExecutiveSummary;
