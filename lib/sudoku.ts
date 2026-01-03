export function isCorrectMove(
  solution: number[][],
  row: number,
  col: number,
  value: number
) {
  return solution[row][col] === value;
}
