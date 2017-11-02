import React, { Component } from 'react'

class Tile extends Component {
  render() {
    return (
      <li>
        <p>Top: {this.props.meta.top}</p>
        <p>Right: {this.props.meta.right}</p>
        <p>Bottom: {this.props.meta.bottom}</p>
        <p>Left: {this.props.meta.left}</p>
      </li>
    )
  }
}

export default Tile
