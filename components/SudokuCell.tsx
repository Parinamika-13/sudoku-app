type SudokuCellProps = {
  value: number;
  disabled: boolean;
  onChange: (value: number) => void;
};

export default function SudokuCell({
  value,
  disabled,
  onChange,
}: SudokuCellProps) {
  return (
    <input
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value === 0 ? "" : value}
      disabled={disabled}
      onChange={(e) => {
        const v = Number(e.target.value);

        if (v >= 1 && v <= 9) {
          onChange(v);
        }

        if (e.target.value === "") {
          onChange(0);
        }
      }}
      className="
        w-11 h-11
        text-center text-lg
        rounded-lg
        border
        transition-all
        focus:outline-none
        disabled:cursor-not-allowed
      "
      style={{
        backgroundColor: "var(--cell)",
        color: "var(--text)",
        borderColor: "var(--muted)",
      }}
    />
  );
}
