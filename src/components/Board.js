import React, { Component } from 'react'
import Tile from './Tile'
import tilesCollection from '../data/tilesCollection'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {tiles: tilesCollection}
  }

  render() {
    const tiles = this.state.tiles && this.state.tiles.map((tile) => {
      return <Tile key={tile.key} meta={tile.meta}/>
    })

    return (
      <ul>
        {tiles}
      </ul>
    );
  }
}

export default Board
