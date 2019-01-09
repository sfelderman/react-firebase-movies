import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({searchValue, onEditSearch, onSubmit}) => {
    return (
        <div className='row justify-content-right'>
            <div className='col-2'/>

            <div className='col-8'>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='searchValue'
                        className='form-control'
                        value={searchValue}
                        onChange={onEditSearch}
                        placeholder='Search Movies'
                        autoFocus
                    />
                </form>
            </div>
            <div className='col-2'>
                <Link className='btn btn-success' to='AddMovie'>
                    Search External
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;