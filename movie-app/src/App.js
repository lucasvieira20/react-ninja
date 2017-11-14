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
          movieName: 'Capitão América - Guerra Cívil', 
          movieYear: '2016',
          movieGenre: "Action",
          movieOverviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore animi quia, nihil corporis quasi dignissimos veniam debitis eveniet? Deleniti libero rem fugiat veritatis doloremque, veniam exercitationem. Sed, doloremque harum!",
        },
        {
          movieImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/9ORTc9UUTtRq7pssuu5OXNG3W5m.jpg",
          movieName: 'Superman',
          movieYear: '2017',
          movieGenre: "Adventure",
          movieOverviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore animi quia, nihil corporis quasi dignissimos veniam debitis eveniet? Deleniti libero rem fugiat veritatis doloremque, veniam exercitationem. Sed, doloremque harum!",
        },
        {
          movieImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/fsYg2p0l4xMdSy3TKMcnmh00Vz4.jpg",
          movieName: 'A Série Divergente: Convergente',
          movieYear: '2016',
          movieGenre: "Action",
          movieOverviewText : "Tris (Shailene Woodley), Quatro (Theo James) e seus amigos estão prestes a pular a cerca que divide o mundo no qual até hoje viveram e um novo mundo até então por eles desconhecido, após terem descoberto que a distópica.",
        },
        {
          movieImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/jAXZMCG9rEXHUvfxTwEYEmO1V4p.jpg",
          movieName: 'Capitão América - Guerra Cívil', 
          movieYear: '2016',
          movieGenre: "Action",
          movieOverviewText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore animi quia, nihil corporis quasi dignissimos veniam debitis eveniet? Deleniti libero rem fugiat veritatis doloremque, veniam exercitationem. Sed, doloremque harum!",
        },
        {
          movieImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/4gX0M4RifoqXBz9LejqQ6wYPqYo.jpg",
          movieName: 'Minios', 
          movieYear: '2016',
          movieGenre: "Animation",
          movieOverviewText : "Seres amarelos milenares, os minions têm uma missão: servir os maiores vilões. Em depressão desde a morte de seu antigo mestre, eles tentam encontrar um novo chefe.",
        },
        {
          movieImage: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/ujQthWB6c0ojlARk28NSTmqidbF.jpg",
          movieName: 'Mulher Maravilha',
          movieYear: '2016',
          movieGenre: "Action",
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


  filterMovies(){
    console.log('Filter Movies');
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
