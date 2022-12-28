import React from 'react';
import { useState, createContext } from 'react';

export const SearchSortContext = createContext();

export function SearchSortContextProvider({ children }) {
  const [searchProduct, setSearchProduct] = useState('');
  const [price, setPrice] = useState('');

  return (
    <SearchSortContext.Provider
      value={{ searchProduct, setSearchProduct, price, setPrice }}
    >
      {children}
    </SearchSortContext.Provider>
  );
}
