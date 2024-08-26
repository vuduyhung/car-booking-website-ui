import React from "react";
import yellowCab from "../../assets/car1.png";
import bgCity from "../../assets/city.jpg";
import Image from "next/image";

const bgStyle = {
  backgroundImage: `url(${bgCity.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "520px",
  width: "100vw",
};

const Hero = () => {
  return (
    <div style={bgStyle}>
      <div className="flex h-[520px] bg-white/10 backdrop-blur-sm duration-300 dark:bg-black/30 dark:text-white">
        <div className="container grid grid-cols-1 place-items-center">
          <div className="space-y-5 py-14 text-center">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold uppercase text-primary"
            >
              Book car now
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-4xl font-bold md:text-6xl"
            >
              +84 123 456
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="text-base font-semibold tracking-[8px] sm:text-xl"
            >
              www.abc.com
            </p>
          </div>

          <div data-aos="zoom-in-right" data-aos-duration="1000">
            <Image
              src={yellowCab}
              alt="yellow car"
              className="max-h-[460px] translate-y-10 sm:translate-y-0 sm:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
