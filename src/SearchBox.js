import React from 'react';

const SearchBox = ({ inputField, handleChange}) => {
    return (
        <div>
            <input type='search'
            placeholder='Search robots'
            value={inputField}
            onChange={handleChange} />
        </div>
    )
}

export default SearchBox;