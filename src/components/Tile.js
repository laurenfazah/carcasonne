import React, { Component } from 'react'

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      neighbors: [false, false, false, false],
    }
  }

  render() {
    return (
      <li className="tile">

      </li>
    )
  }
}

export default Tile
