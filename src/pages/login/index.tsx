import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import bg from './loginBack.png';
import Layout from '../layout';
import LoginForm from 'src/components/forms/login';

export default function LoginPage() {
  return (
    <Layout>
      <Container>
        <Box>
          <Grid container component="main">
            <Grid
              data-testid="back image"
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f3f2f8',
                backgroundSize: 'center',
                backgroundPosition: 'center',
                borderRadius: '15px 0 0 15px',
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              sx={{
                borderRadius: '0 15px 15px 0',
              }}
              component={Paper}
              elevation={2}
              square
            >
              <LoginForm />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
