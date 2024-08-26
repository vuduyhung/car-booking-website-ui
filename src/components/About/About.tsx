import React from "react";
import BgImage from "../../assets/girl.jpg";
import { SlStar } from "react-icons/sl";
import BannerCard from "./BannerCard";

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "520px",
  width: "100vw",
};

const About = () => {
  return (
    <div style={bgStyle}>
      <div className="flex min-h-[530px] items-center bg-black/80 py-10 text-white">
        <div className="container">
          <div className="space-y-3 text-center uppercase">
            <p className="text-2xl font-semibold text-primary">Why choose us</p>
            <h1>Our commitment</h1>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-8">
              <BannerCard
                title="Quality"
                icon={<SlStar />}
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              />
              <BannerCard
                title="Fast booking"
                icon={<SlStar />}
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              />
            </div>

            <div className="space-y-8">
              <BannerCard
                title="Safe trip"
                icon={<SlStar />}
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              />
              <BannerCard
                title="Cheap cost"
                icon={<SlStar />}
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
