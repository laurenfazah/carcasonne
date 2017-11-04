import React, { Component } from 'react'
import Tile from './Tile'
import _ from 'lodash'

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
    this._placeTile("D", [0, 0])
    this._pullTile("D")
  }

  _findTile(design) {
    let foundTile;
    this.state.deck.forEach(tile => {
      if (tile.design === design) {
        foundTile = tile
      }
    })
    return foundTile;
  }

  _placeTile(design, position) {
    let foundTile = this._findTile(design)
    foundTile.position = position

    // need to figure out why this workaround needs to happen
    this.state.playedTiles.push(foundTile)
    this.setState({
      deck: this.state.deck,
      playedTiles: this.state.playedTiles
    })
  }

  _pullTile(design) {
    this.state.deck.filter(tile => {
      if (tile.design === design) {
        // build in === 0 validation
        tile.quantity--
        return tile
      }
    })
  }

  render() {
    // debugger;
    const tiles = this.state.playedTiles.map((tile, i) => {
      return <Tile key={i} meta={tile}/>
    })

    return (
      <ul>
      {tiles}
      </ul>
    );
  }
}

export default Board
