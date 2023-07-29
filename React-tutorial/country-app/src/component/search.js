import React, { useEffect, useState } from 'react';

const Search = (props) => {
  const [searchText, setSearchText] = useState('');
  const { searchCountry } = props;

  const handleSearchValue = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    searchCountry(searchText);
  }, [searchText]);

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        placeholder="search Country"
        value={searchText}
        onChange={handleSearchValue}
      />
    </div>
  );
};

export default Search;
