"use client";

import { useCallback, useEffect, useState } from "react";
import StarIcon from "./Staricon";
import styles from "./Fallingstar.module.css";
import React from "react";

type Star = {
  id: number;
  x: number;
  y: number;
};

export default function FallingStars() {
  const [stars, setStars] = useState<Star[]>([]);
  const [lastMouseMove, setLastMouseMove] = useState(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const now = Date.now();

      if (now - lastMouseMove > 30) {
        const star: Star = {
          id: now + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };

        setStars((prev) => [...prev, star]);

        setTimeout(() => {
          setStars((prev) => prev.filter((s) => s.id !== star.id));
        }, 2500);

        setLastMouseMove(now);
      }
    },
    [lastMouseMove]
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className={styles.container}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{ left: star.x, top: star.y }}
        >
          <StarIcon className={styles.starSvg} />
        </div>
      ))}
    </div>
  );
}
