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
            <div>
                {this.state.showTimer && <Timer />}
                <button>Show / Hide Timer </button>
            </div>
        )
    }
}

export default App
