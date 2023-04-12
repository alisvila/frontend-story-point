import React from 'react';
import { useQuery } from 'react-query';
import { getProducts } from 'src/utils/api';
import BaseProducts from 'types/Products';
import { Alert, Box, Typography } from '@mui/material';
import Cart from 'src/components/ui/cardWrapper';
import PannelWrapper from 'src/pages/layout/pannel';
import { useProduct } from './useProducts';

export default function ProductsPage() {
  const { data, error } = useProduct();
  const products: BaseProducts[] = data?.products;

  return (
    <PannelWrapper>
      <Typography
        variant="h2"
        sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}
      >
        Product Mockup
      </Typography>
      <Typography sx={{ my: 4, textAlign: 'center' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam dui
        lacinia ornare maximus. Duis dictum nibh sed lorem posuere venenatis.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          pt: 4,
        }}
      >
        {error && (
          <Alert severity="error">
            something bad is happening please try again later.
          </Alert>
        )}
        {products?.map((product: BaseProducts) => (
          <Cart
            key={product.id}
            image={product.image}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </Box>
    </PannelWrapper>
  );
}
