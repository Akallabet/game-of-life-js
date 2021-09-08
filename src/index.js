import { addIndex, map } from 'ramda'

const mapI = addIndex(map)

const isAlive = (world, y, x) => (world[y] && world[y][x]) || 0

export const getLiveNbrCells = (world, y, x) =>
  isAlive(world, y, x - 1) +
  isAlive(world, y, x + 1) +
  isAlive(world, y - 1, x - 1) +
  isAlive(world, y - 1, x) +
  isAlive(world, y - 1, x + 1) +
  isAlive(world, y + 1, x - 1) +
  isAlive(world, y + 1, x) +
  isAlive(world, y + 1, x + 1)

const calcNextState = (cell, liveNbrCells) =>
  (!cell && liveNbrCells === 3) || (cell && (liveNbrCells === 2 || liveNbrCells === 3)) ? 1 : 0

const evolveCell = (world, y) => (cell, x) => calcNextState(cell, getLiveNbrCells(world, y, x))

const evolveRow = (world) => (row, y) => mapI(evolveCell(world, y), row)

export const evolve = (world) => mapI(evolveRow(world), world)
