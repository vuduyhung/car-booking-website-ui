import React from "react";
import Slider from "react-slick";
import BgImage from "../../assets/testimonials-bg.jpg";
import { testimonialData } from "../../mocks/data";
import Image from "next/image";

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  //   height: "100vh",
  //   width: "100%",
};

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocuse: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={bgStyle}>
      <div className="bg-white/20 py-14 dark:bg-black/20 dark:text-white">
        <div className="container">
          <div data-aos="fade-up" className="mb-10 text-center">
            <h1 className="text-4xl font-bold">Testimonials</h1>
          </div>

          <div data-aos="fade-up" className="mb-10 text-center">
            <Slider {...settings}>
              {testimonialData.map((item) => (
                <div key={item.id} className="my-6">
                  <div className="relative mx-4 flex flex-col gap-6 rounded-3xl bg-white px-6 py-8 shadow-lg dark:bg-dark dark:text-white">
                    <div className="item-center flex flex-col gap-4">
                      <p className="text-xs">{item.description}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={16}
                        height={16}
                        className="h-16 w-16 rounded-full"
                      />
                      <div className="space-y-2">
                        <h1 className="text-xl font-bold text-black/60 dark:text-primary">
                          {item.name}
                        </h1>
                        <p className="text-sm font-bold text-black/50 dark:text-white">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
