import React, { Component } from 'react'

class Panel extends Component {
  constructor(props) {
    super(props)
    this.currentTile = this.props.currentTile
  }
  render() {
    return (
      <div className="panel">
        <h3>Next Tile to Place:</h3>
        <div
          className={`${this.props.currentTile.design} tile`}
        >
        </div>
      </div>
    )
  }
 }

export default Panel
