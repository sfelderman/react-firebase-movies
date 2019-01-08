import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({searchValue, onEditSearch}) => {

    return (
        <div className='row justify-content-right'>
            <div className='col-2'/>

            <div className='col-8'>
                <input
                    type='text'
                    name='searchValue'
                    className='form-control'
                    value={searchValue} //TODO connect to just redux
                    onChange={onEditSearch}
                    placeholder='Search Movies'
                    autoFocus
                />
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