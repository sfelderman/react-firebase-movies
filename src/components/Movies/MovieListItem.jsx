import React from 'react';
import {Container, Card, Image, Button, Header, Form, Grid, GridColumn} from 'semantic-ui-react';

const IMAGE_SIZE = 500;

const MovieListItem = ({movie, deleteMovie, toggleWatched}) => {
    return (
        <GridColumn>
            <Card>
                <Image >
                    <Image
                        src={`https://image.tmdb.org/t/p/w${IMAGE_SIZE}/${movie.srcImg}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`}
                        alt='Movie Cover'
                    />
                </Image>
                <Card.Content>
                    <Card.Header>{movie.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{movie.date}</span>
                    </Card.Meta>
                    <Card.Description>{movie.overview}</Card.Description>

                    <Button negative onClick={() => deleteMovie({...movie})}>Remove</Button>
                    <Button
                        color={`${movie.watched ? 'blue' : 'grey'}`}
                        onClick={() => toggleWatched({...movie})}
                        >
                        {movie.watched ? 'Watched' : 'Unwatched'}
                    </Button>
                </Card.Content>
            </Card>
        </GridColumn>

        
        // <div className='MovieListItem col-8 card mx-2 mb-3'>
        //     <div className='row'>
        //         <div className='col-5'>
        //             <img
        //                 className='card-img-top'
        //                 src={`https://image.tmdb.org/t/p/w${IMAGE_SIZE}/${movie.srcImg}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`}
        //                 alt='Movie Cover'
        //             />
        //         </div>
        //         <div className='col-7'>
        //              <div className='card-body'>

        //                 <h5 className='card-header text-center'>{movie.title}</h5>
        //                 <p className='card-text'>{movie.overview}</p>
        //                 <div className='card-link'>
        //                     <div className='row justify-content-right my-5'>
        //                         <button
        //                             className='btn btn-outline-danger float-right mx-1'
        //                             onClick={() => deleteMovie({...movie})}>
        //                             Remove
        //                         </button>
        //                         <button
        //                             className={`btn btn-outline-${movie.watched ? 'info' : 'dark'} float-right mx-1`}
        //                             onClick={() => toggleWatched({...movie})}>
        //                             {movie.watched ? 'Watched' : 'Unwatched'}
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default MovieListItem;