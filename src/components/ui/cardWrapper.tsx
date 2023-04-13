import React from 'react';

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

import type BaseProducts from 'src/types/Products';

export default function cardWrapper(props: BaseProducts) {
  const { image, name, description, price } = props;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'space-between', px: '17px' }}
        >
          <Typography gutterBottom variant="h6">
            {price}$
          </Typography>
          <Button size="small" color="primary" variant="outlined">
            Add
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
