import React from 'react';
import {MovieList} from 'components/Movies';
import {ToolBar} from 'components/ToolBar';

const MovieHomePage = ({signOut}) => {
	return (
		<div className='container'>
			<div className='row justify-content-end mt-3'>
			<div className='col-2'/>

				<div className='col'>
					<h2 className='text-center'>Your Movies</h2>
				</div>
				<div className='col-2'>
					<button type='button' className='btn btn-outline-dark float-right' onClick={signOut}>
						Sign Out
					</button>
				</div>
			</div>
			<ToolBar/>
			<MovieList/>
		</div>
	);
}

export default MovieHomePage;