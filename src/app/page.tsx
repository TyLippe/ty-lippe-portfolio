import { Work } from "./containers/Work/Work";
import { Greeting } from "./containers/Greeting/Greeting";
import { About } from "./containers/About/About";
import { Contact } from "./containers/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="home-container">
      <div className="svg-background">
        <Navbar />
        <Greeting />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
