// src/components/RatingStars.jsx
import React from "react";

/**
 * RatingStars
 * props:
 *  - value: number (0..5)
 *  - onChange: (newValue) => void   (if provided, component is interactive)
 *  - size: string (tailwind size classes, e.g. "w-5 h-5")
 *  - readOnly: boolean
 */
export default function RatingStars({ value = 0, onChange, size = "w-5 h-5", readOnly = false }) {
  const stars = [1, 2, 3, 4, 5];

  const handleClick = (v) => {
    if (readOnly || !onChange) return;
    onChange(v);
  };

  return (
    <div className="flex items-center gap-1">
      {stars.map((s) => (
        <svg
          key={s}
          onClick={() => handleClick(s)}
          xmlns="http://www.w3.org/2000/svg"
          className={`${size} cursor-${onChange && !readOnly ? "pointer" : "default"} ${s <= Math.round(value) ? "text-yellow-400" : "text-gray-300"}`}
          viewBox="0 0 20 20"
          fill={s <= Math.round(value) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.486 2.606c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.526 9.393c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ))}
    </div>
  );
}
