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
    // e.preventDefault();
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
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Nunito',
      }}
    >
      <Box
        sx={{
          boxShadow: 3,
          p: 0,
          bgcolor: 'white',
          borderRadius: '0px 16px 0px 16px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
        }}
      >
        <Box sx={{ flex: 1, p: 4}}>
          <Typography component="h1" variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Nunito' }}>
            Hello!
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontFamily: 'Nunito' }}>
            <Divider>Create Your Account</Divider>
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
              sx={{ fontFamily: 'Nunito' }}
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
              sx={{ fontFamily: 'Nunito' }}
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
              sx={{ fontFamily: 'Nunito' }}
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
              sx={{ fontFamily: 'Nunito' }}
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
              sx={{ fontFamily: 'Nunito' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2, bgcolor: '#1F64FF', fontFamily: 'Nunito' }}
            >
              Sign Up
            </Button>
          </form>
          <Box textAlign="center" sx={{ mt: 0, mb: 2, fontFamily: 'Nunito' }}>
            OR
          </Box>
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                endIcon={<img src="/images/google.png" alt="Google Icon" style={{ width: '20px', height: '20px' }} />}
                // onClick={() => {
                //   account.createOAuth2Session(
                //     "google",
                //     "http://localhost:3000/dashboard",
                //     "http://localhost:3000"
                //   )
                // }}             
                   sx={{
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                  textTransform: 'none',

                  ':hover': {
                    boxShadow: 3,
                  },
                  fontFamily: 'Nunito',
                }}
              >
                Sign Up with Google
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                endIcon={<img src="/images/github.png" alt="GitHub Icon" style={{ width: '20px', height: '20px' }} />}
                // onClick={() => {
                //   account.createOAuth2Session(
                //     "github",
                //     "http://localhost:3000/dashboard",
                //     "http://localhost:3000"
                //   )
                // }}                   
                 sx={{
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                  textTransform: 'none',

                  ':hover': {
                    boxShadow: 3,
                  },
                  fontFamily: 'Nunito',
                }}
              >
                Sign Up with GitHub
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body2" align="center" sx={{ mt: 2, fontFamily: 'Nunito' }}>
            Already have an Account? <Link href="/login" sx={{ fontFamily: 'Nunito' }}>LOGIN</Link>
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' },alignSelf: 'center', height: '30rem' }} />
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' }, position: 'relative' }}>
          <img src="/images/Vector.png" alt="Vector" style={{ position: 'absolute', bottom: 0, right: 0, width: '100%' }} />
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
