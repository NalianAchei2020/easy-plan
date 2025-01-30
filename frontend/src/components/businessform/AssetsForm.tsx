import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from '@mui/material';
import { Plus, X } from 'lucide-react';

interface Asset {
  name: string;
  cost: string;
}

interface AssetsFormProps {
  data: {
    assets?: Asset[];
  };
  onUpdate: (data: Partial<any>) => void;
  onNext: () => void;
  onPrev: () => void;
  handleSubmit: () => void;
}

const AssetsForm: React.FC<AssetsFormProps> = ({
  data,
  onUpdate,
  onNext,
  onPrev,
  handleSubmit,
}) => {
  const [assets, setAssets] = useState<Asset[]>(
    data.assets || [{ name: '', cost: '' }]
  );

  const handleAssetChange =
    (index: number, field: keyof Asset) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newAssets = [...assets];
      newAssets[index] = {
        ...newAssets[index],
        [field]: event.target.value,
      };
      setAssets(newAssets);
      onUpdate({ assets: newAssets });
    };

  const handleAddAsset = () => {
    setAssets([...assets, { name: '', cost: '' }]);
  };

  const handleRemoveAsset = (index: number) => {
    const newAssets = assets.filter((_, i) => i !== index);
    setAssets(newAssets);
    onUpdate({ assets: newAssets });
  };

  return (
    <Box sx={{ maxWidth: '100%', width: '100%' }}>
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          fontWeight: 600,
          borderBottom: '1px solid #e0e0e0',
          pb: 2,
        }}
      >
        ASSETS AND OTHER ASSETS
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {assets.map((asset, index) => (
          <Grid container spacing={2} key={index} alignItems="center">
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="Asset Name"
                variant="outlined"
                value={asset.name}
                onChange={handleAssetChange(index, 'name')}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="Cost"
                variant="outlined"
                type="number"
                value={asset.cost}
                onChange={handleAssetChange(index, 'cost')}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              {assets.length > 1 && (
                <IconButton
                  onClick={() => handleRemoveAsset(index)}
                  sx={{
                    color: 'error.main',
                    '&:hover': { bgcolor: 'error.lighter' },
                  }}
                >
                  <X size={20} />
                </IconButton>
              )}
            </Grid>
          </Grid>
        ))}

        {/* Add Another Asset Button */}
        <Button
          startIcon={<Plus size={20} />}
          onClick={handleAddAsset}
          sx={{
            alignSelf: 'flex-start',
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.lighter',
            },
          }}
        >
          Add another asset
        </Button>

        {/* Next Button & previous button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="contained"
            onClick={onPrev}
            sx={{
              bgcolor: '#1976d2',
              color: 'white',
              px: 4,
              '&:hover': {
                bgcolor: '#1565c0',
              },
            }}
          >
            PREV
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: '#1976d2',
              color: 'white',
              px: 4,
              '&:hover': {
                bgcolor: '#1565c0',
              },
            }}
          >
            create plan
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AssetsForm;
