import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import "./App.css";
import { CallToAction } from "./components/CallToAction";
import { Specials } from "./components/Specials";
import { Testimonials } from "./components/Testimonials";
import { Chicago } from "./components/Chicago";
import { Booking } from "./components/Booking";
import { Main } from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <CallToAction />
        <Specials />
        <Testimonials />
        <Chicago />
        <Booking />
        <Main />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
