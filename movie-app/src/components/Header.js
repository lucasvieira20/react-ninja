import React from 'react';

const Header = () => (
    <div>
        <header id="header">
            <div className="wrapper">
                <div className="head-top">
                    <h1 className="logo"><span className="ico"></span>Movie<strong>App</strong></h1>
                </div>

                <div className="search-bar">
                    <input type="text" className="input" placeholder="Search a Movie" />
                    <input type="submit" className="btn submit" value="Search" />
                </div>
            </div>
        </header>
        <div className="top-filter">
            <a href="" className="filterLink film">Filmes</a>
            <a href="" className="filterLink series">Series</a>
        </div>
    </div>
)

export default Header;