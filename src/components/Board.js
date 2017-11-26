import React, { Component } from 'react'
import Tile from './Tile'
import Panel from './Panel'
import GhostTile from './GhostTile'
import _ from 'lodash'

class Board extends Component {
  constructor(props) {
    super(props);
    this.tileSize = parseInt(this.props.tileSize)
    // this.currentTile = false
    this.deck = this.props.deck
    this.state = {
      playedTiles: [],
      currentTile: false
    }
  }

  componentWillMount() {
    this._buildBoard()
  }

  _availableSpaces() {
    const freeNeighbors = this._findFreeNeighbors()
    const availSpaces = freeNeighbors.map(space => {
      let tile = space[0]
      let neighbors = space[1]
      return neighbors.map(neighbor => {
        let position =  this._setPosition(tile, neighbor)
        return position
      }, this)
    }, this)
    return _.flatten(availSpaces)
  }

  _buildBoard() {
    let starterTile = this._findTile(8)

    this._placeTile(starterTile, [150, 150])
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

  _getPositionClicked(event, spaces, tileSize) {
    let x = event.clientX
    let y = event.clientY

    let placement = spaces.filter(space => {
    	return (_.inRange(y, space[0], space[0]+tileSize)) &&   (_.inRange(x, space[1], space[1]+tileSize))
      // update neighbor to true
    })
    this._placeNextTile(placement[0])
  }

  _placeTile(tile, domPosition) {
    if (tile && domPosition) {
      tile.domPosition = {
        offsetTop: domPosition[0],
        offsetLeft: domPosition[1]
      }

      this.state.playedTiles.push(tile)
      this.setState({ playedTiles: this.state.playedTiles })
    }
  }

  _pullTile(tile) {
    _.pull(this.deck, tile)

    const nextTile = this.deck.pop()
    // this.currentTile = nextTile
    this.setState({ currentTile: nextTile })
  }

  _placeNextTile(placement) {
    this._placeTile(this.state.currentTile, placement)
    this._pullTile(this.state.currentTile)
  }

  _rotateTile(direction) {
    const tileBorders = this.state.currentTile.borders
    const tileRotation = this.state.currentTile.rotation
    switch (direction) {
      case "left":
        tileBorders.push(tileBorders.shift())
        if (tileRotation === 1) {
          this.state.currentTile.rotation = 4
        } else {
          this.state.currentTile.rotation--
        }
        break
      case "right":
        tileBorders.unshift(tileBorders.pop())
        if (tileRotation < 4) {
          this.state.currentTile.rotation++
        } else {
          this.state.currentTile.rotation = 1
        }
        break
    }
    this.setState({ currentTile: this.state.currentTile })
  }

  _setPosition(tile, neighbor) {
    return {
      0: [tile.domPosition.offsetTop - this.tileSize, tile.domPosition.offsetLeft],
      1: [tile.domPosition.offsetTop, tile.domPosition.offsetLeft + this.tileSize],
      2: [tile.domPosition.offsetTop + this.tileSize, tile.domPosition.offsetLeft],
      3: [tile.domPosition.offsetTop, tile.domPosition.offsetLeft - this.tileSize]
    }[neighbor]
  }

  render() {
    const availSpaces = this._availableSpaces()
    const ghostTiles = availSpaces.map((coords, i) => {
      return <GhostTile
                key={i}
                positions={coords}
                positionRef={node => this.domNode = node}
                onClick={(event) => this._getPositionClicked(event, availSpaces, this.tileSize)}
                tileSize={this.tileSize}
              />
    })

    const tiles = this.state.playedTiles.map((tile, i) => {
      return <Tile
                key={i}
                meta={tile}
                positionRef={node => this.domNode = node}
                tileSize={this.tileSize}
              />
    })

    return (
      <ul
        className="board"
      >
        {tiles}
        {ghostTiles}
        <Panel
          currentTile={this.state.currentTile}
          rotateTile={this._rotateTile.bind(this)}
        />
      </ul>
    );
  }
}

export default Board
