import React, { useEffect, useState } from 'react';
import { BusinessPlanData } from './types';
import { AIchatSessionForSummary } from '../AIPrompts/summary';
import {
  companyInfoPrompt,
  promblemPrompt,
  solutionPrompt,
} from '../AIPrompts/prompts';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  ThemeProvider,
  createTheme,
  Skeleton,
  Avatar,
  Divider,
  alpha,
} from '@mui/material';
import { Building2, AlertTriangle, Lightbulb } from 'lucide-react';

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

const CompanyOverview: React.FC<Props> = ({ data }) => {
  const [companyInfo, setCompanyInfo] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [loading, setLoading] = useState(true);

  const generateCompanyInfo = async () => {
    try {
      const prompt = await companyInfoPrompt(
        data.companyName,
        data.ceoName,
        data.companyType,
        data.legalInformation,
        data.city
      );

      const result = await AIchatSessionForSummary.sendMessage(prompt);
      const response = result.response.text();
      setCompanyInfo(response);
    } catch (error) {
      console.error('Error generating company info:', error);
    }
  };

  const generateProblem = async () => {
    try {
      const prompt = await promblemPrompt(data.problemSolving);
      const result = await AIchatSessionForSummary.sendMessage(prompt);
      const response = result.response.text();
      setProblem(response);
    } catch (error) {
      console.error('Error generating problem info:', error);
    }
  };

  const generateSolution = async () => {
    try {
      const prompt = await solutionPrompt(data.solutionDescription);
      const result = await AIchatSessionForSummary.sendMessage(prompt);
      const response = result.response.text();
      setSolution(response);
      setLoading(false);
    } catch (error) {
      console.error('Error generating solution info:', error);
    }
  };

  useEffect(() => {
    generateCompanyInfo();
    generateProblem();
    generateSolution();
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
                <Building2 size={32} color={theme.palette.primary.main} />
                <Typography variant="h1" sx={{ ml: 2 }}>
                  Company Overview
                </Typography>
              </Box>
              {loading ? (
                <Skeleton variant="text" height={100} />
              ) : (
                <Typography variant="body1">{companyInfo}</Typography>
              )}
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 6 }}>
              <Typography variant="h2">Key Problem & Solution</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper
                    sx={{
                      backgroundColor: alpha('#ef4444', 0.1),
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AlertTriangle size={24} color="#ef4444" />
                      <Typography variant="h3" sx={{ ml: 2, color: '#ef4444' }}>
                        Problem We're Solving
                      </Typography>
                    </Box>
                    {loading ? (
                      <Skeleton variant="text" height={80} />
                    ) : (
                      <Typography variant="body1">{problem}</Typography>
                    )}
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper
                    sx={{
                      backgroundColor: alpha('#22c55e', 0.1),
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Lightbulb size={24} color="#22c55e" />
                      <Typography variant="h3" sx={{ ml: 2, color: '#22c55e' }}>
                        Our Solution
                      </Typography>
                    </Box>
                    {loading ? (
                      <Skeleton variant="text" height={80} />
                    ) : (
                      <Typography variant="body1">{solution}</Typography>
                    )}
                  </Paper>
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box>
              <Typography variant="h2">Company Leadership</Typography>
              <Paper
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  maxWidth: 400,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: theme.palette.primary.main,
                    fontSize: '2rem',
                  }}
                >
                  {data.ceoName.charAt(0)}
                </Avatar>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ color: theme.palette.primary.main, mb: 0.5 }}
                  >
                    {data.ceoName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: 'text.secondary' }}
                  >
                    Chief Executive Officer
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CompanyOverview;
