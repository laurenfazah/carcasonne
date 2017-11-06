import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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

  componentDidMount() {
    this._updatePositionPlaced()
  }

  componentWillMount() {
    this._buildBoard()
  }

  _buildBoard() {
    let starterTile = this._findTile(8)

    this._placeTile(starterTile, [0, 0])
    this._pullTile(starterTile)
  }

  _findTile(id) {
    return _.find(this.state.deck, {id: id})
  }

  _placeTile(tile, position) {
    tile.position = position

    // need to figure out why this workaround needs to happen
    this.state.playedTiles.push(tile)
    this.setState({
      playedTiles: this.state.playedTiles
    })
  }

  _pullTile(tile) {
    _.pull(this.state.deck, tile)

    let nextTile = this.state.deck.pop()
    this.setState({
      currentTile: nextTile,
      deck: this.state.deck
    })
  }

  _placeNextTile() {
    // need to grab position clicked, for now [0,1]
    this._placeTile(this.state.currentTile, [0,1])
    this._pullTile(this.state.currentTile)
  }

  _updatePositionPlaced() {
    let lastTile = _.last(this.state.playedTiles)
    lastTile.domPosition = {
      offsetTop: this.domNode.offsetTop,
      offsetLeft: this.domNode.offsetLeft
    }
  }

  render() {
    console.log("Next tile to place: ", this.state.currentTile)
    const tiles = this.state.playedTiles.map((tile, i) => {

      return <Tile
                key={i}
                meta={tile}
                positionRef={node => this.domNode = node}
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
