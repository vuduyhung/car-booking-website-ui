'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from '@/components/Navbar/Navbar';

const Page = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Page;
