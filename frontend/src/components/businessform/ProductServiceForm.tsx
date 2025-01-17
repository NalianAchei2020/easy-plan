import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  FormLabel,
} from '@mui/material';
import { Plus } from 'lucide-react';

interface CostOfGoods {
  yearOne: string;
  yearTwo: string;
  yearThree: string;
}

interface RevenueExpected {
  yearOne: string;
  yearTwo: string;
  yearThree: string;
}

interface ProductService {
  name: string;
  currency: string;
  costOfGoods: CostOfGoods;
  revenueExpected: RevenueExpected;
}

interface ProductServiceFormProps {
  data: {
    products: ProductService[];
  };
  onUpdate: (data: Partial<{ products: ProductService[] }>) => void;
  onNext: () => void;
}

const currencies = [
  'USD',
  'EUR',
  'GBP',
  'JPY',
  'AUD',
  'CAD',
  'CHF',
  'CNY',
  'INR',
];

const emptyProduct: ProductService = {
  name: '',
  currency: '',
  costOfGoods: {
    yearOne: '',
    yearTwo: '',
    yearThree: '',
  },
  revenueExpected: {
    yearOne: '',
    yearTwo: '',
    yearThree: '',
  },
};

const ProductServiceForm: React.FC<ProductServiceFormProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const handleAddProduct = () => {
    const products = data.products || [];
    onUpdate({
      products: [...products, { ...emptyProduct }],
    });
  };

  const handleProductChange = (index: number, field: string, value: string) => {
    const products = [...(data.products || [])];
    const updatedProducts: ProductService[] = products.map((product, i) => {
      if (i !== index) return product;

      if (field.includes('.')) {
        const [category, year] = field.split('.');
        if (category === 'costOfGoods') {
          return {
            ...product,
            costOfGoods: {
              ...product.costOfGoods,
              [year]: value,
            },
          };
        } else if (category === 'revenueExpected') {
          return {
            ...product,
            revenueExpected: {
              ...product.revenueExpected,
              [year]: value,
            },
          };
        }
      }
      return {
        ...product,
        [field]: value,
      };
    });

    onUpdate({ products: updatedProducts });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Product/Service
        </Typography>

        {(data.products || []).map((product, index) => (
          <Box key={index} sx={{ mb: 6 }}>
            <Typography variant="h6" gutterBottom>
              Add a product/service offer
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  label="Enter Product/Service"
                  value={product.name}
                  onChange={(e) =>
                    handleProductChange(index, 'name', e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  select
                  fullWidth
                  label="Select Currency"
                  value={product.currency}
                  onChange={(e) =>
                    handleProductChange(index, 'currency', e.target.value)
                  }
                >
                  {currencies.map((currency) => (
                    <MenuItem key={currency} value={currency}>
                      {currency}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <FormLabel sx={{ mb: 1 }}>Cost of Goods</FormLabel>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Year One"
                    value={product.costOfGoods.yearOne}
                    onChange={(e) =>
                      handleProductChange(
                        index,
                        'costOfGoods.yearOne',
                        e.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Year Two"
                    value={product.costOfGoods.yearTwo}
                    onChange={(e) =>
                      handleProductChange(
                        index,
                        'costOfGoods.yearTwo',
                        e.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Year Three"
                    value={product.costOfGoods.yearThree}
                    onChange={(e) =>
                      handleProductChange(
                        index,
                        'costOfGoods.yearThree',
                        e.target.value
                      )
                    }
                  />
                </Grid>
              </Grid>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <FormLabel sx={{ mb: 1 }}>Revenue Expected</FormLabel>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Year One"
                    value={product.revenueExpected.yearOne}
                    onChange={(e) =>
                      handleProductChange(
                        index,
                        'revenueExpected.yearOne',
                        e.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Year Two"
                    value={product.revenueExpected.yearTwo}
                    onChange={(e) =>
                      handleProductChange(
                        index,
                        'revenueExpected.yearTwo',
                        e.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Year Three"
                    value={product.revenueExpected.yearThree}
                    onChange={(e) =>
                      handleProductChange(
                        index,
                        'revenueExpected.yearThree',
                        e.target.value
                      )
                    }
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        ))}

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Button
            startIcon={<Plus size={20} />}
            onClick={handleAddProduct}
            variant="outlined"
          >
            Add another product/service
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="submit" variant="contained" color="primary" size="large">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default ProductServiceForm;
