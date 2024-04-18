import React, { useState } from 'react';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div  style={{ display: 'flex', alignItems: 'center'}}>
      <Input
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        endAdornment={
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        }
      />
    </div>
  );
};


