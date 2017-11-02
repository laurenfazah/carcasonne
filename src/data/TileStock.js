import _ from 'lodash'

class TileStock {
  constructor() {
    this.deck = [
      {design: "A", quantity: 2, borders: [ 'field', 'field', 'road', 'field' ], pennant: false },
      {design: "B", quantity: 4, borders: [ 'field', 'field', 'field', 'field' ], pennant: false },
      {design: "C", quantity: 1, borders: [ 'city', 'city', 'city', 'city' ], pennant: true },
      {design: "D", quantity: 3, borders: [ 'city', 'road', 'field', 'road' ], pennant: false },
      {design: "E", quantity: 5, borders: [ 'city', 'field', 'field', 'field' ], pennant: false },
      {design: "F", quantity: 2, borders: [ 'field', 'city', 'field', 'city' ], pennant: true },
      {design: "G", quantity: 1, borders: [ 'field', 'city', 'field', 'city' ], pennant: false },
      {design: "H", quantity: 3, borders: [ 'city', 'field', 'city', 'field' ], pennant: false },
      {design: "I", quantity: 2, borders: [ 'city', 'field', 'field', 'city' ], pennant: false },
      {design: "J", quantity: 3, borders: [ 'city', 'road', 'road', 'field' ], pennant: false },
      {design: "K", quantity: 3, borders: [ 'city', 'field', 'road', 'road' ], pennant: false },
      {design: "L", quantity: 3, borders: [ 'city', 'road', 'road', 'road' ], pennant: false },
      {design: "M", quantity: 2, borders: [ 'city', 'field', 'field', 'city' ], pennant: true },
      {design: "N", quantity: 3, borders: [ 'city', 'field', 'field', 'city' ], pennant: false },
      {design: "O", quantity: 2, borders: [ 'city', 'road', 'road', 'city' ], pennant: true },
      {design: "P", quantity: 3, borders: [ 'city', 'road', 'road', 'city' ], pennant: false },
      {design: "Q", quantity: 1, borders: [ 'city', 'city', 'field', 'city' ], pennant: true },
      {design: "R", quantity: 3, borders: [ 'city', 'city', 'field', 'city' ], pennant: false },
      {design: "S", quantity: 2, borders: [ 'city', 'city', 'road', 'city' ], pennant: true },
      {design: "T", quantity: 1, borders: [ 'city', 'city', 'road', 'city' ], pennant: false },
      {design: "U", quantity: 8, borders: [ 'road', 'field', 'road', 'field' ], pennant: false },
      {design: "V", quantity: 9, borders: [ 'field', 'field', 'road', 'road' ], pennant: false },
      {design: "W", quantity: 4, borders: [ 'field', 'road', 'road', 'road' ], pennant: false },
      {design: "X", quantity: 1, borders: [ 'road', 'road', 'road', 'road' ], pennant: false }
    ]
  }

  shuffledDeck() {
    return _.shuffle(this.deck)
  }
}

export default TileStock
