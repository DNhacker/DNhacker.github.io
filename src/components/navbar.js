"use client";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navlink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const topVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition:{
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };


const listItemVariants ={
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
}

  return (
    <div className='h-full flex justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      <div className="hidden md:flex gap-4 w-2/3">
        {links.map(link => (
          <NavLink link={link} key={link.title}/>
        ))}
      </div>
      {/*logo*/}
      <div className='md:hidden justify-center '>
        <a
         href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center "
         >
          <span className="text-white  mr-1 pr-1">NO</span>
          <span className="w-12 h-8 rounded bg-white text-black font-semibold flex items-center justify-center">Name
          </span>
        </a>
      </div>
      <div className="hidden md:flex gap-4 ">
        <a href="https://www.instagram.com/i_am__no.name/">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24}/>
        </a>
        <a href="https://www.facebook.com/pk.no.name.1999">
          <Image src="/facebook.png" alt="No Name" width={24} height={24}/>
        </a>
        <a href="">
          <Image src="/twitter.png" alt="Twitter" width={24} height={24}/>
        </a>
        <a href="/">
          <Image src="/github.png" alt="Github" width={24} height={24}/>
        </a>
      </div>
      {/*responsive Menu*/}
      <div className="md:hidden">
        {/*menu button */}
        <button
         className="w-10 h-8 flex flex-col justify-between  z-50 relative"
         onClick={() => setOpen(prev => !prev)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          >
          </motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          >
          </motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          >
          </motion.div>
        </button>
        {/*menu list */}
        {open && (
          <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
           className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-20 text-6xl z-40">
            {links.map(link => (
              <motion.div variants={listItemVariants} className="" key={link.title}>
              <a href={link.url}>{link.title}</a>
            
          </motion.div>
        ))}
        </motion.div>
        )}
      </div>
    </div>
  )
}

export default NavBar;
