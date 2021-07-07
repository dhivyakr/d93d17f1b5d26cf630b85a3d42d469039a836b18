import React, { Component } from 'react'

export default class Header extends Component {
state = {date: new Date()}
  render() {
    return (
      <div>
        <div>
          
          <p> {this.state.date.toLocaleDateString()}</p>
        </div>
        <div>
          
        </div>
      </div>
    )
  }
}