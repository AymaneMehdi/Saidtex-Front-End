import Navbar from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Partners from "./components/partenaires";
import Whyus from "./components/whyus";
import Contact from "./components/contact";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Whyus />
      <Contact />
    </div>
  );
}
