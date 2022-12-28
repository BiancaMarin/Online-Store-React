import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import styles from './ProductDetails.module.css';
import { CartContext } from '../../context/CartContext/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductDetails() {
  const { cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) {
    return <strong>Loading product details...</strong>;
  }

  return (
    <div className={styles['details-page']}>
      <h1 className={styles['title']}>Product details</h1>
      <main className={styles['details-container']}>
        <section className={styles['image-card']}>
          <img
            src={product.image}
            alt={`${product.title}`}
            className={styles['image']}
          />
        </section>
        <section className={styles['details']}>
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p className={styles['rating']}>
            {product.rating.rate}
            <StarRoundedIcon sx={{ color: '#FFE15D' }} />
          </p>
          <p className={styles['price']}>EUR {product.price}</p>
          <p>{product.description}</p>
          {cart.includes(product) ? (
            <Button
              sx={{ width: 200 }}
              color="primary"
              variant="contained"
              onClick={() => {
                setCart(cart.filter((c) => c.id !== product.id));
              }}
            >
              Remove from cart
              <DeleteIcon />
            </Button>
          ) : (
            <Button
              sx={{ width: 200 }}
              color="primary"
              variant="contained"
              onClick={() => {
                setCart([...cart, product]);
              }}
            >
              Add to cart
              <ShoppingCartIcon />
            </Button>
          )}
        </section>
      </main>
    </div>
  );
}

export default ProductDetails;
