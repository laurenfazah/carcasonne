import React, { Component } from 'react'
import styleMap from '../data/styleMap'

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      neighbors: [false, false, false, false],
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
