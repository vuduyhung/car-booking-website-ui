"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";
import Products from "@/components/Products/Products";

const Page = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-black dark:text-white">
      {/* <Navbar /> */}
      <Hero />
      <Contact />
      <Products />
    </div>
  );
};

export default Page;
