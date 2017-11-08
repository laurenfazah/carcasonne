import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'
import Board from '../components/Board'
import TileStock from '../data/TileStock'

const stock = new TileStock()

describe('board', () => {
  it('loads board with deck', () => {
    const _buildBoardMock = jest.fn()
    const board = shallow(<Board deck={stock} />)
    board.instance()._buildBoard = _buildBoardMock
    board.update()
  })
})
