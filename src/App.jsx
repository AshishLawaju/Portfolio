import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-background font-DMSans">
        <section id="Homepage">
          <Navbar /> <Hero />
        </section>
        <section id="Services">Parallax</section>
        <section>Services</section>
        <section id="Portfolio">Parallax</section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section id="Contact">contact</section>
      </div>
    </>
  );
};

export default App;
