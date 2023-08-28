import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Booking } from "./Booking";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";
import { Chicago } from "./Chicago";

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/specials" element={<Specials />}></Route>
      <Route path="/booking" element={<Booking />}></Route>
      <Route path="/testimonials" element={<Testimonials />}></Route>
      <Route path="/chicago" element={<Chicago />}></Route>
    </Routes>
  );
};
