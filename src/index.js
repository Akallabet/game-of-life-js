const reduce = (fn, acc) => (arr) => arr.reduce(fn, acc)
const map = (fn) => reduce((acc, value, index) => [...acc, fn(value, index)], [])
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, fn) => fn(y), x)
const map2D = (fn) => map((row, y) => map((el, x) => fn(el, y, x))(row))
const sum = (total, n) => total + n

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

export const getNghbrs = (ctxt) => pipe(map(isAlive(ctxt)), reduce(sum, 0))(nghbrs)

const calcNextState = ([nbrCells, cell]) => (nbrCells === 3 || (cell && nbrCells === 2) ? 1 : 0)
const addNeighbors = (world) => (cell, y, x) => [getNghbrs([world, y, x]), cell]
const mapNeighbors = (world) => map2D(addNeighbors(world))(world)
export const evolve = pipe(mapNeighbors, map2D(calcNextState))
