import React, { Component } from 'react'
import Tile from './Tile'
import _ from 'lodash'

class Board extends Component {
  constructor(props) {
    super(props);
    this.tileSize = 30
    this.state = {
      deck: this.props.deck,
      playedTiles: [],
      currentTile: false
    }
  }

  componentDidMount() {
    this._buildBoard()
    this._updatePositionPlaced()
  }

  componentWillMount() {
  }

  _buildBoard() {
    let starterTile = this._findTile(8)

    this._placeTile(starterTile, [363, 95])
    this._pullTile(starterTile)
  }

  _findFreeNeighbors() {
    return this.state.playedTiles.map(tile => {
      return [tile, tile.neighbors.map((neighbor, i) => {
        if (!neighbor) {
          return i
        }
      })]
    })
  }

  _findTile(id) {
    return _.find(this.state.deck, {id: id})
  }

  _placeTile(tile, domPosition) {
    tile.domPosition = {
      offsetTop: domPosition[0],
      offsetLeft: domPosition[1]
    }

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
    // need to grab position clicked, for now random
    let options = this._showAvailableSpaces()
    this._placeTile(this.state.currentTile, _.sample(options))
    this._pullTile(this.state.currentTile)
  }

  _showAvailableSpaces() {
  	const availSpaces = this._findFreeNeighbors()
    return availSpaces.map(space => {
      return space[1].map(neighbor => {
        // brute force now, refactor later
        let lastTile = _.last(this.state.playedTiles)
        if (neighbor === 0) {
          return [lastTile.domPosition.offsetTop - this.tileSize, lastTile.domPosition.offsetLeft]
        }
        if (neighbor === 1) {
          return [lastTile.domPosition.offsetTop, lastTile.domPosition.offsetLeft + this.tileSize]
        }
        if (neighbor === 2) {
          return [lastTile.domPosition.offsetTop + this.tileSize, lastTile.domPosition.offsetLeft]
        }
        if (neighbor === 3) {
          return [lastTile.domPosition.offsetTop, lastTile.domPosition.offsetLeft - this.tileSize]
        }
      }, this)
    }, this)[0]
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
    const tiles =  this.state.deck.map((tile, i, arr) => {
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
      <p>Jhuns the best</p>
      </ul>
    );
  }
}

export default Board
