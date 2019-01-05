import React from 'react';

const SearchBar = ({searchValue, onEditSearch}) => {

    return (
        <div className='row justify-content-center'>
            <div className='col-8'>
                <input
                    type='text'
                    name='searchValue'
                    className='form-control'
                    value={searchValue}
                    onChange={onEditSearch}
                    placeholder='Search Movies'
                    autoFocus
                />
            </div>
        </div>
    );
};

export default SearchBar;