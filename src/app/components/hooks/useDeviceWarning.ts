'use client';

import { useEffect, useState } from "react";

const DESKTOP_WIDTH = 1024;
const STORAGE_KEY = "desktopWarningDismissed";

export function useDeviceWarning() {
  const [phase, setPhase] = useState<"warning" | "intro" | "portfolio">("intro");
  const [checked, setChecked] = useState(false); // ensures we don’t flash content

  useEffect(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;
    const skipped = sessionStorage.getItem(STORAGE_KEY);

    if (width < DESKTOP_WIDTH && !skipped) {
      setPhase("warning");
    }

    setChecked(true);
  }, []);

  const handleContinue = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setPhase("intro");
  };

  const nextPhase = (newPhase: "intro" | "portfolio") => setPhase(newPhase);

  return { phase, checked, handleContinue, nextPhase };
}
