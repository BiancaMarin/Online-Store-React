import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styles from './Homepage.module.css';
import { motion } from 'framer-motion';

function Homepage() {
  return (
    <div className={styles['homepage']}>
      <main className={styles['hero']}>
        <section className={styles['hero-image']}>
          <motion.img
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1 }}
            className={styles['image']}
            src="../images/hero-image.png"
            alt="hero-image"
          />
        </section>
        <section className={styles['hero-content']}>
          <article>
            <h1>We care about your Style</h1>
            <p>
              Find out more! Your style, your choices! Discover the new fashion
              range and order your favourites.
            </p>

            <Link to="/login">
              <Button
                color="primary"
                variant="contained"
                endIcon={<ArrowForwardIosRoundedIcon />}
              >
                Get started
              </Button>
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
