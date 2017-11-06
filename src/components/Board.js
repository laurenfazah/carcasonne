import React, { Component } from 'react'
import Tile from './Tile'
import _ from 'lodash'

class Board extends Component {
  constructor(props) {
    super(props);
    this.tileSize = 30
    this.currentTile = false
    this.deck = this.props.deck
    this.state = {
      playedTiles: []
    }
  }

  componentDidMount() {
    this._updatePositionPlaced()
  }

  componentWillMount() {
    this._buildBoard()
  }

  _availableSpaces() {
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
    return _.find(this.deck, {id: id})
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
    _.pull(this.deck, tile)

    let nextTile = this.deck.pop()
    this.currentTile = nextTile
  }

  _placeNextTile() {
    // need to grab position clicked, for now random
    let options = this._showAvailableSpaces()
    this._placeTile(this.currentTile, _.sample(options))
    this._pullTile(this.currentTile)
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
    const ghostTiles = this._availableSpaces().map((space, i) => {
      return <Tile
                key={i}
                ghost="ghost"
                meta={
                  {domPosition: {
                    offsetTop: space[0],
                    offsetLeft: space[1]
                  }}
                }
                positionRef={node => this.domNode = node}
              />
    })

    const tiles = this.state.playedTiles.map((tile, i) => {
      return <Tile
                key={i}
                ghost={false}
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
        {ghostTiles}
      </ul>
    );
  }
}

export default Board
