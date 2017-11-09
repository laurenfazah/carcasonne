import React, { Component } from 'react'

class Tile extends Component {
  constructor(props) {
    super(props)
    this.styles = {
   	  top: props.meta.domPosition.offsetTop,
   	  left: props.meta.domPosition.offsetLeft,
      height: props.tileSize,
      width: props.tileSize
    }
  }

  render() {
    return (
      <li
        className={`${this.props.meta.design} tile`}
        ref={this.props.positionRef}
	      style={this.styles}
      >
      </li>
    )
  }
}

export default Tile
