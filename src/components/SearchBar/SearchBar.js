import React from 'react';
import { useContext } from 'react';
import { SearchSortContext } from '../../context/SearchSortContext/SearchSortContext';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../../mui styles/index';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const { setSearchProduct } = useContext(SearchSortContext);

  const handleSearchProduct = (e) => {
    setSearchProduct(e.target.value);
  };

  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: '#63686E' }} />
        </SearchIconWrapper>
        <StyledInputBase
          color="secondary"
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearchProduct}
        />
      </Search>
    </div>
  );
}

export default SearchBar;
