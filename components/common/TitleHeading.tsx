import React from "react";

const TitleHeading = ({
  title,
  subTitle,
  desc,
}: {
  title: string;
  subTitle: string;
  desc: string;
}) => {
  return (
    <div className="text-center mb-10 max-w-2xl mx-auto">
      <h3 className="text-orange-500 font-semibold uppercase tracking-wide">
        {title}
      </h3>
      <h2 className="text-3xl font-bold mt-2 mb-4">{subTitle}</h2>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default TitleHeading;
