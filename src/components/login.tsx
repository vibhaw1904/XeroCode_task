"use client";

import { Button, TextField, Container, Typography, Box, Divider, Link, Grid } from '@mui/material';
import { useState } from 'react';
import { account } from "@/appwrite/config";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
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
        <Box sx={{ flex: 1, p: 4 }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Nunito' }}>
            Welcome Back!
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontFamily: 'Nunito' }}>
            <Divider>Sign In to Your Account</Divider>
          </Typography>
          <form onSubmit={handleLogin} style={{ marginTop: '1rem' }}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2, bgcolor: '#1F64FF', fontFamily: 'Nunito' }}
            >
              Sign In
            </Button>
            <Box textAlign="center" sx={{ mt: 2, mb: 2, fontFamily: 'Nunito' }}>
              OR
            </Box>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  endIcon={<img src="/images/google.png" alt="Google Icon" style={{ width: '20px', height: '20px' }} />}
                  onClick={() => {
                    account.createOAuth2Session(
                      'google',
                      "http://localhost:3000/dashboard",
                      "http://localhost:3000"
                    )
                  }}                  
                  sx={{
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                    textTransform: 'none',
                    ':hover': {
                      boxShadow: 3,
                    },
                    fontFamily: 'Nunito',
                  }}
                >
                  Login with Google
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  endIcon={<img src="/images/github.png" alt="GitHub Icon" style={{ width: '20px', height: '20px' }} />}
                  onClick={() => {
                    account.createOAuth2Session(
                      "github",
                      "http://localhost:3000/dashboard",
                      "http://localhost:3000"
                    )
                  }}    
                  sx={{
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                    textTransform: 'none',
                    ':hover': {
                      boxShadow: 3,
                    },
                    fontFamily: 'Nunito',
                  }}
                >
                  Login with GitHub
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2, fontFamily: 'Nunito' }}>
            Don't have an Account? <Link href="/signup" sx={{ fontFamily: 'Nunito' }}>SIGN UP</Link>
          </Typography>
        </Box>
       <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' },alignSelf: 'center', height: '26rem'}} />
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' }, position: 'relative' }}>
          <img src="/images/Vector.png" alt="Vector" style={{ position: 'absolute', bottom: 0, right: 0, width: '100%' }} />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
