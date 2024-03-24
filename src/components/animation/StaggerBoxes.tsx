"use client";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StaggerBoxes() {
  const [on, setOn] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controlAnimation = useAnimation();

  const staggerAniamtion = {
    initial: {
      translateX: 0,
      opacity: 1,
    },
    animate: {
      translateX: 0,
      opacity: 1,
    },
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
      setOn(false);
      controlAnimation.start({ fontSize: "14rem", skewX: -10 });
    }
  }, [isInView]);

  return (
    <>
      <AnimatePresence>
        {on && (
          <>
            {" "}
            <motion.div
              variants={staggerAniamtion}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0}
              className="grow bg-accent z-40"
            ></motion.div>
            <motion.div
              variants={staggerAniamtion}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={1}
              className="grow bg-accent z-40"
            ></motion.div>
            <motion.div
              variants={staggerAniamtion}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={2}
              className="grow bg-accent z-40"
            ></motion.div>
            <motion.div
              variants={staggerAniamtion}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={3}
              className="grow bg-accent z-40"
            ></motion.div>
            <motion.div
              variants={staggerAniamtion}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={4}
              className="grow bg-accent z-40"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="absolute w-full h-full flex flex-col items-center justify-center  bg-secondary">
        <h1 className="text-6xl lg:text-9xl font-handwriting tracking-widest text-accent">
          WANNA SEE?
        </h1>
        <p ref={ref} className="w-full md:w-[36rem] text-center z-20">
          Lorlor sit amet, consectetur adipisicing elit. Sit, dolor. Sapiente
          ratione doloremque adipisci quam saepe. Laborum quaerat atque quo,
          optio consequuntur aliquid maiores quod! Quia numqua
        </p>
        <button className="px-8 py-3 border-4 border-accent mt-3 rounded-md hover:bg-accent hover:text-primary lg:text-sm">
          Button
        </button>
      </div>
    </>
  );
}

export default StaggerBoxes;
