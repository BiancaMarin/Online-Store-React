import React, { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CartContext } from '../../context/CartContext/CartContext';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import styles from './Cart.module.css';

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className={styles['cart']}>
      <div className={styles['products-cart']}>
        <Typography variant="h5" sx={{ marginLeft: 10 }}>
          Your Shopping Cart
        </Typography>
      </div>
      <div>
        {cart.length === 0 && (
          <>
            <div className={styles['empty']}>Your cart is empty.</div>
          </>
        )}
        <Container sx={{ marginTop: 5 }}>
          <Grid container spacing={4}>
            {cart.map((product, index) => (
              <Grid item key={index} xs={12} md={6} lg={4}>
                <ProductCard product={product} cart={cart} setCart={setCart} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Cart;
