"use client";
import { Button, TextField, Container, Typography, Box, Divider, Link } from '@mui/material';
import { useState } from 'react';
import { account } from "@/appwrite/config";
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
    <Container component="main" maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box sx={{ boxShadow: 3, p: 4, bgcolor: 'white', borderRadius: '0px 16px 16px 16px' }}>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
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
            sx={{ mt: 2, mb: 2, bgcolor: '#1F64FF' }}
          >
            Sign In
          </Button>
           <Box textAlign="center" sx={{ mt: 2, mb: 2 }}>
          OR
        </Box>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            startIcon={<img src="/google-icon.svg" alt="Google Icon" style={{ width: '20px', height: '20px' }} />}
            sx={{ mt: 2 }}
            onClick={() => window.location.href = '/api/auth/google'}
          >
            Sign In with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            startIcon={<img src="/github-icon.svg" alt="GitHub Icon" style={{ width: '20px', height: '20px' }} />}
            sx={{ mt: 2 }}
            onClick={() => window.location.href = '/api/auth/github'}
          >
            Sign In with GitHub
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an Account? <Link href="/signup">SIGN UP</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
