'use strict'

import React, { Component } from 'react'


class Timer extends Component{
  constructor () {
    super()
    this.state = {
      time: 0
    }

    this.timer;
  }

  componentWillMount () {
    console.log('oi')
  }

  componentDidMount () {

    this.time = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }


  componentWillMount(){
    clearInterval(this.timer)
  }

  render () {
    return<div> timer: {this.state.time} </div>
  }
}
export default Timer
