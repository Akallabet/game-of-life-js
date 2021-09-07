const buildRowNbhr = (world) => (y, x) => (world[y][x - 1] || 0) + (world[y][x + 1] || 0)
const buildDiagonalNbhr = (world) => (y, x) =>
  world[y - 1] ? (world[y - 1][x - 1] || 0) + (world[y - 1][x + 1] || 0) : 0

export const buildGetLiveNbrCells = (world) => {
  const rowNbhr = buildRowNbhr(world)
  const diagonalNbhr = buildDiagonalNbhr(world)
  return (y, x) => rowNbhr(y, x) + diagonalNbhr(y, x)
}

export default (world = [[]]) => {
  const getLiveNbrCells = buildGetLiveNbrCells(world)

  return world.map((row, y) => {
    return row.reduce((newRow, cell, x) => {
      const liveNbrCells = getLiveNbrCells(y, x)
      return [...newRow, liveNbrCells === 2 ? 1 : 0]
    }, [])
  })
}
