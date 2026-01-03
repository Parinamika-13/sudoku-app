"use client";

export default function ThemeSwitcher() {
  return (
    <select
      onChange={(e) => (document.body.className = e.target.value)}
      className="p-2 mb-4"
    >
      <option value="">Light</option>
      <option value="dark">Dark</option>
      <option value="pastel">Pastel</option>
    </select>
  );
}
