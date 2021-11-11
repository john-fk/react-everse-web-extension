import React, { useState } from 'react';
import { Input } from 'antd';
import { validateOpenNewTab } from '../../utils';
import { SearchOutlined, GoogleOutlined } from '@ant-design/icons';
import './searchInput.scss';

const { Search } = Input;

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (value) => {
    validateOpenNewTab(value);
  };

  return (
    <div className="search">
      <Search
        autoFocus
        className="search__input"
        placeholder="Search or enter your address"
        type="text"
        size="large"
        onSearch={handleSearch}
        // bordered={isFocused}
        prefix={<GoogleOutlined />}
        enterButton={<SearchOutlined />}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </div>
  );
};

export default SearchInput;
