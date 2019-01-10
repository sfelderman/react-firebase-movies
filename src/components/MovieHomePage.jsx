import React from 'react';
import {MovieList} from 'components/Movies';
import {ToolBar} from 'components/ToolBar';

const MovieHomePage = ({}) => {
	return (
		<div className='container'>
			<div className='row justify-content-center mt-3'>
				<h2 className='text-center'>Your Movies</h2>
			</div>
			<ToolBar/>
			<MovieList/>
		</div>
	);
}

export default MovieHomePage;