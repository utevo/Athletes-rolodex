import React from 'react';

import './search-box.style.css';

export const SearchBox = ({placeHolder, onChange}) => {
    return (
        <input
            className='search-box'
            type='search'
            placeholder={placeHolder}
            onChange={onChange}/>
        )
}