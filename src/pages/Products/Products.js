import React from 'react';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Category from './Category';
import SearchBar from '../../components/SearchBar/SearchBar';
import DropdownSorting from '../../components/Dropdown/DropdownSorting';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import styles from './Products.module.css';

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  if (!products) {
    return <strong>Loading products...</strong>;
  }

  const filters = [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: "Men's",
      value: "men's clothing",
    },
    {
      label: "Women's",
      value: "women's clothing",
    },
    {
      label: 'Jewellery',
      value: 'jewelery',
    },
    {
      label: 'Electronics',
      value: 'electronics',
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className={styles['category-btns']}>
          {filters.map((filter, index) => (
            <Button
              key={index}
              variant="outlined"
              color="primary"
              onClick={() => setActiveCategory(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div>
          <SearchBar sx={{ paddingBottom: 5 }} />
        </div>
        <div>
          <DropdownSorting />
        </div>
        <div>
          {activeCategory === 'all' && <ProductList products={products} />}
          <Category category={activeCategory} products={products} />
        </div>
      </Box>
    </>
  );
}

export default Products;
