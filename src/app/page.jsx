"use client"
import Image from "next/image";
import {motion} from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
    className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero1.png" alt="Hero Image" fill className="object-contain" />
      </div>
    
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* Title */}
        <h1 className="text-4xl font-bold md:text-6xl">Welcome, I Am No Name</h1>

        {/* Description */}
        <p className="md:text-xl">
          I am a web developer and Python scripter.
          I do not want to brag about myself, but I am also a bit expert in game modding.
          Programming isn’t about what you know; it’s about what you can figure out.
        </p>

        {/* Buttons */}
        <div className="w-full flex gap-4">
          <a  href="/portfolio" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </a>
          <a href="/contact" className="p-4 rounded-lg ring-1 ring-black">Contact Me</a>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
