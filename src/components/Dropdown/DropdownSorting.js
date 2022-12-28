import React from 'react';
import { useContext } from 'react';
import { SearchSortContext } from '../../context/SearchSortContext/SearchSortContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { StyledFormControl } from '../../mui styles';

function DropdownSorting() {
  const { price, setPrice } = useContext(SearchSortContext);

  function handleChange(e) {
    setPrice(e.target.value);
  }

  return (
    <div>
      <StyledFormControl>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sorting"
          onChange={handleChange}
          value={price}
        >
          <MenuItem value={10}>Ascending price</MenuItem>
          <MenuItem value={20}>Descending price</MenuItem>
        </Select>
      </StyledFormControl>
    </div>
  );
}

export default DropdownSorting;
