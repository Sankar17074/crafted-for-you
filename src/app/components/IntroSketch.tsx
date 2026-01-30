'use client';

import { useEffect, useState } from "react";

export default function IntroSketch({ onEnd }) {

  const [exit, setExit] = useState(false);

  useEffect(() => {
    // start exit animation slightly before unmount
    const t1 = setTimeout(() => setExit(true), 2000);
    const t2 = setTimeout(() => onEnd(), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onEnd]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#2f2f2f] intro-overlay ${
        exit ? "intro-exit" : ""}`}>
        <svg
          width="180"
          height="180"
          viewBox="0 0 60 60"
          fill="none"
          stroke="#9da6ee"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            className="star-draw"
            pathLength="1"
            d="M30 5 
              Q35 29, 50 30 
              Q35 30, 30 55 
              Q25 30, 10 30 
              Q25 30, 30 5 Z"
          />
      </svg>
    </div>
  );
}
