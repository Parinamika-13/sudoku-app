"use client";

import { useEffect, useState } from "react";
import SudokuCell from "./SudokuCell";
import MistakeCounter from "./MistakeCounter";
import AdModal from "./AdModal";
import { isCorrectMove } from "../lib/sudoku";

export default function SudokuGrid() {
  const [level, setLevel] = useState("easy");
  const [puzzle, setPuzzle] = useState<number[][]>([]);
  const [solution, setSolution] = useState<number[][]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    fetch(`/api/sudoku?level=${level}`)
      .then((res) => res.json())
      .then((data) => {
        setPuzzle(data.puzzle);
        setSolution(data.solution);
        setMistakes(0);
        setLocked(false);
      });
  }, [level]);

  function handleChange(row: number, col: number, value: number) {
    if (locked || !solution.length) return;

    if (!isCorrectMove(solution, row, col, value)) {
      setMistakes((prev) => {
        const next = prev + 1;
        if (next >= 3) setLocked(true);
        return next;
      });
      return;
    }

    setPuzzle((prev) => {
      const copy = prev.map((r) => [...r]);
      copy[row][col] = value;
      return copy;
    });
  }

  if (!puzzle.length) {
    return <p>Loading…</p>;
  }

  return (
    <>
      {/* Difficulty */}
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="mb-3 px-3 py-2 rounded-md border"
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          borderColor: "#ccc",
        }}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <MistakeCounter count={mistakes} />

      {/* Grid */}
      <div
        className="
          grid grid-cols-9 gap-1
          p-4 rounded-2xl
          shadow-lg
        "
        style={{ backgroundColor: "var(--surface)" }}
      >
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

      {locked && <AdModal onContinue={() => setLocked(false)} />}
    </>
  );
}
