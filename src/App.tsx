import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Graveyard from "./components/Graveyard";
import Danmaku from "./components/Danmaku";

function App() {
  return (
    <main>
      <Danmaku auto />
      <Hero />
      <Timeline />
      <Graveyard />
    </main>
  );
}

export default App
