import React from 'react';

import { Alert, Box, Container, Grid, Stack, Typography } from '@mui/material';
import Cart from 'src/components/ui/cardWrapper';
import PannelWrapper from 'src/pages/layout/pannel';
import { useProduct } from 'src/hooks/useProducts';

import type BaseProducts from 'types/Products';

export default function ProductsPage() {
  const { data, error, isFetching } = useProduct();
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
      <Stack sx={{ width: '100%' }} spacing={2}>
        {error && (
          <Alert severity="error">
            Something bad is happening please try again later.
          </Alert>
        )}
        {isFetching && (
          <Alert severity="info">Loading data please wait...</Alert>
        )}
      </Stack>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={6}>
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
        </Grid>
      </Container>
    </PannelWrapper>
  );
}
