"use client";

import React from 'react'
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
const headingFont = Raleway({ subsets: ["latin"] });


const HeroSection = () => {
  return (
    <section className="container mx-auto px-[1rem] sm:px-[2rem]">
        <div className="grid lg:grid-cols-2 text-left lg:text-start">
          <div
            className={`flex flex-col justify-center items-center sm:items-start p-2 ${headingFont}`}
          >
            <span className="text-rose-500 font-medium uppercase">
              sankyfy.com
            </span>
            <h1 className="text-3xl md:text-5xl uppercase font-medium">
              Developing and providing innovative solutions for your shop{" "}
            </h1>
          </div>
          <div className="h-[500px] overflow-hidden p-2">
            <LampContainer>
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[40px] font-medium tracking-tight text-transparent"
              >
                Get Found By Shoppers:
                <br /> the right way
              </motion.h1>
            </LampContainer>
          </div>
        </div>
      </section>
  )
}

export default HeroSection