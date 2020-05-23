import React from 'react';

const SearchBox = ({ inputField, handleChange}) => {
    return (
        <div>
            <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search robots'
            value={inputField}
            onChange={handleChange} />
        </div>
    )
}

export default SearchBox;