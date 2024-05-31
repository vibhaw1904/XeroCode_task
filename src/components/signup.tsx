"use client"

import { Button, TextField, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { account,ID } from '@/appwrite/config';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const user = await account.create(
        ID.unique(),
        formValues.email,
        formValues.password,
        `${formValues.firstname} ${formValues.lastname}`
      );
      console.log('User created:', user);
      router.push('/');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form onSubmit={handleSignup}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstname"
          label="First Name"
          name="firstname"
          autoComplete="firstname"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastname"
          label="Last Name"
          name="lastname"
          autoComplete="lastname"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => window.location.href = '/api/auth/google'}
        >
          Sign Up with Google
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => window.location.href = '/api/auth/github'}
        >
          Sign Up with GitHub
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
