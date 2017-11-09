import React, { Component } from 'react'
import Board from './Board'
import TileStock from '../data/TileStock'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stock: new TileStock()
    }
  }

  render() {
    return (
      <Board
        deck={this.state.stock.shuffledDeck()}
        tileSize="40"
      >
      </Board>
    );
  }
}

export default Game
