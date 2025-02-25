import React from 'react';
import { BusinessPlanData } from './types';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  ThemeProvider,
  createTheme,
  Divider,
  alpha,
  LinearProgress,
} from '@mui/material';
import { Package, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';

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
      light: alpha('#22c55e', 0.1),
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

type YearKey = 'yearOne' | 'yearTwo' | 'yearThree';

const ProductOverview: React.FC<Props> = ({ data }) => {
  const getYearKey = (year: number): YearKey => {
    const keys: YearKey[] = ['yearOne', 'yearTwo', 'yearThree'];
    return keys[year - 1];
  };

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
                <Package size={32} color={theme.palette.primary.main} />
                <Typography variant="h1" sx={{ ml: 2 }}>
                  Product Overview
                </Typography>
              </Box>
            </Box>

            {data.products.map((product, index) => (
              <Box key={index} sx={{ mb: 8 }}>
                <Paper
                  elevation={2}
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    mb: 4,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Package size={24} color={theme.palette.primary.main} />
                    <Typography
                      variant="h2"
                      sx={{ ml: 2, mb: 0, color: theme.palette.primary.main }}
                    >
                      {product.name}
                    </Typography>
                  </Box>
                </Paper>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Paper>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 3 }}
                      >
                        <DollarSign
                          size={24}
                          color={theme.palette.error.main}
                        />
                        <Typography
                          variant="h3"
                          color="error"
                          sx={{ ml: 2, mb: 0 }}
                        >
                          Cost of Goods
                        </Typography>
                      </Box>
                      {[1, 2, 3].map((year) => {
                        const yearKey = getYearKey(year);
                        return (
                          <Box key={year} sx={{ mb: 2 }}>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mb: 1,
                              }}
                            >
                              <Typography color="text.secondary">
                                Year {year}:
                              </Typography>
                              <Typography variant="h6">
                                $
                                {parseInt(
                                  product.costOfGoods[yearKey]
                                ).toLocaleString()}
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={(year / 3) * 100}
                              color="error"
                              sx={{ height: 6, borderRadius: 3 }}
                            />
                          </Box>
                        );
                      })}
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Paper>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 3 }}
                      >
                        <TrendingUp
                          size={24}
                          color={theme.palette.success.main}
                        />
                        <Typography
                          variant="h3"
                          color="success.main"
                          sx={{ ml: 2, mb: 0 }}
                        >
                          Expected Revenue
                        </Typography>
                      </Box>
                      {[1, 2, 3].map((year) => {
                        const yearKey = getYearKey(year);
                        return (
                          <Box key={year} sx={{ mb: 2 }}>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mb: 1,
                              }}
                            >
                              <Typography color="text.secondary">
                                Year {year}:
                              </Typography>
                              <Typography variant="h6" color="success.main">
                                $
                                {parseInt(
                                  product.revenueExpected[yearKey]
                                ).toLocaleString()}
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={(year / 3) * 100}
                              color="success"
                              sx={{ height: 6, borderRadius: 3 }}
                            />
                          </Box>
                        );
                      })}
                    </Paper>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4 }}>
                  <Paper>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <BarChart3 size={24} color={theme.palette.primary.main} />
                      <Typography variant="h3" sx={{ ml: 2, mb: 0 }}>
                        Profit Margins
                      </Typography>
                    </Box>
                    <Grid container spacing={3}>
                      {[1, 2, 3].map((year) => {
                        const yearKey = getYearKey(year);
                        const cost = parseInt(product.costOfGoods[yearKey]);
                        const revenue = parseInt(
                          product.revenueExpected[yearKey]
                        );
                        const margin = (
                          ((revenue - cost) / revenue) *
                          100
                        ).toFixed(1);
                        const progress = parseFloat(margin);

                        return (
                          <Grid item xs={12} md={4} key={year}>
                            <Paper
                              sx={{
                                backgroundColor: theme.palette.primary.light,
                                textAlign: 'center',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                  transform: 'translateY(-4px)',
                                },
                              }}
                            >
                              <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                gutterBottom
                              >
                                Year {year} Margin
                              </Typography>
                              <Typography
                                variant="h2"
                                sx={{
                                  color: theme.palette.primary.main,
                                  mb: 2,
                                }}
                              >
                                {margin}%
                              </Typography>
                              <LinearProgress
                                variant="determinate"
                                value={progress}
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  backgroundColor: alpha(
                                    theme.palette.primary.main,
                                    0.1
                                  ),
                                  '& .MuiLinearProgress-bar': {
                                    borderRadius: 4,
                                  },
                                }}
                              />
                            </Paper>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Paper>
                </Box>
              </Box>
            ))}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ProductOverview;
