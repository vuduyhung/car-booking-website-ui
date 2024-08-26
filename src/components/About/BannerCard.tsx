import React from "react";

const BannerCard = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
}) => {
  return (
    <div className="mx-auto max-w-[350px]">
      <div className="flex items-center gap-4">
        <div>
          <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary text-black">
            {icon}
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold uppercase text-primary">{title}</h1>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
