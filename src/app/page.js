'use client';

import About from "./components/About";
import DeviceWarningOverlay from "./components/DeviceWarningOverlay";
import GlobalFallingStars from "./components/FallingStars/Fallingstar";
import GoodRead from "./components/GoodRead";
import PortfolioCover from "./components/PortfolioCover";
import ThankYou from "./components/ThankYou";
import IntroSketch from "./components/IntroSketch";
import { useDeviceWarning } from "./components/hooks/useDeviceWarning";

export default function Home() {
  const { phase, checked, handleContinue, nextPhase } = useDeviceWarning();

  if (!checked) return null;
  return (
    <main>
      {phase === "warning" && (
        <DeviceWarningOverlay onContinue={handleContinue} />
      )}

      {phase === "intro" && (
        <IntroSketch onEnd={() => nextPhase("portfolio")} />
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