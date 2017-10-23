'use strict'

import React, { Component } from 'react'


class Timer extends Component{
  constructor () {
    super()
    this.state = {
      time: 0
    }
  }

  componentWillMount () {
    console.log('oi')
  }

  componentDidMount () {

    setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)

    console.log('Morreu')
  }

  render () {
    return<div> timer: {this.state.time} </div>
  }
}
export default Timer
