"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

function SwiperLists() {
  const [firstList, setFirstList] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={firstList ? "Sign Up" : "Sign In"}
          className="relative w-full lg:h-full h-[50rem] flex flex-col lg:flex-row lg:justify-between lg:gap-x-1"
        >
          <h1 className="absolute top-8 lg:bottom-8 left-12 z-20 text-primary text-7xl lg:text-9xl">
            Frasa
            <span className="absolute text-tertiary right-0 text-2xl lg:text-3xl font-handwriting">
              i love clouds
            </span>
          </h1>
          <div className="relative grow">
            <Image
              src="/purple-sky.jpg"
              fill={true}
              priority={true}
              className="object-cover"
              sizes="(min-width: 1280px) 804px, (min-width: 1040px) 574px, (min-width: 780px) 722px, (min-width: 680px) 600px, 89.72vw"
              alt="purple-sky"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 30 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col mx-auto justify-center max-w-md p-6 sm:p-10 bg-secondary"
          >
            <div className="mb-8 text-center">
              <h1 className="my-3 text-5xl font-bold text-accent">
                {firstList ? "Sign in" : "Sign Up"}
              </h1>
              <p className="text-sm text-zinc-600">
                Sign in to access your account
              </p>
            </div>
            <form className="space-y-12">
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="xxxxxxxx@xxxxx.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm">Password</label>
                    <button
                      type="button"
                      rel="noopener noreferrer"
                      className="text-xs hover:underline text-zinc-700"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <input
                    ref={ref}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="button"
                    className="w-full px-8 py-3 font-semibold  rounded-md dark:bg-violet-400 dark:text-gray-900"
                  >
                    {firstList ? "Sign In" : "Sign Up"}
                  </button>
                </div>
                <p className="w-[16rem] text-sm text-center text-zinc-700">
                  {firstList
                    ? "Don't have an account yet?"
                    : "Already have an account?"}
                  <button
                    type="button"
                    onClick={() => setFirstList(!firstList)}
                    className="hover:underline dark:text-violet-800 pl-1"
                  >
                    {firstList ? "Sign Up" : "Sign In"}
                  </button>
                  .
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default SwiperLists;
