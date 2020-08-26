import React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import './Login.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '200px',

    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const GooglesignIn = (event) => {};
function Login() {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <div className='login'>
        <div className={classes.root}>
          <Button onClick={GooglesignIn}>
            <img src='https://img.icons8.com/color/48/000000/google-logo.png' />
            Sign-in with Google
          </Button>
          <Button>
            <img src='https://img.icons8.com/nolan/64/email-open.png' />
            Sign-in with Email-id
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;

// For later use
{
  /* <form>
        <form className='input_box'>
          <FormControl>
            <InputLabel>Username*</InputLabel>
            <Input placeholder='Username' />
          </FormControl>
        </form>
        <form className='input_box'>
          <FormControl>
            <InputLabel>Password*</InputLabel>
            <Input placeholder='password' type='password' />
          </FormControl>
        </form>
        <form>
          <Button
            className='signin_btn'
            type='submit'
            size='large'
            onClick={signin}
            variant='contained'>
            Sign In
          </Button>
          <Button
            className='signup_btn'
            type='submit'
            size='large'
            onClick={signin}
            variant='contained'>
            Sign Up
          </Button>
        </form>
      </form> */
}
