"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function Header() {
  const [cek, setCek] = useState(false);

  const staggerAnimationText = {
    initial: {
      translateY: "400px",
    },
    animate: (i: number) => ({
      translateY: "0px",
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
      },
    }),
  };

  const cek2 = {
    initial: {
      translateY: "0px",
    },
    animate: (i: number) => ({
      translateY: "30px",
      transition: {
        delay: 0.1,
      },
    }),
  };

  return (
    <>
      <div className="flex overflow-hidden pt-12 z-20 text-accent">
        <motion.h1
          variants={cek ? cek2 : staggerAnimationText}
          initial="initial"
          animate="animate"
          custom={0}
          className="text-8xl tracking-wider font-handwriting"
        >
          F
        </motion.h1>
        <motion.h1
          variants={staggerAnimationText}
          initial="initial"
          animate="animate"
          custom={1}
          className="text-8xl tracking-wider font-handwriting"
        >
          o
        </motion.h1>
        <motion.h1
          variants={staggerAnimationText}
          initial="initial"
          animate="animate"
          custom={2}
          className="text-8xl tracking-wider font-handwriting"
        >
          u
        </motion.h1>
        <motion.h1
          variants={staggerAnimationText}
          initial="initial"
          animate="animate"
          onAnimationComplete={() => setCek(true)}
          custom={3}
          className="relative text-8xl tracking-wider font-handwriting overflow-visible"
        >
          R
        </motion.h1>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        className="w-fit h-fit px-3 py-2 bg-tertiary origin-left flex"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl shrink-0"
        >
          Letter
        </motion.h2>
      </motion.div>
    </>
  );
}

export default Header;
