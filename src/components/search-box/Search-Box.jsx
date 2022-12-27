import React from 'react';
import { Component } from 'react';
import './Search-Box.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
	return (
		<input
			className={`search-box ${className}`}
			type='search'
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default SearchBox;
