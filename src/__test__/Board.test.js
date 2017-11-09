import React from 'react'
import { shallow, mount } from 'enzyme'
import _ from 'lodash'
import Board from '../components/Board'
import TileStock from '../data/TileStock'

const stock = new TileStock()
const deck = stock.shuffledDeck()

describe('board', () => {
  it('loads board with deck', () => {
    const _buildBoardMock = jest.fn()
    const board = mount(<Board deck={deck} />)
    board.instance()._buildBoard = _buildBoardMock
    board.update()
  })
})
