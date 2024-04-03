"use client";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const headingFont = Raleway({ subsets: ["latin"] });
export default function Home() {
  const refOne = useRef<HTMLTableSectionElement>(null);
  const view = useInView(refOne);
  return (
    <main className="space-y-8">
      {/* Hero Section */}
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

      <motion.section
        ref={refOne}
        initial={{ opacity: 0, y: 20 }}
        animate={view ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full h-[50vh] min-h-[400px]"
      >
        <Image
          src="/background-1.jpg"
          priority
          quality={100}
          fill
          alt="Background Image"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-[600px] px-4 py-2 ">
            <h3 className="w-full text-2xl text-center font-semibold tracking-wider uppercase">
              sankyfy ai: <br />
              <span className="">smarter listings, safer shopping </span>
            </h3>
            <div>
              <h2 className="w-full text-3xl uppercase text-center mt-8">
                Our Mission
              </h2>
              <p className="text-sm text-justify mt-4">
                Our goal is to be your one-stop shop for finding the best online
                stores, tailored to your needs and preferences. Through
                intelligent algorithms, we remove the guesswork from online
                shopping, connecting you with the perfect retailers for your
                desired items.
              </p>
              <p className="text-sm text-justify mt-4">
                We believe everyone deserves a seamless and efficient online
                shopping experience.{" "}
                <span className="text-rose-500 font-medium">sankyfy</span>{" "}
                empowers you to shop smarter, not harder.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <section className="container mx-auto px-[1rem] sm:px-[2rem]">
        <div className="grid lg:grid-cols-2 gap-2 text-left lg:text-start">
          <div className="relative h-[300px] sm:h-[500px] overflow-hidden p-2 order-last lg:order-1">
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
              open your first shop as quick as an atm withdrawl, <br /> just in
              one click
            </h1>
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto px-[1rem] sm:px-[2rem]">
        <div className="flex flex-col gap-2">
          <Input />
          <Input />
          <Input />
        </div>
      </section> */}
    </main>
  );
}
