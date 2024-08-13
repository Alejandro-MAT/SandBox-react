import {
  Hero,
  Nav,
  Services,
  Strategy,
  Team,
  Projects,
  Testimonials,
  FAQs,
  Footer,
} from "./components";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <Services />
        <Strategy />
        <Team />
        <Projects />
        <Testimonials />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}

export default App;
