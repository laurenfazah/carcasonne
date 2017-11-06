import React, { Component } from 'react'
import Tile from './Tile'

class GhostTile extends Component {
  debugger
  constructor(props) {
    super(props)
    this.styles = {
      top: this.props.positions[0],
      left:this.props.positions[1]
    }
  }

  render() {
    return (
      <li
        className="ghost tile"
        ref={this.props.positionRef}
        style={this.styles}
      >
      </li>
    )
  }
}

export default GhostTile
