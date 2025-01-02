import { Work } from "./containers/Work/Work";
import { About } from "./containers/About/About";
import { Contact } from "./containers/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";
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
