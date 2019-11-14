import React from 'react';
import './search.styles.css';

export const Search = ({ placeholder, handleChange }) => (
    <input
        className='search-box'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)
