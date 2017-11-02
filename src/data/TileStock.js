import _ from 'lodash'

class TileStock {
  constructor() {
    this.deck = [
      {id: "A", quantity: 2, borders: [ 'field', 'field', 'road', 'field' ], pennant: false },
      {id: "B", quantity: 4, borders: [ 'field', 'field', 'field', 'field' ], pennant: false },
      {id: "C", quantity: 1, borders: [ 'city', 'city', 'city', 'city' ], pennant: true },
      {id: "D", quantity: 3, borders: [ 'city', 'road', 'field', 'road' ], pennant: false },
      {id: "E", quantity: 5, borders: [ 'city', 'field', 'field', 'field' ], pennant: false },
      {id: "F", quantity: 2, borders: [ 'field', 'city', 'field', 'city' ], pennant: true },
      {id: "G", quantity: 1, borders: [ 'field', 'city', 'field', 'city' ], pennant: false },
      {id: "H", quantity: 3, borders: [ 'city', 'field', 'city', 'field' ], pennant: false },
      {id: "I", quantity: 2, borders: [ 'city', 'field', 'field', 'city' ], pennant: false },
      {id: "J", quantity: 3, borders: [ 'city', 'road', 'road', 'field' ], pennant: false },
      {id: "K", quantity: 3, borders: [ 'city', 'field', 'road', 'road' ], pennant: false },
      {id: "L", quantity: 3, borders: [ 'city', 'road', 'road', 'road' ], pennant: false },
      {id: "M", quantity: 2, borders: [ 'city', 'field', 'field', 'city' ], pennant: true },
      {id: "N", quantity: 3, borders: [ 'city', 'field', 'field', 'city' ], pennant: false },
      {id: "O", quantity: 2, borders: [ 'city', 'road', 'road', 'city' ], pennant: true },
      {id: "P", quantity: 3, borders: [ 'city', 'road', 'road', 'city' ], pennant: false },
      {id: "Q", quantity: 1, borders: [ 'city', 'city', 'field', 'city' ], pennant: true },
      {id: "R", quantity: 3, borders: [ 'city', 'city', 'field', 'city' ], pennant: false },
      {id: "S", quantity: 2, borders: [ 'city', 'city', 'road', 'city' ], pennant: true },
      {id: "T", quantity: 1, borders: [ 'city', 'city', 'road', 'city' ], pennant: false },
      {id: "U", quantity: 8, borders: [ 'road', 'field', 'road', 'field' ], pennant: false },
      {id: "V", quantity: 9, borders: [ 'field', 'field', 'road', 'road' ], pennant: false },
      {id: "W", quantity: 4, borders: [ 'field', 'road', 'road', 'road' ], pennant: false },
      {id: "X", quantity: 1, borders: [ 'road', 'road', 'road', 'road' ], pennant: false }
    ]
  }

  shuffledDeck() {
    return _.shuffle(this.deck)
  }
}

export default TileStock
