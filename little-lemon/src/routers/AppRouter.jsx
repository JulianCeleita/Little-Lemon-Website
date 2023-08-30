import { Route, Routes } from "react-router-dom";
import { Specials } from "../components/Specials/Specials";
import { Testimonials } from "../components/Testimonials/Testimonials";
import routes from "../helpers/routes";
import { BookingPage } from "../pages/BookingPage";
import { Home } from "../pages/Home";
import { About } from "../components/About/About";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.landing} element={<Home />}></Route>
      <Route path={routes.home} element={<Home />}></Route>
      <Route path={routes.specials} element={<Specials />}></Route>
      <Route path={routes.booking} element={<BookingPage />}></Route>
      <Route path={routes.testimonials} element={<Testimonials />}></Route>
      <Route path={routes.about} element={<About />}></Route>
    </Routes>
  );
};
