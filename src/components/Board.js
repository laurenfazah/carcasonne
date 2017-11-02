import React, { Component } from 'react'
import Tile from './Tile'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: this.props.deck,
      playedTiles: []
    }
  }

  componentWillMount() {
    this._buildBoard()
  }

  _buildBoard() {
    this._placeStarter()
  }

  _placeStarter() {
    this._placeTile("D")
  }

  _placeTile(design) {
    this._pullTile(design)
    // place onto board/grid
    // get position placed and add to obj; playedTiles
    let tileWithPosition;
    this.setState({
      deck: this.state.deck,
      playedTiles: this.state.playedTiles.push(tileWithPosition)
    })
  }

  _pullTile(design) {
    this.state.deck.filter((tile) => {
      if (tile.design === design) {
        // build in === 0 validation
        tile.quantity--
        return tile
      }
    })
  }

  render() {
    const tiles = this.state.playedTiles.map((tile, i) => {
      return <Tile key={i} meta={tile.meta}/>
    })

    return (
      <ul>
      {tiles}
      </ul>
    );
  }
}

export default Board
