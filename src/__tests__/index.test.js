import { expect } from '@jest/globals'
import gameOfLife, { buildGetLiveNbrCells } from '../index'

it('three cells in a row [0,1,0] => [0,0,0]', () => {
  expect(gameOfLife([[0, 1, 0]])).toEqual([[0, 0, 0]])
})

it('three cells in a row [0,0,1] => [0,0,0]', () => {
  expect(gameOfLife([[0, 0, 1]])).toEqual([[0, 0, 0]])
})

it('three cells in a row [1,0,0] => [0,0,0]', () => {
  expect(gameOfLife([[1, 0, 0]])).toEqual([[0, 0, 0]])
})

it('three cells in a row [1,1,0] => [0,0,0]', () => {
  expect(gameOfLife([[1, 1, 0]])).toEqual([[0, 0, 0]])
})

it('three cells in a row [1,1,1] => [0,1,0]', () => {
  expect(gameOfLife([[1, 1, 1]])).toEqual([[0, 1, 0]])
})

it('three cells in a row [1,0,1] => [0,1,0]', () => {
  expect(gameOfLife([[1, 0, 1]])).toEqual([[0, 1, 0]])
})

it('three cells in two rowa [[1,0,1][0,0,0]] => [[0,0,0],[0,1,0]]', () => {
  const actual = gameOfLife([
    [1, 0, 1],
    [0, 0, 0],
  ])
  expect(actual).toEqual([
    [0, 1, 0],
    [0, 1, 0],
  ])
})

it('getLiveNbrCells', () => {
  const world = [
    [1, 0, 1],
    [0, 0, 0],
  ]
  const liveNbrCells = buildGetLiveNbrCells(world)(1, 1)

  expect(liveNbrCells).toEqual(2)
})
