import Header from "./Header";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
