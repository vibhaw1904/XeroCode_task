"use client"
import { Button, TextField, Container, Typography } from '@mui/material';
import { useState } from 'react';
import {account} from "../appwrite/config"
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(formValues.email, formValues.password);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => window.location.href = '/api/auth/google'}
        >
          Sign In with Google
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => window.location.href = '/api/auth/github'}
        >
          Sign In with GitHub
        </Button>
      </form>
    </Container>
  );
};

export default Login;