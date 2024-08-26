import { productData } from "@/mocks/data";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div id="products" className="bg-white py-10 dark:bg-dark dark:text-white">
      <div className="container">
        <div data-aos="fade-up" className="mb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Choose best services
          </h1>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-20 sm:grid-cols-2 md:grid-cols-3">
          {productData.map((item: any) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="group relative max-w-[300px] rounded-2xl border bg-white shadow-xl duration-200 hover:!bg-primary dark:bg-black"
            >
              <div className="h-[110px] w-full">
                <Image
                  src={item.image}
                  alt=""
                  className="mx-auto block max-w-[200px] -translate-y-20 transform duration-300 group-hover:translate-x-4 group-hover:scale-110"
                />
              </div>

              <div className="space-y-4 p-4 text-center">
                <h1 className="text-xl font-bold">{item.name}</h1>
                <p className="line-clamp-2 text-sm text-gray-500 duration-300 group-hover:text-black">
                  {item.description}
                </p>
                <p className="text-2xl font-bold text-primary group-hover:text-black">
                  {item.price}
                </p>
                <button className="rounded-lg bg-black px-4 py-2 text-white">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
