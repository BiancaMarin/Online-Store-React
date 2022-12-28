import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { CartContext } from '../../context/CartContext/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <article className={styles['card-container']}>
        <Link to={`/productDetails/${product.id}`} className={styles['card']}>
          <h3>{product.title}</h3>
          <img
            src={product.image}
            alt={`${product.title}`}
            className={styles['image']}
          />
        </Link>
        <p className={styles['price']}>EUR {product.price}</p>

        {cart.includes(product) ? (
          <Button
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
      </article>
    </div>
  );
}

export default ProductCard;
