export function isCorrectMove(
  solution: number[][],
  row: number,
  col: number,
  value: number
) {
  return solution[row][col] === value;
}

export function isSolved(
  puzzle: number[][],
  solution: number[][]
) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (puzzle[i][j] !== solution[i][j]) {
        return false;
      }
    }
  }
  return true;
}
