import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <div className="bg-background font-DMSans">
        <section id="Homepage">
          <Navbar /> <Hero />
        </section>
        <section>
          <Parallax type="services" />
        </section>
        <section id="Services">
          <Services />
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section id="Contact">contact</section>
      </div>
    </>
  );
};

export default App;
