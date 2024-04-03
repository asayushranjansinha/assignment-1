import { Github, Instagram, MoveUpRight, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-[1rem] sm:px-[2rem]">
        <div className="flex items-center gap-2 my-2">
          <h2 className="text-3xl font-semibold tracking-wider text-muted-foreground">
            Subscribe Us
          </h2>
          <div role="button" className="p-3 bg-amber-400 rounded-full w-fit">
            <MoveUpRight size={28} />
          </div>
        </div>
        <hr />
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between gap-4 my-2 text-muted-foreground">
          <Link href={"tel:000000000"} className="flex items-center gap-2">
            <Image
              src={"/mobile.png"}
              alt="mobile"
              height={100}
              width={100}
              className="h-8 w-6 transform -rotate-[15deg]"
            />
            <span>(+91) 87094XXXX</span>
          </Link>
          <Link
            href={"mailto:shivamstreaming@gmail.com"}
            className="flex items-center gap-2"
          >
            <Image
              src={"/email.png"}
              alt="email"
              height={100}
              width={100}
              className="h-6 w-8"
            />
            <span>shivamstreaming@gmail.com</span>
          </Link>
          <div className="flex flex-col gap-4 text-muted-foreground">
            <p className="text-sm font-semibold">
              Follow me on my social Media
            </p>
            <div className="flex items-center gap-6">
              <div className="p-3 border rounded-full">
                <Youtube />
              </div>
              <div className="p-3 border rounded-full">
                <Instagram />
              </div>
              <div className="p-3 border rounded-full">
                <Twitter />
              </div>
              <div className="p-3 border rounded-full">
                <Github />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <span className="w-full flex items-center justify-center text-muted-foreground my-4">
          @2024 &copy; COPYRIGHT BY Shivam Kumar Singh & Ayush Ranjan Sinha
        </span>
      </div>
    </footer>
  );
};

export default Footer;
