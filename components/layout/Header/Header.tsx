import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import IconBar from "./IconBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 shadow">
      <div>
        <Image
          src="/images/Summer-travel-logo.jpg"
          alt="Logo Image"
          className="object-cover"
          width={160}
          height={100}
        />
      </div>
      <Navbar />
      <IconBar />
    </header>
  );
};

export default Header;
