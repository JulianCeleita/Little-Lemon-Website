import React from "react";
import { CallToAction } from "../components/CallToAction";
import { Chicago } from "../components/Chicago";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Specials } from "../components/Specials";
import { Testimonials } from "../components/Testimonials";
import HeroSection from "../components/HeroSection";

export const Home = () => {
  return (
    <section>
         <Nav/>
        <HeroSection/>
        <CallToAction />
        <Specials />
        <Testimonials />
        <Chicago />
        <Footer />
    </section>
  )
}