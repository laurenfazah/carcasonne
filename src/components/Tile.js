import React, { Component } from 'react'
import styleMap from '../data/styleMap'

class Tile extends Component {
  constructor(props) {
    super(props)
    this.styles = {
   	  top: props.meta.domPosition.offsetTop,
   	  left: props.meta.domPosition.offsetLeft
    }
  }

  render() {
    return (
      <li
        className="tile"
        ref={this.props.positionRef}
	      style={this.styles}
      >
      </li>
    )
  }
}

export default Tile
