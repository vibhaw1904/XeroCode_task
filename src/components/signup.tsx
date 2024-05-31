"use client";

import { Button, TextField, Container, Typography, Box, Grid, Link, Divider } from '@mui/material';
import { useState } from 'react';
import { account, ID } from '@/appwrite/config';
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
    
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      
 <Box
        sx={{
          boxShadow: 3,
          p: 4,
          bgcolor: 'white',
          borderRadius: '0px 16px 16px 16px',
          width: '100%'
        }}
      >
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Hello!
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Create Your Account
        </Typography>
        <form onSubmit={handleSignup} style={{ marginTop: '1rem' }}>
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
            sx={{ mt: 2, mb: 2, bgcolor: '#1F64FF' }}
          >
            Sign Up
          </Button>
        </form>
        <Box textAlign="center" sx={{ mt: 0, mb: 2 }}>
          OR
        </Box>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<img src="/google-icon.svg" alt="Google Icon" style={{ width: '15px', height: '15px' }} />}
              onClick={() => window.location.href = '/api/auth/google'}
            >
              Sign Up with Google
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<img src="/github-icon.svg" alt="GitHub Icon" style={{ width: '15px', height: '15px' }} />}
              onClick={() => window.location.href = '/api/auth/github'}
            >
              Sign Up with GitHub
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an Account? <Link href="/login">LOGIN</Link>
        </Typography>
      </Box>
   
     
     
    </Container>
  );
};

export default Signup;
  