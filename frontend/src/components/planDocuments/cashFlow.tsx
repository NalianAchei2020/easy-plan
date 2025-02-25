import React from 'react';
import { BusinessPlanData } from './types';
import { ArrowDownUp } from 'lucide-react';
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

const CashFlow: React.FC<Props> = ({ data }) => {
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
                <ArrowDownUp size={32} color={theme.palette.primary.main} />
                <Typography variant="h1" sx={{ ml: 2 }}>
                  Cash Flow Statement
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
                        <TableCell align="right">Year 1</TableCell>
                        <TableCell align="right">Year 2</TableCell>
                        <TableCell align="right">Year 3</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Operating Activities */}
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          sx={{
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.05
                            ),
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                          }}
                        >
                          Operating Activities
                        </TableCell>
                      </TableRow>
                      {data.products.map((product, index) => (
                        <React.Fragment key={index}>
                          <TableRow>
                            <TableCell>Revenue from {product.name}</TableCell>
                            <TableCell
                              align="right"
                              sx={{ color: theme.palette.success.main }}
                            >
                              $
                              {parseInt(
                                product.revenueExpected.yearOne
                              ).toLocaleString()}
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{ color: theme.palette.success.main }}
                            >
                              $
                              {parseInt(
                                product.revenueExpected.yearTwo
                              ).toLocaleString()}
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{ color: theme.palette.success.main }}
                            >
                              $
                              {parseInt(
                                product.revenueExpected.yearThree
                              ).toLocaleString()}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Cost of Goods</TableCell>
                            <TableCell
                              align="right"
                              sx={{ color: theme.palette.error.main }}
                            >
                              ($
                              {parseInt(
                                product.costOfGoods.yearOne
                              ).toLocaleString()}
                              )
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{ color: theme.palette.error.main }}
                            >
                              ($
                              {parseInt(
                                product.costOfGoods.yearTwo
                              ).toLocaleString()}
                              )
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{ color: theme.palette.error.main }}
                            >
                              ($
                              {parseInt(
                                product.costOfGoods.yearThree
                              ).toLocaleString()}
                              )
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                      <TableRow>
                        <TableCell>Operating Expenses</TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: theme.palette.error.main }}
                        >
                          ($
                          {parseInt(
                            data.yearlyExpenses.replace(/[^0-9]/g, '')
                          ).toLocaleString()}
                          )
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: theme.palette.error.main }}
                        >
                          ($
                          {(
                            parseInt(
                              data.yearlyExpenses.replace(/[^0-9]/g, '')
                            ) * 1.1
                          ).toLocaleString()}
                          )
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: theme.palette.error.main }}
                        >
                          ($
                          {(
                            parseInt(
                              data.yearlyExpenses.replace(/[^0-9]/g, '')
                            ) * 1.2
                          ).toLocaleString()}
                          )
                        </TableCell>
                      </TableRow>

                      {/* Investing Activities */}
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          sx={{
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.05
                            ),
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                          }}
                        >
                          Investing Activities
                        </TableCell>
                      </TableRow>
                      {data.assets.map((asset, index) => (
                        <TableRow key={index}>
                          <TableCell>Purchase of {asset.name}</TableCell>
                          <TableCell
                            align="right"
                            sx={{ color: theme.palette.error.main }}
                          >
                            (${parseInt(asset.cost).toLocaleString()})
                          </TableCell>
                          <TableCell align="right">-</TableCell>
                          <TableCell align="right">-</TableCell>
                        </TableRow>
                      ))}

                      {/* Financing Activities */}
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          sx={{
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.05
                            ),
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                          }}
                        >
                          Financing Activities
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
                        <TableCell align="right">-</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>External Funding</TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: theme.palette.success.main }}
                        >
                          {data.loanDetails}
                        </TableCell>
                        <TableCell align="right">-</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>

                      {/* Net Cash Flow */}
                      <TableRow
                        sx={{
                          backgroundColor: alpha(
                            theme.palette.success.main,
                            0.05
                          ),
                          '& td': {
                            fontWeight: 600,
                          },
                        }}
                      >
                        <TableCell>Net Cash Flow</TableCell>
                        <TableCell
                          align="right"
                          sx={{
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
              </CardContent>
            </Card>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CashFlow;
