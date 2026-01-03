"use client";

import { useEffect, useState } from "react";

const themes = [
  { name: "Light", value: "" },
  { name: "Dark", value: "theme-dark" },
  { name: "Soft", value: "theme-soft" },
  { name: "Cosmic", value: "theme-cosmic" },
  { name: "Anime", value: "theme-anime" },
  {name: "Forest", value: "theme-forest" },
  {name: "Ocean", value: "theme-ocean" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const html = document.documentElement;

    // remove all theme classes first
    html.classList.remove(
      "theme-dark",
      "theme-soft",
      "theme-cosmic",
      "theme-anime",
      "theme-forest",
      "theme-ocean"
    );

    if (theme) {
      html.classList.add(theme);
    }
  }, [theme]);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="mb-4 px-3 py-2 rounded-md border"
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        borderColor: "#ccc",
      }}
    >
      <option value="">Light</option>
      <option value="theme-dark">Dark</option>
      <option value="theme-soft">Soft</option>
      <option value="theme-cosmic">Cosmic</option>
      <option value="theme-anime">Anime</option>
      <option value="theme-forest">Forest</option>
      <option value="theme-ocean">Ocean</option>
      
    </select>
  );
}
