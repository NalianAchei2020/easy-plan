import React from 'react';
import { BusinessPlanData } from './types';
import { Clock, CreditCard, Wallet } from 'lucide-react';
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
  CircularProgress,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: alpha('#2563eb', 0.1),
    },
    secondary: {
      main: '#7c3aed',
      light: alpha('#7c3aed', 0.1),
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  },
});

interface Props {
  data: BusinessPlanData;
}

const OperationalPlan: React.FC<Props> = ({ data }) => {
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
                <Clock size={32} color={theme.palette.primary.main} />
                <Typography variant="h1" sx={{ ml: 2 }}>
                  Operational Plan
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
                <Clock size={24} color={theme.palette.primary.main} />
                <Typography
                  variant="h2"
                  sx={{ ml: 2, mb: 0, color: theme.palette.primary.main }}
                >
                  Payment Terms
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'inline-flex',
                          mb: 2,
                        }}
                      >
                        <CircularProgress
                          variant="determinate"
                          value={(data.billPaymentDays / 90) * 100}
                          size={60}
                          thickness={4}
                          sx={{ color: theme.palette.primary.main }}
                        />
                        <Box
                          sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ fontWeight: 600 }}
                          >
                            {data.billPaymentDays}d
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        gutterBottom
                      >
                        Bill Payment Terms
                      </Typography>
                      <Typography variant="h4" color="primary">
                        {data.billPaymentDays} Days
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'inline-flex',
                          mb: 2,
                        }}
                      >
                        <CircularProgress
                          variant="determinate"
                          value={(data.customerCreditDays / 90) * 100}
                          size={60}
                          thickness={4}
                          sx={{ color: theme.palette.secondary.main }}
                        />
                        <Box
                          sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ fontWeight: 600 }}
                          >
                            {data.customerCreditDays}d
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        gutterBottom
                      >
                        Customer Credit Terms
                      </Typography>
                      <Typography variant="h4" color="secondary">
                        {data.customerCreditDays} Days
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'inline-flex',
                          mb: 2,
                        }}
                      >
                        <CircularProgress
                          variant="determinate"
                          value={data.creditCustomerPercentage}
                          size={60}
                          thickness={4}
                          sx={{ color: theme.palette.success.main }}
                        />
                        <Box
                          sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ fontWeight: 600 }}
                          >
                            {data.creditCustomerPercentage}%
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        gutterBottom
                      >
                        Credit Customers
                      </Typography>
                      <Typography variant="h4" color="success.main">
                        {data.creditCustomerPercentage}%
                      </Typography>
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
                <CreditCard size={24} color={theme.palette.secondary.main} />
                <Typography
                  variant="h2"
                  sx={{ ml: 2, mb: 0, color: theme.palette.secondary.main }}
                >
                  Supplier Credit Terms
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {Object.entries(data.supplierCreditDays).map(
                  ([year, days], index) => (
                    <Grid item xs={12} md={4} key={year}>
                      <Card>
                        <CardContent>
                          <Box
                            sx={{
                              position: 'relative',
                              display: 'inline-flex',
                              mb: 2,
                            }}
                          >
                            <CircularProgress
                              variant="determinate"
                              value={(days / 90) * 100}
                              size={60}
                              thickness={4}
                              sx={{ color: theme.palette.secondary.main }}
                            />
                            <Box
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Typography
                                variant="caption"
                                sx={{ fontWeight: 600 }}
                              >
                                {days}d
                              </Typography>
                            </Box>
                          </Box>
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            gutterBottom
                          >
                            Year {index + 1}
                          </Typography>
                          <Typography variant="h4" color="secondary">
                            {days} Days
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  )
                )}
              </Grid>
            </Paper>

            <Paper
              elevation={2}
              sx={{
                backgroundColor: alpha(theme.palette.success.main, 0.05),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Wallet size={24} color={theme.palette.success.main} />
                <Typography
                  variant="h2"
                  sx={{ ml: 2, mb: 0, color: theme.palette.success.main }}
                >
                  Assets
                </Typography>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Asset</TableCell>
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
                        backgroundColor: alpha(theme.palette.success.main, 0.1),
                      }}
                    >
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.success.main,
                        }}
                      >
                        Total Assets
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.success.main,
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

export default OperationalPlan;
