'use strict'

import React, { Component } from 'react'
import Timer from './timer'

//Render Component like a Class
class App extends Component{
  constructor(){
    super()
    this.state = {
      showTimer : true
    }
  }

  render () {
    return(
      {this.state.showTimer && <Timer />}

      <button>Show / Hide Timer </button>
    )
  }
}

export default App
