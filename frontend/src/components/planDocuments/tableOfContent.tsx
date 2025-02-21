import React from 'react';
import {
  List,
  FileText,
  Building2,
  Package,
  Target,
  Users,
  Cog,
  TrendingUp,
  DollarSign,
  BarChart4,
  LineChart,
} from 'lucide-react';
import { ThemeProvider, createTheme, alpha } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Paper,
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  useTheme,
} from '@mui/material';

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
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha('#2563eb', 0.08),
            borderRadius: '8px',
          },
          marginBottom: '8px',
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
  },
});

const TableOfContents: React.FC = () => {
  const sections = [
    { title: 'Executive Summary', page: 2, icon: FileText },
    { title: 'Company Overview', page: 3, icon: Building2 },
    { title: 'Product Overview', page: 4, icon: Package },
    { title: 'Marketing Plan', page: 5, icon: Target },
    { title: 'Target Customers', page: 6, icon: Users },
    { title: 'Operational Plan', page: 7, icon: Cog },
    { title: 'Sales Forecast', page: 8, icon: TrendingUp },
    { title: 'Financial Overview', page: 9, icon: DollarSign },
    { title: 'Balance Sheet', page: 10, icon: BarChart4 },
    { title: 'Cash Flow Statement', page: 11, icon: LineChart },
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
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'white',
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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 4,
              }}
            >
              <List size={32} style={{ color: theme.palette.primary.main }} />
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                }}
              >
                Table of Contents
              </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <MuiList sx={{ width: '100%' }}>
              {sections.map((section, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    sx={{
                      px: 3,
                      py: 2,
                      cursor: 'pointer',
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: theme.palette.primary.main,
                        minWidth: '40px',
                      }}
                    >
                      <section.icon size={24} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            color: 'text.primary',
                          }}
                        >
                          {section.title}
                        </Typography>
                      }
                    />
                    <ListItemSecondaryAction>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 500,
                        }}
                      >
                        Page {section.page}
                      </Typography>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {index < sections.length - 1 && (
                    <Divider
                      variant="fullWidth"
                      sx={{
                        opacity: 0.5,
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </MuiList>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default TableOfContents;
