import React from 'react';
import { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { SearchSortContext } from '../../context/SearchSortContext/SearchSortContext';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

function ProductList({ products }) {
  const { searchProduct, price } = useContext(SearchSortContext);

  if (!products) {
    return <strong>Loading products...</strong>;
  }

  const productFilter = (product) => {
    if (searchProduct === '') {
      return product;
    }
    if (product.title.toLowerCase().includes(searchProduct.toLowerCase())) {
      return product;
    }
  };

  const productSort = (a, d) => {
    if (price === 10) {
      return a.price > d.price ? 1 : -1;
    }
    if (price === 20) {
      return a.price < d.price ? 1 : -1;
    }
  };

  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          {products
            .filter(productFilter)
            .sort(productSort)
            .map((product, index) => (
              <Grid item key={index} xs={12} md={6} lg={4}>
                <ProductCard key={index} product={product} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ProductList;
