import SudokuGrid from "@/components/SudokuGrid";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function GamePage() {
  return (
    <div className="min-h-screen p-6 bg-black text-white">
      <div className="max-w-md mx-auto">
        <ThemeSwitcher />
        <SudokuGrid />
      </div>
    </div>
  );
}
