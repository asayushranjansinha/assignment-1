import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
const headingFont = Raleway({ subsets: ["latin"] });
const SectionThree = () => {
  return (
    <section className="container mx-auto px-[1rem] sm:px-[2rem] grid lg:grid-cols-2 gap-2 text-left lg:text-start">
      <div className="relative h-[250px] sm:h-[380px] overflow-hidden p-2 order-last lg:order-1">
        <Image
          src="/shop-open.jpg"
          priority
          quality={100}
          fill
          alt="Open your shop Image"
          className="rounded-lg"
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center sm:items-start p-2 ${headingFont}`}
      >
        <span className="text-rose-500 font-medium uppercase">
          Fastest Listing in market
        </span>
        <h1 className="text-3xl md:text-5xl uppercase font-medium">
          open your first shop as quick as an atm withdrawl, <br /> just in one
          click
        </h1>
      </div>
    </section>
  );
};

export default SectionThree;
