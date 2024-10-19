import React, { Component } from 'react'
import plant from '../Plant.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='container text-center'>
        <img src={plant} />
      </div>
    )
  }
}
