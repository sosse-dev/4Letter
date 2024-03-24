"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Boxes1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controlAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlAnimation.start({ translateX: 0, opacity: 1 });
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ translateX: "50px", opacity: 0 }}
        animate={controlAnimation}
        transition={{ delay: 0.2, duration: 1, type: "spring" }}
        className="w-full h-fit py-8 bg-secondary flex flex-col justify-center px-12"
      >
        {/* <div className="w-24 h-24 rounded-full bg-primary"></div> */}
        <div className="-space-y-4 mt-2">
          <h1 className="text-7xl font-handwriting tracking-wider">Interact</h1>
          <p className="md:text-xl">
            Lore dolor sit amet consecteturpti assumenda officia quod aut itaque
            sunt vero nesciunt deserunt soluta excepturi illum praesentium ullam
            ips
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: "50px", opacity: 0 }}
        animate={controlAnimation}
        transition={{ delay: 0.2, duration: 1, type: "spring" }}
        className="w-full h-fit py-8 bg-secondary flex flex-col justify-center px-12"
      >
        {/* <div className="w-24 h-24 rounded-full bg-primary"></div> */}
        <div className="-space-y-4 mt-2">
          <h1 className="text-7xl font-handwriting tracking-wider">Assume</h1>
          <p className="md:text-xl">
            Lore dolor sit amet riam corrupti assumenda officia quod aut itaque
            sunt vero nesciunt deserunt soluta excepturi illum praesentium ullam
            ips
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default Boxes1;
