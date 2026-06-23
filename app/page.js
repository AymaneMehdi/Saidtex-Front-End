import Navbar from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Partners from "./components/partenaires";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Partners />
    </div>
  );
}
