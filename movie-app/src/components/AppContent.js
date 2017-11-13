import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import ContentMovies from './ContentMovies';
import Footer from './Footer';

const AppContent = ({ movie, sidebar }) => (

    <div id="app">

        <Header />

        <main id="main">
            <div className="wrapper">
                <Sidebar sidebar={sidebar} />
                <ContentMovies movie={movie} />
            </div>
        </main>

        <Footer />   
    </div>
);


export default AppContent;