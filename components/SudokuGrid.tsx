"use client";

import { useEffect, useState } from "react";
import SudokuCell from "./SudokuCell";
import MistakeCounter from "./MistakeCounter";
import AdModal from "./AdModal";
import { isCorrectMove } from "@/lib/sudoku";

export default function SudokuGrid() {
  const [puzzle, setPuzzle] = useState<number[][]>([]);
  const [solution, setSolution] = useState<number[][]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    fetch("/api/sudoku")
      .then(res => res.json())
      .then(data => {
        setPuzzle(data.puzzle);
        setSolution(data.solution);
      });
  }, []);

  function handleChange(row: number, col: number, value: number) {
    if (locked) return;

    if (!isCorrectMove(solution, row, col, value)) {
      const next = mistakes + 1;
      setMistakes(next);
      if (next > 3) setLocked(true);
      return;
    }

    const copy = puzzle.map(r => [...r]);
    copy[row][col] = value;
    setPuzzle(copy);
  }

  function unlockGame() {
    setMistakes(0);
    setLocked(false);
  }

  if (!puzzle.length) return <p>Loading…</p>;

  return (
    <>
      <MistakeCounter count={mistakes} />

      <div className="grid grid-cols-9 gap-1 mt-4">
        {puzzle.map((row, r) =>
          row.map((value, c) => (
            <SudokuCell
              key={`${r}-${c}`}
              value={value}
              disabled={value !== 0 || locked}
              onChange={(v) => handleChange(r, c, v)}
            />
          ))
        )}
      </div>

      {locked && <AdModal onContinue={unlockGame} />}
    </>
  );
}
