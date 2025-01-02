import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
