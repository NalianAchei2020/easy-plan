import React from 'react';
import { BusinessPlanData } from './types';
import { Scale } from 'lucide-react';
import {
  Box,
  Container,
  Typography,
  Paper,
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

const BalanceSheet: React.FC<Props> = ({ data }) => {
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
                <Scale size={32} color={theme.palette.primary.main} />
                <Typography variant="h1" sx={{ ml: 2 }}>
                  Balance Sheet
                </Typography>
              </Box>
            </Box>

            <Card>
              <CardContent>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Assets */}
                      <TableRow>
                        <TableCell
                          colSpan={2}
                          sx={{
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.05
                            ),
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                          }}
                        >
                          Assets
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cash Balance</TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: theme.palette.success.main }}
                        >
                          {data.cashBalance}
                        </TableCell>
                      </TableRow>
                      {data.assets.map((asset, index) => (
                        <TableRow key={index}>
                          <TableCell>{asset.name}</TableCell>
                          <TableCell
                            align="right"
                            sx={{ color: theme.palette.success.main }}
                          >
                            ${parseInt(asset.cost).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow
                        sx={{
                          backgroundColor: alpha(
                            theme.palette.success.main,
                            0.05
                          ),
                        }}
                      >
                        <TableCell sx={{ fontWeight: 600 }}>
                          Total Assets
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color: theme.palette.success.main,
                            fontWeight: 600,
                          }}
                        >
                          $
                          {(
                            parseInt(data.cashBalance.replace(/[^0-9]/g, '')) +
                            data.assets.reduce(
                              (sum, asset) => sum + parseInt(asset.cost),
                              0
                            )
                          ).toLocaleString()}
                        </TableCell>
                      </TableRow>

                      {/* Liabilities */}
                      <TableRow>
                        <TableCell
                          colSpan={2}
                          sx={{
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.05
                            ),
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                          }}
                        >
                          Liabilities
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Expected Investment</TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: theme.palette.error.main }}
                        >
                          {data.loanDetails}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          backgroundColor: alpha(
                            theme.palette.error.main,
                            0.05
                          ),
                        }}
                      >
                        <TableCell sx={{ fontWeight: 600 }}>
                          Total Liabilities
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color: theme.palette.error.main,
                            fontWeight: 600,
                          }}
                        >
                          {data.loanDetails}
                        </TableCell>
                      </TableRow>

                      {/* Equity */}
                      <TableRow>
                        <TableCell
                          colSpan={2}
                          sx={{
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.05
                            ),
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                          }}
                        >
                          Equity
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Owner's Investment</TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: theme.palette.success.main }}
                        >
                          {data.ownerContributions}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Owner's Withdrawals</TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: theme.palette.error.main }}
                        >
                          ({data.ownerWithdrawals})
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          backgroundColor: alpha(
                            theme.palette.success.main,
                            0.05
                          ),
                        }}
                      >
                        <TableCell sx={{ fontWeight: 600 }}>
                          Total Equity
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color: theme.palette.success.main,
                            fontWeight: 600,
                          }}
                        >
                          $
                          {(
                            parseInt(
                              data.ownerContributions.replace(/[^0-9]/g, '')
                            ) -
                            parseInt(
                              data.ownerWithdrawals.replace(/[^0-9]/g, '')
                            )
                          ).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default BalanceSheet;
