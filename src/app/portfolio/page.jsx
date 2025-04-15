"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Image from "next/image";




const items= [
{
  id: 1,
  color:" from-red-300 to-violet-300",
  title: "Village Website",
  desc: "Welcome to our village's official website! Explore the charm and heritage of our community. Stay updated with local news, upcoming events, and essential services. Discover the rich culture, scenic beauty, and vibrant life of our village. Join us in celebrating our traditions and fostering a strong community spirit.",
  img : "/village.png",
  link: "https://gangwa.in"
   },

  {
    id:2,
    color:" from-violet-300 to-blue-300",
    title: "AI Infulancer",
    desc: "Discover the future of digital influence with our AI Influencer, Veena! Dive into a world where artificial intelligence meets social media, offering unique insights, trends, and personalized content. Veena is here to engage, inspire, and connect with you like never before.",
    img: "/veena.png",
    link: "https://www.instagram.com/virtualveena"
    },
    {
      id: 3,
      color: "from-blue-300 to-red-300",
      title:  "React Portfolio",
      desc: "Welcome to my React Portfolio! This site showcases my projects, skills, and experiences as a web developer proficient in React. Explore a variety of interactive and dynamic web applications that highlight my expertise in modern web development practices.",
      img: "/react.png",
      link: ""
    
      },
];



const PortfolioPage = () => {
const ref = useRef();
const { scrollYProgress } = useScroll({ target: ref });
const x = useTransform (scrollYProgress, [0, 1], ["0%","-80%"]);
return (
<motion.div
  className="h-full"
  initial={{ y: "-200vh" }}
  animate={{ y: "0%" }}
  transition={{ duration: 1 }}
  >
  <div className="h-[600vh] relative" ref={ref}>
  <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
    My Work
  </div>

  <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
  <motion.div style={{x}} className="flex"> 

  
  <div
   className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
  {items.map((item) => (
    <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
     key={item.id}
     
     >

    <div className=" flex flex-col gap-8 text-white">
      <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl">
        {item.title}
      </h1>
      <div className="relative w-70 h-50  md:w-[85px] md:h-[60px] lg:w-[350px] lg:h[235px] xl:w-[450px] xl:h-[300px]">
        <Image src={item.img} alt= "" fill/>
      </div>
      <p className="w-40 md:w-48 ld:w-[500px] lg:text-lg xl:w-[600px]">
        {item.desc}
      </p>
      <a href={item.link} className="flex justify-end">
        <button className="p-2 text-sm md:p-3 md:text-md lg:p-5 lg:text-lg bg-white text-green-600 font-semibold m-6 rounded">See Demo</button>
      </a>
    </div>
 
    </div>

  ))}
  </motion.div>
 
  </div>
  </div>
  <div className=" w-screen h-screen flex flex-col gap-16 items-center justify-center text-center ">
    <h1 className="text-6xl">
      Do You Have Project

    </h1>
    <div className="relative">
    <motion.svg
    animate={{rotate:360}}
    transition={{duration:8,ease:"linear", repeat:Infinity}} 
    viewBox="0 0 300 300 " className="w-64 h-64 md:w-[500px] md:h-[500px]">
      <defs>
        <path
        id="circlePath"
        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60 60 0 0,1 -120,0"
        />
      </defs>
      <text fill="#000">
        <textPath
        xlinkHref="#circlePath"
        className="text-l"
        >
        UI &nbsp; Designer &nbsp; and  &nbsp;  Cybersecurity  &nbsp; Consultanter</textPath>
      </text>
    </motion.svg>
    <a  href="/contect" className="w-20 h-20 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Hire Me</a>
    

    </div>
  </div>
</motion.div>

);
};
export default PortfolioPage;