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
    // need to figure out why this workaround needs to happen
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

  _updatePositionPlaced(tileNode) {
    let lastTile = this.state.playedTiles[this.state.playedTiles.length - 1]
    lastTile.domPosition = {
      offsetTop: tileNode.offsetTop,
      offsetLeft: tileNode.offsetLeft
    }
  }

  render() {
    const tiles = this.state.playedTiles.map((tile, i) => {
      return <Tile
                key={i}
                meta={tile}
                positionRef={tileNode => this._updatePositionPlaced(tileNode)}
              />
    })

    return (
      <ul className="board">
        {tiles}
      </ul>
    );
  }
}

export default Board
