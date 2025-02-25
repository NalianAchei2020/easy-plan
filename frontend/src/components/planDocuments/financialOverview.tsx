import React from 'react';
import { BusinessPlanData } from './types';
import { DollarSign, PiggyBank, TrendingUp, Wallet } from 'lucide-react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  ThemeProvider,
  createTheme,
  alpha,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  LinearProgress,
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
      light: alpha('#22c55e', 0.1),
    },
    error: {
      main: '#ef4444',
      light: alpha('#ef4444', 0.1),
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
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          backgroundColor: alpha('#2563eb', 0.05),
        },
      },
    },
  },
});

interface Props {
  data: BusinessPlanData;
}

type YearKey = 'yearOne' | 'yearTwo' | 'yearThree';

const FinancialOverview: React.FC<Props> = ({ data }) => {
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
                <DollarSign size={32} color={theme.palette.primary.main} />
                <Typography variant="h1" sx={{ ml: 2 }}>
                  Financial Overview
                </Typography>
              </Box>
            </Box>

            <Paper
              elevation={2}
              sx={{
                mb: 4,
                backgroundColor: theme.palette.primary.light,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <DollarSign size={24} color={theme.palette.primary.main} />
                <Typography
                  variant="h2"
                  sx={{ ml: 2, mb: 0, color: theme.palette.primary.main }}
                >
                  Current Financial Position
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'translateY(-4px)' },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        gutterBottom
                      >
                        Company Balance
                      </Typography>
                      <Typography variant="h4" color="primary">
                        {data.companyBalance}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={70}
                        sx={{ mt: 2, height: 6, borderRadius: 3 }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'translateY(-4px)' },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        gutterBottom
                      >
                        Yearly Expenses
                      </Typography>
                      <Typography variant="h4" color="error">
                        {data.yearlyExpenses}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={45}
                        color="error"
                        sx={{ mt: 2, height: 6, borderRadius: 3 }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'translateY(-4px)' },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        gutterBottom
                      >
                        Current Revenue
                      </Typography>
                      <Typography variant="h4" color="success.main">
                        {data.revenue}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={85}
                        color="success"
                        sx={{ mt: 2, height: 6, borderRadius: 3 }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>

            <Paper
              elevation={2}
              sx={{
                mb: 4,
                backgroundColor: alpha(theme.palette.secondary.main, 0.05),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PiggyBank size={24} color={theme.palette.secondary.main} />
                <Typography
                  variant="h2"
                  sx={{ ml: 2, mb: 0, color: theme.palette.secondary.main }}
                >
                  Investment & Funding
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Owner's Investment
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 2,
                          }}
                        >
                          <Typography color="textSecondary">
                            Contributions:
                          </Typography>
                          <Typography variant="h6">
                            {data.ownerContributions}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography color="textSecondary">
                            Withdrawals:
                          </Typography>
                          <Typography variant="h6">
                            {data.ownerWithdrawals}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        External Funding
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 2,
                          }}
                        >
                          <Typography color="textSecondary">
                            Amount Needed:
                          </Typography>
                          <Typography variant="h6">
                            {data.loanDetails}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 2,
                          }}
                        >
                          <Typography color="textSecondary">Type:</Typography>
                          <Typography variant="h6">
                            {data.interestType}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography color="textSecondary">
                            Expected Date:
                          </Typography>
                          <Typography variant="h6">
                            {data.expectedFundMonth} {data.expectedFundYear}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>

            <Paper
              elevation={2}
              sx={{
                mb: 4,
                backgroundColor: alpha(theme.palette.success.main, 0.05),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <TrendingUp size={24} color={theme.palette.success.main} />
                <Typography
                  variant="h2"
                  sx={{ ml: 2, mb: 0, color: theme.palette.success.main }}
                >
                  Profit & Loss Forecast
                </Typography>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell align="right">Year 1</TableCell>
                      <TableCell align="right">Year 2</TableCell>
                      <TableCell align="right">Year 3</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.products.map((product, index) => (
                      <React.Fragment key={index}>
                        <TableRow>
                          <TableCell>Revenue</TableCell>
                          <TableCell align="right">
                            $
                            {parseInt(
                              product.revenueExpected.yearOne
                            ).toLocaleString()}
                          </TableCell>
                          <TableCell align="right">
                            $
                            {parseInt(
                              product.revenueExpected.yearTwo
                            ).toLocaleString()}
                          </TableCell>
                          <TableCell align="right">
                            $
                            {parseInt(
                              product.revenueExpected.yearThree
                            ).toLocaleString()}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Cost of Goods</TableCell>
                          <TableCell align="right">
                            $
                            {parseInt(
                              product.costOfGoods.yearOne
                            ).toLocaleString()}
                          </TableCell>
                          <TableCell align="right">
                            $
                            {parseInt(
                              product.costOfGoods.yearTwo
                            ).toLocaleString()}
                          </TableCell>
                          <TableCell align="right">
                            $
                            {parseInt(
                              product.costOfGoods.yearThree
                            ).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                    <TableRow
                      sx={{
                        backgroundColor: alpha(theme.palette.success.main, 0.1),
                      }}
                    >
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.success.main,
                        }}
                      >
                        Net Profit
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.success.main,
                        }}
                      >
                        $
                        {data.products
                          .reduce(
                            (sum, product) =>
                              sum +
                              (parseInt(product.revenueExpected.yearOne) -
                                parseInt(product.costOfGoods.yearOne)),
                            0
                          )
                          .toLocaleString()}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.success.main,
                        }}
                      >
                        $
                        {data.products
                          .reduce(
                            (sum, product) =>
                              sum +
                              (parseInt(product.revenueExpected.yearTwo) -
                                parseInt(product.costOfGoods.yearTwo)),
                            0
                          )
                          .toLocaleString()}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.success.main,
                        }}
                      >
                        $
                        {data.products
                          .reduce(
                            (sum, product) =>
                              sum +
                              (parseInt(product.revenueExpected.yearThree) -
                                parseInt(product.costOfGoods.yearThree)),
                            0
                          )
                          .toLocaleString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            <Paper
              elevation={2}
              sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Wallet size={24} color={theme.palette.primary.main} />
                <Typography
                  variant="h2"
                  sx={{ ml: 2, mb: 0, color: theme.palette.primary.main }}
                >
                  Assets Overview
                </Typography>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Asset Name</TableCell>
                      <TableCell align="right">Cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.assets.map((asset, index) => (
                      <TableRow key={index}>
                        <TableCell>{asset.name}</TableCell>
                        <TableCell align="right">
                          ${parseInt(asset.cost).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      }}
                    >
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Total Assets
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        $
                        {data.assets
                          .reduce((sum, asset) => sum + parseInt(asset.cost), 0)
                          .toLocaleString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default FinancialOverview;
