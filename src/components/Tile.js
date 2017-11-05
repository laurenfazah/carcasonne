import React, { Component } from 'react'
import styleMap from '../data/styleMap'

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      neighbors: [false, false, false, false],
    }
  }

  _highlightAvailable() {
    let neighbors = this.state.neighbors
    if (!neighbors[0]) {
      console.log("top free")
    }
    if (!neighbors[1]) {
      console.log("right free")
    }
    if (!neighbors[2]) {
      console.log("bottom free")
    }
    if (!neighbors[3]) {
      console.log("left free")
    }
  }

  render() {
    return (
      <li
        className={styleMap[this.props.meta.position] +" tile"}
        ref={this.props.positionRef}
      >

      </li>
    )
  }
}

export default Tile
