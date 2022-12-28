import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styles from './LoginUser.module.css';

function LoginUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setUsernameError(false);
    setPasswordError(false);

    if (username === '') {
      setUsernameError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }

    if (username && password) {
      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          login(data.token);
          navigate('/survey');
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        });
    }
  }

  return (
    <div className={styles['login-page']}>
      <Typography variant="h5" sx={{ textAlign: 'center', paddingBottom: 3 }}>
        Please enter your login details
      </Typography>
      <form
        className={styles['form']}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          label="Username"
          variant="outlined"
          sx={{ marginTop: 2, marginBottom: 2, display: 'block' }}
          onChange={(e) => setUsername(e.target.value)}
          error={usernameError}
        />
        {usernameError && (
          <>
            <p className={styles['error']}>Please enter a username.</p>
          </>
        )}
        <TextField
          required
          label="Password"
          variant="outlined"
          type="password"
          sx={{ marginTop: 2, marginBottom: 2, display: 'block' }}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        {passwordError && (
          <>
            <p className={styles['error']}>Please enter a password.</p>
          </>
        )}
        {error && (
          <>
            <p className={styles['error']}>Username or password invalid!</p>
          </>
        )}

        <Button
          sx={{ width: 230, marginTop: 2 }}
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<ArrowForwardIosRoundedIcon />}
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginUser;
