import React from "react";

export default function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="#9da6ee"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M30 5 Q35 29, 50 30 Q35 30, 30 55 Q25 30, 10 30 Q25 30, 30 5 Z" />
    </svg>
  );
}
