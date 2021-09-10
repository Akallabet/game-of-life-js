const nghbrs = [
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]

const isAlive =
  ([world, y, x]) =>
  ([ny, nx]) =>
    (world[y + ny] && world[y + ny][x + nx]) || 0

export const getLiveNbrCells = (ctxt) =>
  nghbrs.map(isAlive(ctxt)).reduce((sum, n) => sum + n, 0)

const calcNextState = (liveNbrCells, cell) =>
  liveNbrCells === 3 || (cell && liveNbrCells === 2) ? 1 : 0
const evolveCell = (world, y) => (cell, x) => calcNextState(getLiveNbrCells([world, y, x]), cell)
const evolveRow = (world) => (row, y) => row.map(evolveCell(world, y))
export const evolve = (world) => world.map(evolveRow(world))
