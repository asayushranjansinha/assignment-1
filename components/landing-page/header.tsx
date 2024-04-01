"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const NAVIGATION_ITEMS = [
  {
    id: 1,
    name: "Home",
    href: "home",
  },
  {
    id: 2,
    name: "About Us",
    href: "about",
  },
  {
    id: 3,
    name: "Contact Us",
    href: "contact",
  },
  {
    id: 4,
    name: "List your services",
    href: "services",
  },
];

const LandingPageHeader = () => {
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  return (
    <header className="bg-[#010100] overflow-hidden">
      <div className="container mx-auto px-[1rem] py-[0.5rem] sm:px-[2rem] flex items-center justify-between">
        <HeaderLogo />

        <nav className="hidden sm:flex flex-grow" role="navigation">
          <ul className="w-full flex items-center gap-4 justify-center">
            {NAVIGATION_ITEMS.map((item) => (
              <li
                key={item.id}
                className={`relative rounded-full px-3 py-1.5 transition cursor-pointer focus:outline-none focus:ring-1 ring-slate-900`}
                role="button"
                onMouseEnter={() => setHoverIndex(item.id)}
                onFocus={() => {
                  setHoverIndex(item.id);
                }}
                tabIndex={0}
              >
                {/* Hover effect (if applicable) */}
                {hoverIndex === item.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-slate-900 mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{
                      type: "spring",
                      bounce: 0.3,
                      duration: 0.6,
                      delay: 0.2,
                    }}
                  />
                )}
                <span className="text-sm font-semibold text-white relative z-20">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <button className="relative inline-flex overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-1 ring-slate-900 focus:ring-offset-2 focus:ring-offset-slate-900">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 hover:bg-slate-900 transition-colors px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
            Login
          </span>
        </button>
      </div>
    </header>
  );
};

export default LandingPageHeader;

function HeaderLogo() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [spanWidth, setSpanWidth] = useState<number>(52);

  useEffect(() => {
    if (spanRef.current) {
      setSpanWidth(spanRef.current.offsetWidth);
    }
  }, [isHovered]);

  const variants = {
    hidden: { x: 0, opacity: 1 },
    visible: { x: spanWidth + 16, opacity: 1 },
  };

  return (
    <div>
      <Link href="/">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => {
            setIsFirstLoad(true);
            setTimeout(() => {
              setIsFirstLoad(false);
            }, 800);
          }}
          className="relative flex items-baseline"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={"/logo-gif.gif"}
            alt="Company Logo"
            height={50}
            width={50}
            className="h-10"
          />

          <div className="-ml-2 hidden sm:block">
            <span className="h-full text-2xl tracking-wide font-medium text-rose-700">
              S
            </span>{" "}
            <AnimatePresence>
              {(isHovered || isFirstLoad) && (
                <motion.span
                  ref={spanRef}
                  className="absolute tracking-wider text-rose-500"
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeIn" },
                  }}
                  initial={{ opacity: 0, y: "22%" }}
                  animate={{ opacity: 1, y: "22%" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 0.1,
                  }}
                >
                  wadesi
                </motion.span>
              )}{" "}
            </AnimatePresence>
          </div>
          <motion.div
            animate={isHovered || isFirstLoad ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hidden sm:block"
          >
            <span className="h-full text-2xl tracking-wide font-medium text-rose-700">
              B
            </span>
            <AnimatePresence>
              {(isHovered || isFirstLoad) && (
                <motion.span
                  ref={spanRef}
                  className="absolute tracking-wider text-rose-500"
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeIn", delay: 0.1 },
                  }}
                  initial={{ opacity: 0, y: "22%" }}
                  animate={{ opacity: 1, y: "22%" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  azaar
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}
