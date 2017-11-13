import React from 'react';
import Movie from './Movie';

const ContentMovies = ({ movie }) => (

    <div id="content-movies">    
        <div className="list-movie">
            {movie.map((movieItem, index) =>(
                <Movie key={index} movie={movieItem} />
            ))}
        </div>
    </div>
)


export default ContentMovies;