import React, { Component } from 'react'
import Tile from './Tile'
import _ from 'lodash'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: this.props.deck,
      playedTiles: [],
      currentTile: false
    }
  }

  componentWillMount() {
    console.log(this.state.deck)
    this._buildBoard()
  }

  _buildBoard() {
    this._placeTile(8, [0, 0])
    this._pullTile(8)
  }

  _findTile(id) {
    // need to figure out why this workaround needs to happen
    let foundTile;
    this.state.deck.forEach(tile => {
      if (tile.id === id) {
        foundTile = tile
      }
    })
    return foundTile;
  }

  _placeTile(id, position) {
    let foundTile = this._findTile(id)
    foundTile.position = position

    // need to figure out why this workaround needs to happen
    this.state.playedTiles.push(foundTile)
    this.setState({
      playedTiles: this.state.playedTiles
    })
  }

  _pullTile(id) {
    this.state.deck.forEach(tile => {
      if (tile.id === id) {
        _.pull(this.state.deck, tile)
        this.setState({
          deck: this.state.deck
        })
      }
    })
  }

  _updatePositionPlaced(tileNode) {
    let lastTile = _.last(this.state.playedTiles)
    lastTile.domPosition = {
      offsetTop: tileNode.offsetTop,
      offsetLeft: tileNode.offsetLeft
    }
  }

  _placeNextTile() {
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
      <ul
        className="board"
        onClick={this._placeNextTile.bind(this)}
      >
        {tiles}
      </ul>
    );
  }
}

export default Board
