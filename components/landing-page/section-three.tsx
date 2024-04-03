"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Button } from "@/components/ui/button";
import { loadingStates } from "@/constants";
import { MultiStepLoader } from "../ui/multi-step-loader";
import { X } from "lucide-react";

const headingFont = Raleway({ subsets: ["latin"] });
const SectionThree = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <section className="container mx-auto px-[1rem] sm:px-[2rem] grid lg:grid-cols-2 gap-2 text-left lg:text-start">
      {/* Core Loader Modal */}
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading}
        duration={2000}
      />
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
        <Button
          className="mt-4 text-lg font-semibold"
          onClick={() => setLoading(true)}
        >
          Click Here to Open
        </Button>
      </div>
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <X />
        </button>
      )}
    </section>
  );
};

export default SectionThree;
