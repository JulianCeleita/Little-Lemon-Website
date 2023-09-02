import React from "react";
import { About } from "../components/About/About";
import { BookingForm } from "../components/BookingForm/BookingForm";
import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Nav } from "../components/Nav/Nav";
import { Specials } from "../components/Specials/Specials";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const submitForm = async (formData) => {
    const isBookingConfirmed = await submitAPI(formData);

    if (isBookingConfirmed) {
      navigate("/confirmed");
    }
  };
  return (
    <section>
      <Nav />
      <HeroSection />
      <BookingForm submitForm={submitForm} />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </section>
  );
};
