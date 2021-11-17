import React, { useState } from 'react';
import { Input } from 'antd';
import { validateOpenNewTab } from '../../utils';
import { BiSearchAlt } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';
import './SearchBar.scss';

const { Search } = Input;

const Icon = () => {
  return (
    <IconWrapper>
      <BiSearchAlt />
    </IconWrapper>
  );
};

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (value) => {
    validateOpenNewTab(value);
  };

  return (
    <div className="search">
      <Search
        autoFocus
        className="search__input align-items-center"
        placeholder="Search or enter your address"
        type="text"
        size="large"
        onSearch={handleSearch}
        // bordered={isFocused}
        prefix={<FcGoogle />}
        enterButton={<Icon />}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </div>
  );
};

export default SearchBar;

const IconWrapper = styled.div`
  font-size: 1.2em;
  display: flex;
`;
