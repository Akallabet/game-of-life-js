import { addIndex, map, reduce } from 'ramda'

const mapI = addIndex(map)
const reduceI = addIndex(reduce)

const defTo = (value) => value || 0

export const getLiveNbrCells = (world, y, x) =>
  defTo(world[y][x - 1]) +
  defTo(world[y][x + 1]) +
  (world[y - 1]
    ? defTo(world[y - 1][x - 1]) + defTo(world[y - 1][x]) + defTo(world[y - 1][x + 1])
    : 0) +
  (world[y + 1]
    ? defTo(world[y + 1][x - 1]) + defTo(world[y + 1][x]) + defTo(world[y + 1][x + 1])
    : 0)

export default (world = [[]]) =>
  mapI(
    (row, y) =>
      reduceI(
        (newRow, cell, x) => {
          const liveNbrCells = getLiveNbrCells(world, y, x)
          const isAlive =
            (!cell && liveNbrCells === 3) || (cell && (liveNbrCells === 2 || liveNbrCells === 3))
          return [...newRow, isAlive ? 1 : 0]
        },
        [],
        row
      ),
    world
  )
