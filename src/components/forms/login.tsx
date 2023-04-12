import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlined } from '@mui/icons-material';
import {
  Alert,
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { validateEmail } from 'src/utils/validations';
import { useMutation } from 'react-query';
import { createUser } from 'src/utils/api';

export default function LoginForm() {
  const [valid, setValid] = useState(true);
  const updateMutation = useMutation(createUser);
  let navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValid(true);
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    if (!email || !password || !validateEmail(String(email))) {
      setValid(false);
      return;
    }
    updateMutation.mutate(
      { email: String(email), password: String(password) },
      {
        onSuccess: () => {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('role', 'admin');
          navigate('/products');
        },
        onError: () => {},
      }
    );
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: { sm: 6, xs: 6, lg: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h4" data-testid="login-title">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        {!valid && (
          <Box sx={{ position: 'absolute', zIndex: 2, top: '-25px', left: 0 }}>
            <Alert severity="error" data-testid="login-error">
              The email or password is incorrect.
            </Alert>
          </Box>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={updateMutation.isLoading}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
}
