import React from 'react';
import './Nav.css';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
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

function Nav() {
  return (
    <header className='header'>
      <div className='header_logo'>
        <h1>TODO App</h1>
        <p>by Guhan.G</p>
      </div>
    </header>
  );
}
// function login() {
//   return <Login />;
// }

export default Nav;
