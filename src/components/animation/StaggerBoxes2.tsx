"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

function StaggerBoxes2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controlAnimation = useAnimation();

  const staggerAniamtion = {
    initial: {
      background: "#BCA37F",
    },
    animate: (i: number) => ({
      transition: {
        delay: 0.1 * i,
      },
      background: "transparent",
    }),
    exit: (i: number) => ({
      translateX: "40rem",
      opacity: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
      },
    }),
  };

  useEffect(() => {
    if (isInView) {
      controlAnimation.start("animate");
    }
  }, [isInView]);

  return (
    <>
      <div className="absolute left-0 w-[75%] h-full z-[-1]">
        <Image
          src="/picture-flower-pot.jpg"
          fill={true}
          priority={true}
          className="w-full h-full object-cover"
          alt="aesthetic-flower"
        />
      </div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={0}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={1}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={2}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <div className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem]">
        <h1 className="text-8xl text-accent">L</h1>
      </div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={3}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={4}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={5}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <div ref={ref} className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem]">
        <h1 className="text-8xl text-accent">O</h1>
      </div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={6}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={7}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={8}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <div className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem]">
        <h1 className="text-8xl text-accent">O</h1>
      </div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={9}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <motion.div
        variants={staggerAniamtion}
        initial="initial"
        animate={controlAnimation}
        exit="exit"
        custom={10}
        className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-4 border-primary"
      ></motion.div>
      <div className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] text-8xl text-accent bg-primary">
        K
      </div>
      <div className="w-[15rem] xl:w-[19rem]  h-[15rem] xl:h-[19rem] border-0 grid place-items-center border-primary bg-transparent">
        <p className="lg:text-3xl tracking-wider text-tertiary font-handwriting">
          olor sit amet consectetur adipisicing elit. Aperiam magni beatae
          consequuntur repellendus dolorum reiciendis ratione eos pariatur
          possimus architecto impedit explicabo, nihil ullam, aliquam
          temporibus! Assumenda,{" "}
        </p>
      </div>
    </>
  );
}

export default StaggerBoxes2;
