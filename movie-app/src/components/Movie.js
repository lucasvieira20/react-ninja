import React from 'react';

const Movie = ({ movie }) => (
    <div className="card movie">
        <div className="image-movie">
            <img src={movie.movieImage} />
        </div>
        <div className="movie-info">
            <h2 className="movie-name">{movie.movieName}</h2>

            <div className="meta">
                <span className="meta-year">{movie.movieYear}</span>
                <span className="tag-movie">{movie.movieGenre}</span>
            </div>       
            <div className="movie-overview">
                <p>{movie.movieOverviewText}</p>
            </div>
            <a href="#" className="btn view-more">Ver Mais Informações</a>
        </div>
    </div>
)

export default Movie;