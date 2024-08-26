import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary pb-10 pt-20 text-black duration-300 sm:grid sm:min-h-[600px] sm:place-items-center sm:pb-0">
      <div className="container">
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2">
          <div
            data-aos="fade-up"
            data-aos-offset="0"
            className="space-y-5 pb-6 sm:p-16"
          >
            <h1 className="text-2xl font-bold sm:text-3xl">Best in city</h1>
            <h1 className="text-3xl font-bold sm:text-4xl">
              TRUSTED CAR BOOKING SERVICE IN HA NOI
            </h1>
            <p className="leading-8 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae at
              quibusdam sit quae, harum, suscipit eius assumenda iste quo
              voluptates magni earum sed illum nesciunt error. Doloribus
              molestiae cum sit?
            </p>
            <button className="rounded-lg bg-black px-4 py-2 text-white">
              Book Now
            </button>
          </div>

          <div data-aos="fade" className="w-full">
            <div className="mx-auto md:max-w-[350px]">
              <h1 className="bg-black px-5 py-3 text-2xl uppercase text-white">
                Book a car
              </h1>
              <div className="grid grid-cols-1 gap-x-2 bg-white p-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  name=""
                  id=""
                  className="inputField"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name=""
                  id=""
                  className="inputField"
                />
                <input
                  type="text"
                  placeholder="From location"
                  name=""
                  id=""
                  className="inputField"
                />
                <input
                  type="text"
                  placeholder="To location"
                  name=""
                  id=""
                  className="inputField"
                />
                <input
                  type="text"
                  placeholder="Choose car"
                  name=""
                  id=""
                  className="inputField md:col-span-2"
                />
                <button className="rounded-lg bg-black px-4 py-2 text-white md:col-span-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
