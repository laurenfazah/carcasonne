import React, { Component } from 'react'

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      borders: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      design: props.meta.design
    }
  }

  render() {
    return (
      <li>
      </li>
    )
  }
}

export default Tile
