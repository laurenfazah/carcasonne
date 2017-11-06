import React, { Component } from 'react'

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
        onClick={this.props.onClick}
      >
      </li>
    )
  }
}

export default GhostTile
