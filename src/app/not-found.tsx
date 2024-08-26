import React from "react";
import NotFoundImage from "../assets/notfound.svg";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12 bg-white duration-300 dark:bg-dark dark:text-white">
      <Image src={NotFoundImage} alt="" className="max-w-[400px]" />
      <h1 className="text-center text-3xl font-bold dark:text-white">
        Page not found
      </h1>
    </div>
  );
};

export default NotFound;
