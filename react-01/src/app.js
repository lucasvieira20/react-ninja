'use strict'

// import React from 'react'
// Short Render Notation

import React, { Component } from 'react'
import Square from './square'

//Render Component like a Class
class App extends Component{
  render(){
    return(
      <div className='content' onClick={function(e){
          console.log('oi');
        }}>
        {['blue','red','green','red'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

//Render Component like a Const / Variable
// const App = React.createClass({
//
//   render: function () {
//     return (
//       <div className='content'>
//         <Title name="Lucas" lastName="Barreto" />
//       </div>
//     )
//   }
// })

export default App
