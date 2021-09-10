import { expect } from '@jest/globals'
import { evolve, getLiveNbrCells } from '../index'

it('three cells in a row [0,1,0] => [0,0,0]', () => {
  expect(evolve([[0, 1, 0]])).toEqual([[0, 0, 0]])
})

it('three cells in a row [0,0,1] => [0,0,0]', () => {
  expect(evolve([[0, 0, 1]])).toEqual([[0, 0, 0]])
})

it('three cells in a row [1,0,0] => [0,0,0]', () => {
  expect(evolve([[1, 0, 0]])).toEqual([[0, 0, 0]])
})

it('three cells in a row [1,1,0] => [0,0,0]', () => {
  expect(evolve([[1, 1, 0]])).toEqual([[0, 0, 0]])
})

it('three cells in a row [1,1,1] => [0,1,0]', () => {
  expect(evolve([[1, 1, 1]])).toEqual([[0, 1, 0]])
})

it('three cells in a row [1,0,1] => [0,0,0]', () => {
  const actual = evolve([[1, 0, 1]])
  expect(actual).toEqual([[0, 0, 0]])
})

it('three cells in two rows [[1,0,1][0,0,0]] => [[0,0,0],[0,1,0]]', () => {
  const actual = evolve([
    [1, 0, 1],
    [0, 0, 0],
  ])
  expect(actual).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ])
})

it('getLiveNbrCells', () => {
  const world = [
    [1, 0, 1],
    [0, 0, 0],
  ]
  const liveNbrCells = getLiveNbrCells([world, 1, 1])

  expect(liveNbrCells).toEqual(2)
})

it('three cells in two rows [[1,1,1][0,0,0]] => [[0,1,0],[0,1,0]]', () => {
  const actual = evolve([
    [1, 1, 1],
    [0, 0, 0],
  ])
  expect(actual).toEqual([
    [0, 1, 0],
    [0, 1, 0],
  ])
})

it('square with Tshape cells', () => {
  const actual = evolve([
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ])
  expect(actual).toEqual([
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ])
})

it('getLiveNbrCells Tshaped', () => {
  const world = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ]

  expect(getLiveNbrCells([world, 1, 0])).toEqual(4)
  expect(getLiveNbrCells([world, 1, 2])).toEqual(4)
  expect(getLiveNbrCells([world, 0, 1])).toEqual(3)
})

it('square with Yshape cells', () => {
  const actual = evolve([
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
  ])
  expect(actual).toEqual([
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ])
})

it('square with Lshape cells', () => {
  const actual = evolve([
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0],
  ])
  expect(actual).toEqual([
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0],
  ])
})

it('blinker', () => {
  const actual = evolve([
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ])
  expect(actual).toEqual([
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ])
})

it('glider', () => {
  const actual = evolve([
    [1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ])
  expect(actual).toEqual([
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ])
})
