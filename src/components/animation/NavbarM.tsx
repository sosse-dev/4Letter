"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function NavbarM() {
  const [showNav, setShowNav] = useState(false);

  const staggerAnimationNavbar = {
    initial: {
      textShadow: "0 0 0px rgba(0, 0,0, 1)",
    },
    animate: (i: number) => ({
      textShadow: "0 0 20px rgba(0, 0,0, 0.5)",
      transition: {
        delay: 0.1 * i,
        duration: 1,
      },
    }),
  };

  return (
    <>
      <motion.button
        onClick={() => setShowNav(!showNav)}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.3 }}
        className="fixed top-0 right-0 w-12 h-12 rounded-bl-full bg-tertiary lg:hidden z-50 grid place-items-center"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          // className="object-contain"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </motion.button>
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ ease: [0.76, 0, 0.24, 1] }}
            className="fixed left-0 top-0 w-full h-fit bg-secondary flex flex-col pl-5 md:pl-12 pb-6 rounded-b-xl border-b-8 border-white z-50 lg:hidden"
          >
            <div className="w-full flex justify-end">
              <button
                onClick={() => setShowNav(false)}
                className="w-14 h-14 bg-white rounded-bl-full grid place-items-center"
              >
                <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          className="translate-x-1 sm:translate-x-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
              </button>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className="w-24 h-24 rounded-full bg-white mb-3 overflow-hidden">
                <Image
                  src="/4letterlogo.png"
                  width={80}
                  height={80}
                  alt="4letterlogo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 ml-4">
                <h1 className="text-4xl font-handwriting tracking-wider">
                  4Letter
                </h1>
                <p className="">Looking the Way</p>
              </div>
            </div>
            {showNav && (
              <>
                <motion.button
                  variants={staggerAnimationNavbar}
                  initial="initial"
                  animate="animate"
                  custom={0}
                  className="text-left text-3xl pl-1"
                >
                  Home
                </motion.button>
                <motion.button
                  variants={staggerAnimationNavbar}
                  initial="initial"
                  animate="animate"
                  custom={1}
                  className="text-left text-3xl pl-1"
                >
                  About
                </motion.button>
                <motion.button
                  variants={staggerAnimationNavbar}
                  initial="initial"
                  animate="animate"
                  custom={2}
                  className="text-left text-3xl pl-1"
                >
                  Contact
                </motion.button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavbarM;
