import { Route, Routes } from "react-router-dom";
import { Chicago } from "../components/Chicago";
import { Specials } from "../components/Specials/Specials";
import { Testimonials } from "../components/Testimonials";
import routes from "../helpers/routes";
import { BookingPage } from "../pages/BookingPage";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.landing} element={<Home />}></Route>
      <Route path={routes.home} element={<Home />}></Route>
      <Route path={routes.specials} element={<Specials />}></Route>
      <Route path={routes.booking} element={<BookingPage />}></Route>
      <Route path={routes.testimonials} element={<Testimonials />}></Route>
      <Route path={routes.chicago} element={<Chicago />}></Route>
    </Routes>
  );
};
