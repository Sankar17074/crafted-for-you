'use client';

import { useEffect } from "react";

export default function IntroSketch({ onEnd }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd();
    }, 2600); // match animation duration

    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f2f2f]">
      <svg
  width="80"
  height="80"
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
