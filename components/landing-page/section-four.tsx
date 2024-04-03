import React from 'react'
import { Input } from "@/components/ui/input";
import ContactUsForm from "@/components/shared/contact-us-form";
import { brandLogos } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const SectionFour = () => {
  return (
    <section className="container mx-auto px-[1rem] sm:px-[2rem] grid lg:grid-cols-2 gap-4 pb-8">
          <div className="flex flex-col">
            <h3 className="text-center lg:text-left text-2xl font-medium text-amber-600 dark:text-amber-400">
              Contact Us
            </h3>
            <ContactUsForm />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex  items-center justify-between gap-4">
              <h3 className="w-full text-2xl text-center font-semibold tracking-wider uppercase">
                Our Founder&apos;s message
              </h3>
              <Image
                src={"/founder.jpg"}
                alt="Founder Image"
                height={100}
                width={100}
                priority
                className="h-24 w-40 rounded-lg"
              />
            </div>
            <p className="text-sm text-justify text-muted-foreground mt-4">
              Remember the dream of connecting with more customers and taking
              your local shop online? We built <span>sankyfy</span> to make it a
              reality. No more complex website setups or expensive software!
              With sankyfy, you can list your shop in minutes, manage products
              with ease, and engage directly with customers who value local
              businesses. Let&apos;s build a thriving online community together!
            </p>
            <Link
              download={"/dummy.pdf"}
              href={"/dummy.pdf"}
              target="_blank"
              className="text-lg font-semibold text-justify mt-4"
            >
              <span className="text-blue-900 dark:text-blue-500 ">Download sankyfy</span> and start your online journey today.
            </Link>
          </div>
        </section>
  )
}

export default SectionFour