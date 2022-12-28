import React from 'react';
import { useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { CartContext } from '../../context/CartContext/CartContext';
import StyleIcon from '@mui/icons-material/Style';
import Typography from '@mui/material/Typography';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import styles from './Navbar.module.css';

function Navbar() {
  const { auth, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <nav className={styles['navbar']}>
      <div className={styles['logo']}>
        <StyleIcon fontSize="large" />
        <Typography variant="h5" component="h2">
          Your Style
        </Typography>
      </div>

      <ul className={styles['menu-link']}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!auth && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
        {auth && (
          <>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <ShoppingCartRoundedIcon />({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                  navigate('/');
                }}
              >
                Log out
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
