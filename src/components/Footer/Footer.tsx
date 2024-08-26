import React from "react";
import {
  FaAndroid,
  FaAppStoreIos,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaMapMarker,
  FaMousePointer,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white text-black dark:bg-dark dark:text-white">
      <div className="bg-primary">
        <div className="container space-y-4 py-10 text-center text-2xl font-bold text-black lg:py-14">
          <p className="uppercase">We serve 24/7</p>
          <h1 className="text-3xl font-bold md:text-5xl">+84 123 456</h1>
        </div>
      </div>

      <div className="container grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 md:grid-cols-3 md:gap-20">
        <div className="space-y-6">
          <h1 className="border-b-8 border-primary py-3 text-2xl font-bold uppercase">
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            voluptatibus voluptatem culpa? Architecto exercitationem vitae porro
            ut, perferendis ducimus ipsum voluptatibus beatae esse temporibus
            facere nam, possimus quae quibusdam dolor.
          </p>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
            <FaTwitter />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="border-b-8 border-primary py-3 text-2xl font-bold uppercase">
            Download
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            voluptatibus voluptatem culpa? Architecto exercitationem vitae porro
            ut, perferendis ducimus ipsum voluptatibus beatae esse temporibus
            facere nam, possimus quae quibusdam dolor.
          </p>

          <h1 className="flex items-center gap-4 text-lg font-semibold text-primary">
            Android user
            <span>
              <FaAndroid className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg font-semibold text-primary">
            IOS user
            <span>
              <FaAppStoreIos className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
        </div>

        <div className="space-y-6">
          <h1 className="border-b-8 border-primary py-3 text-2xl font-bold uppercase">
            Contact
          </h1>
          <div className="flex items-center gap-4">
            <FaMapMarker /> 123 street, Ha Noi, Viet Nam
          </div>
          <div className="flex items-center gap-4">
            <MdCall /> +84 123 456
          </div>
          <div className="flex items-center gap-4">
            <MdEmail /> example@gmail.com
          </div>
          <div className="flex items-center gap-4">
            <FaMousePointer /> www.example.com
          </div>
        </div>
        <p className="py-4 text-center text-sm">
          Copyright 2024. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
