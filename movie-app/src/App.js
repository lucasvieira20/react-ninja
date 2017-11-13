import React, { Component } from 'react';
import axios from 'axios';
import AppContent from './components/AppContent';

import './App.css';


class App extends Component {

  constructor(){
    super()
    this.state = {
      movie:[
        {
          movieImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/jAXZMCG9rEXHUvfxTwEYEmO1V4p.jpg",
          movieName: 'Ex Nome do Filme', 
          movieYear: '2016',
          movieGenre: "Ação",
          movieOverviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore animi quia, nihil corporis quasi dignissimos veniam debitis eveniet? Deleniti libero rem fugiat veritatis doloremque, veniam exercitationem. Sed, doloremque harum!",
        },
        {
          movieImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/9ORTc9UUTtRq7pssuu5OXNG3W5m.jpg",
          movieName: 'Superman',
          movieYear: '2017',
          movieGenre: "Aventure",
          movieOverviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore animi quia, nihil corporis quasi dignissimos veniam debitis eveniet? Deleniti libero rem fugiat veritatis doloremque, veniam exercitationem. Sed, doloremque harum!",
        },
        {
          movieImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/jAXZMCG9rEXHUvfxTwEYEmO1V4p.jpg",
          movieName: 'Nome do Filme',
          movieYear: '2017',
          movieGenre: "Aventure",
          movieOverviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore animi quia, nihil corporis quasi dignissimos veniam debitis eveniet? Deleniti libero rem fugiat veritatis doloremque, veniam exercitationem. Sed, doloremque harum!",
        },
        {
          movieImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/ujQthWB6c0ojlARk28NSTmqidbF.jpg",
          movieName: 'Nome do Filme',
          movieYear: '2016',
          movieGenre: "Ação",
          movieOverviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore animi quia, nihil corporis quasi dignissimos veniam debitis eveniet? Deleniti libero rem fugiat veritatis doloremque, veniam exercitationem. Sed, doloremque harum!",
        }
      ], 

      sidebar:{
        titleSidebar: "Filtrar por Título"
      }
    }
  }

  getMovie(){
    console.log('oi');
    // axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e88c106abf5aa648d36c6c6463704181");
  }

  componentDidMount(){
    this.getMovie();
  }

  componentWillMount(){
    console.log('will');
  }

  render() {
    return (
      <AppContent 
        movie={this.state.movie}
        sidebar={this.state.sidebar} 
      />
    );
  }
}

export default App;
