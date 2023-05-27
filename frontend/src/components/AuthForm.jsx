//TOOD register form vs login
//Register: username, email, first name, last name, phone, birthday, address (connect to shipping & new button (Same as Autofilled from Account))
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function AuthForm() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  // const [token, setToken] = useState(null);
  const [error, setError] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(()=>
  setOpen(true), [error]
  )

  async function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const authData = {
      identifier: data.get('email'),
      password: data.get('password'),
    };

    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      body: JSON.stringify(authData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 422 || response.status === 401) {
      alert(`Alert Response Status: `, response.status)
      }

      //COMMMENT: confirmation of strapi backend
    const responseJSON = await response.json();
    console.log("TCL: onSubmit -> responseJSON", responseJSON)
    
    const jwt = await responseJSON.jwt;
    console.log("TCL: onSubmit -> token", token)
    localStorage.setItem('token', jwt)
    
    
    if(token || responseJSON.jwt){
      setOpen(true)
      
      //store token to local storage:
      localStorage.setItem('token', token)
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem('expiration', expiration.toISOString());

      navigate('/profile');

    }
    else{
      if(response.status === 400){
        const credentialFail = await responseJSON.error
        setError([credentialFail])
      }
      else {
      const errorList = await responseJSON?.error?.details?.errors || responseJSON.error.message
      console.log("TCL: onSubmit -> errorList", errorList)
      setError(errorList)
      console.log("SET ERROR", error)
    }
   }     

  };

  return (
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Collapse in={open}>
          {error &&  error.map((err,index) => (
          <Alert severity="error" sx={{ m: 2 }} key={index} onClose={() => {
            setOpen(false);
          }}>{err.message}</Alert>
        ))}
            </Collapse>
          <Box component="FORM" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
 
  );
}

export default AuthForm;