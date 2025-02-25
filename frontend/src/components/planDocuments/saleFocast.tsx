import React from 'react';
import { BusinessPlanData } from './types';
import { BarChart3 } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
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
    info: {
      main: '#0088FE',
      light: alpha('#0088FE', 0.1),
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

const SalesForecast: React.FC<Props> = ({ data }) => {
  const chartData = [
    {
      year: 'Year 1',
      revenue: data.products.reduce(
        (total, product) => total + parseInt(product.revenueExpected.yearOne),
        0
      ),
      profit: data.products.reduce(
        (total, product) =>
          total +
          (parseInt(product.revenueExpected.yearOne) -
            parseInt(product.costOfGoods.yearOne)),
        0
      ),
    },
    {
      year: 'Year 2',
      revenue: data.products.reduce(
        (total, product) => total + parseInt(product.revenueExpected.yearTwo),
        0
      ),
      profit: data.products.reduce(
        (total, product) =>
          total +
          (parseInt(product.revenueExpected.yearTwo) -
            parseInt(product.costOfGoods.yearTwo)),
        0
      ),
    },
    {
      year: 'Year 3',
      revenue: data.products.reduce(
        (total, product) => total + parseInt(product.revenueExpected.yearThree),
        0
      ),
      profit: data.products.reduce(
        (total, product) =>
          total +
          (parseInt(product.revenueExpected.yearThree) -
            parseInt(product.costOfGoods.yearThree)),
        0
      ),
    },
  ];

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
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.info.main})`,
              },
            }}
          >
            <Box sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <BarChart3 size={32} color={theme.palette.primary.main} />
                <Typography variant="h1" sx={{ ml: 2 }}>
                  Sales Forecast
                </Typography>
              </Box>
            </Box>

            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <BarChart3 size={24} color={theme.palette.info.main} />
                  <Typography
                    variant="h2"
                    sx={{ ml: 2, mb: 0, color: theme.palette.info.main }}
                  >
                    3-Year Sales Projection
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', height: 400 }}>
                  <ResponsiveContainer>
                    <BarChart data={chartData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={alpha('#000', 0.1)}
                      />
                      <XAxis dataKey="year" />
                      <YAxis
                        tickFormatter={(value) =>
                          `$${(value / 1000000).toFixed(1)}M`
                        }
                      />
                      <Tooltip
                        formatter={(value) =>
                          `$${parseInt(value as string).toLocaleString()}`
                        }
                      />
                      <Legend />
                      <Bar
                        dataKey="revenue"
                        name="Revenue"
                        fill={theme.palette.info.main}
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="profit"
                        name="Profit"
                        fill={theme.palette.success.main}
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Year 1</TableCell>
                        <TableCell align="right">Year 2</TableCell>
                        <TableCell align="right">Year 3</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.products.map((product, index) => (
                        <React.Fragment key={index}>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{
                                backgroundColor: alpha(
                                  theme.palette.primary.main,
                                  0.05
                                ),
                                fontWeight: 600,
                              }}
                              colSpan={4}
                            >
                              {product.name}
                            </TableCell>
                          </TableRow>
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
                          <TableRow
                            sx={{
                              backgroundColor: alpha(
                                theme.palette.success.main,
                                0.05
                              ),
                              '& td': {
                                color: theme.palette.success.main,
                                fontWeight: 600,
                              },
                            }}
                          >
                            <TableCell>Gross Profit</TableCell>
                            <TableCell align="right">
                              $
                              {(
                                parseInt(product.revenueExpected.yearOne) -
                                parseInt(product.costOfGoods.yearOne)
                              ).toLocaleString()}
                            </TableCell>
                            <TableCell align="right">
                              $
                              {(
                                parseInt(product.revenueExpected.yearTwo) -
                                parseInt(product.costOfGoods.yearTwo)
                              ).toLocaleString()}
                            </TableCell>
                            <TableCell align="right">
                              $
                              {(
                                parseInt(product.revenueExpected.yearThree) -
                                parseInt(product.costOfGoods.yearThree)
                              ).toLocaleString()}
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
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

export default SalesForecast;
