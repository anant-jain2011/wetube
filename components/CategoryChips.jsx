import React, { useState } from "react";
import { CATEGORIES } from "../lib/videos";

export default function CategoryChips() {
  const [active, setActive] = useState("All");
  return (
    <div className="sticky top-14 z-30 -mx-4 bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="scrollbar-none flex gap-3 overflow-x-auto">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              active === c
                ? "bg-chip-active text-chip-active-foreground"
                : "bg-chip text-chip-foreground hover:bg-accent"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
