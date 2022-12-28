import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles['not-found']}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h3">Oops! Page not found.</Typography>

      <p>We can't find the page you're looking for.</p>
      <div className={styles['btns']}>
        <Link to="/">
          <Button color="primary" variant="contained">
            Go back home
          </Button>{' '}
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
