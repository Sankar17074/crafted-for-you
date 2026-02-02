'use client';

import { useEffect, useState } from "react";
import About from "./components/About";
import DeviceWarningOverlay from "./components/DeviceWarningOverlay";
import GlobalFallingStars from "./components/FallingStars/Fallingstar";
import GoodRead from "./components/GoodRead";
import PortfolioCover from "./components/PortfolioCover";
import ThankYou from "./components/ThankYou";
import IntroSketch from "./components/IntroSketch";

const DESKTOP_WIDTH = 1024;
const STORAGE_KEY = "deviceWarningDismissed";

export default function Home() {
  const [phase, setPhase] = useState("intro");

  useEffect(() => {
   const handleResize = () => {
      const isDesktop = window.innerWidth >= DESKTOP_WIDTH;
      const dismissed = sessionStorage.getItem(STORAGE_KEY);

      setPhase((prev) => {
        if (!isDesktop) {
          // show warning ONLY if user has NOT dismissed
          if (!dismissed) return "warning";
          return prev;
        }

        if (prev === "warning") return "intro";

        return prev;
      });
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      {phase === "warning" && (
        <DeviceWarningOverlay onContinue={() => setPhase("intro")} />
      )}

      {phase === "intro" && (
        <IntroSketch onEnd={() => setPhase("portfolio")} />
      )}

      {phase === "portfolio" && (
        <>
          <GlobalFallingStars />
          <PortfolioCover />
          <About />
          <GoodRead />
          <ThankYou />
        </>
      )}
    </main>
  );
}