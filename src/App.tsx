import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Graveyard from "./components/Graveyard";

function App() {
  return (
    <main>
      <Hero />
      <Timeline />
      <Graveyard />
      <footer style={{ marginTop: 36, textAlign: "center", color: "var(--muted)", fontSize: 12 }}>
        This site is built with React, bundled by Vite, styled with Tailwind,
        and animated by Framer Motion, just to render some static text. Frontend is simple, right?
      </footer>
    </main>
  );
}

export default App
