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

  componentWillMount() {
    // console.log(this.state.stock.shuffledDeck())
  }

  componentDidMount() {
    // console.log(this.state.stock.shuffledDeck())
  }

  render() {
    return (
      <Board
        deck={this.state.stock.shuffledDeck()}
      >
      </Board>
    );
  }
}

export default Game
