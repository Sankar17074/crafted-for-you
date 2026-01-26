import About from "./components/About";
import GlobalFallingStars from "./components/FallingStars/Fallingstar";
import GoodRead from "./components/GoodRead";
import PortfolioCover from "./components/PortfolioCover";
import ThankYou from "./components/ThankYou";

export default function Home() {
  return (
    <main>
      <GlobalFallingStars/>
      <PortfolioCover/>
      <About/>
      <GoodRead/>
      <ThankYou/>
    </main>
  );
}
