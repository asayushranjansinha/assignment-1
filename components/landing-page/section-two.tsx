import Image from 'next/image'
import React from 'react'

const SectionTwo = () => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px]">
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
            Our goal is to be your one-stop shop for finding the best
            online stores, tailored to your needs and preferences. Through
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
  </section>
  )
}

export default SectionTwo