import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({searchValue, onEditSearch, onSubmit}) => {
    return (
        <div className='row justify-content-right'>
            <div className='col-2'/>

            <div className='col-8'>
                <form className='form-inline' onSubmit={onSubmit}>
                    <div className='container-fluid'>
                        <div className='row justify-content-end'>
                            <input
                                type='text'
                                name='searchValue'
                                className='col mr-3 form-control'
                                value={searchValue}
                                onChange={onEditSearch}
                                placeholder='Search Movies'
                                autoFocus
                            />
                            <Link className='col-auto btn btn-success' to='AddMovie'>
                                Search External
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;