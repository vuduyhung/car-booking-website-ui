import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import CarBooking from "../../assets/carbooking.png";
import Image from "next/image";

const AppStore = () => {
  return (
    <div className="bg-[#f5f5f5] dark:bg-black dark:text-white">
      <div className="container">
        <div className="space-y-3 py-14 text-center uppercase">
          <p data-ao="fade-up" className="text-2xl font-semibold text-primary">
            Download
          </p>
          <h1
            data-ao="fade-up"
            data-ao-delay="300"
            className="text-3xl font-bold"
          >
            Mobile App
          </h1>
        </div>

        <div
          data-ao="fade-up"
          data-ao-delay="300"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <div className="mx-auto max-w-[400px] space-y-8">
            <h1 className="text-2xl font-bold">
              Download the app for free and start your journey with us today!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
              sed. Ex et totam nihil delectus optio temporibus enim sed sit a
              ducimus vero, perspiciatis itaque voluptatibus eligendi fuga
              reiciendis molestiae.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start">
              <a href="#">
                <Image
                  src={AppStoreImg}
                  alt="App Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <Image
                  src={PlayStoreImg}
                  alt="Play Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image src={CarBooking} alt="" className="max-w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
