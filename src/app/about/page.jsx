"use client"
import {motion} from "framer-motion";
import Shinchan from '../../components/Shinchan';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';


const AboutPage = () => {
  const experienceVariant = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 1}}
  };
 
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin:"-100px"});
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {margin:"-100px"});
return (
    <motion.div
    className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
   
    {/**container  */}
    <div className="h-full overflow-scroll lg:flex">
    {/** text container  */}
    <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-58 flex flex-col gap-24 md:gap-32 lg:gap-48  xl:gap-64 xl:w-2/3 lg:pr-0 xl:1/2  md:w-2/3">
     {/** biography container  */}
     <div className=" flex flex-col gap-12 justify-center sm:w-2/3">
       {/** biography title  */}
    <motion.h1 className="font-bold text-2xl">
    BIOGRAPHY                       
    </motion.h1>
      {/** biography desc  */}
    <p className="text-l sm:text-1/3 xl:text-2xl   ">
    I am a village boy with big dreams, studying at a local government school before pursuing my bachelor`s degree at CRM Jat College in Hisar, Haryana. Fascinated by computers, space science, and Indian astrology, I`m currently focused on cybersecurity studies in Delhi. I`m driven to contribute to technology and cybersecurity while staying grounded in my roots and values.  </p>
      {/** biography quotes  */}
    <span className="italic">
    “Digital design is like painting, except the paint never dries.”
    </span>
      {/** biography sign svg */}
    <div className="self-end md:w-2/3">
    <svg 
    width="106" 
    height="28" 
    viewBox="0 0 106 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
<rect width="106"
 height="28" fill=""/>
<path d="M11.16 26.056C11.16 26.56 10.956 27.004 10.548 27.388C10.164 27.748 9.708 27.928 9.18 27.928C8.652 27.928 8.1 27.58 7.524 26.884C6.972 26.164 6.696 25.552 6.696 25.048C6.696 24.448 6.852 23.836 7.164 23.212C7.188 23.044 7.272 22.204 7.416 20.692C7.56 19.18 7.932 16.636 8.532 13.06C9.156 9.46 9.552 7.012 9.72 5.716V5.356C9.72 4.78 9.504 4.492 9.072 4.492C8.664 4.492 8.244 4.708 7.812 5.14C7.86 5.236 7.884 5.428 7.884 5.716C7.884 6.004 7.56 6.928 6.912 8.488C6.264 10.024 5.34 12.364 4.14 15.508C3.78 16.372 3.3 16.804 2.7 16.804C2.1 16.804 1.56 16.444 1.08 15.724C0.6 15.004 0.36 14.392 0.36 13.888C0.36 13.36 0.444 12.868 0.612 12.412C1.212 10.972 1.896 9.544 2.664 8.128C3.432 6.688 4.032 5.548 4.464 4.708C4.92 3.868 5.256 3.256 5.472 2.872C5.712 2.488 5.952 2.296 6.192 2.296C6.432 2.296 6.648 2.32 6.84 2.368C7.296 1.816 7.908 1.54 8.676 1.54C9.444 1.54 10.212 1.78 10.98 2.26C11.772 2.74 12.168 3.94 12.168 5.86C12.168 6.532 12.108 7.504 11.988 8.776C11.868 10.024 11.796 10.816 11.772 11.152C13.716 5.608 15.444 2.14 16.956 0.747999C17.22 0.483999 17.592 0.352 18.072 0.352C19.152 0.352 19.824 0.567999 20.088 0.999998C20.376 1.408 20.52 2.176 20.52 3.304C20.52 4.408 20.412 5.608 20.196 6.904C19.98 8.2 19.644 9.844 19.188 11.836C18.732 13.804 18.432 15.112 18.288 15.76C18.168 16.384 18.108 16.996 18.108 17.596C18.108 18.196 18.144 18.496 18.216 18.496C18.408 18.496 18.888 17.86 19.656 16.588C20.448 15.292 20.916 14.644 21.06 14.644C21.204 14.644 21.276 14.872 21.276 15.328C21.276 16.936 21.084 18.64 20.7 20.44C20.34 22.24 19.812 23.608 19.116 24.544C18.444 25.48 17.832 25.948 17.28 25.948C17.04 25.948 16.74 25.816 16.38 25.552C16.02 25.264 15.804 25.084 15.732 25.012C14.94 24.148 14.544 22.888 14.544 21.232C14.544 19.768 15.288 15.424 16.776 8.2C17.232 5.896 17.544 4.3 17.712 3.412C15.912 6.436 14.508 9.64 13.5 13.024C12.516 16.384 11.748 20.212 11.196 24.508L11.088 25.408L11.16 26.056ZM30.8731 17.704C30.8731 20.608 30.0331 23.188 28.3531 25.444C27.7531 26.212 27.0811 26.596 26.3371 26.596C25.6171 26.596 25.0411 26.416 24.6091 26.056C23.0491 24.76 22.2691 22.54 22.2691 19.396C22.2691 17.212 22.8571 14.428 24.0331 11.044C24.1291 10.804 24.2131 10.66 24.2851 10.612C24.3571 10.54 24.4771 10.504 24.6451 10.504C24.8371 10.504 25.0651 10.384 25.3291 10.144C25.5931 9.88 26.0251 9.748 26.6251 9.748C27.2491 9.748 27.8731 9.976 28.4971 10.432C29.1211 10.888 29.5771 11.5 29.8651 12.268C30.5371 14.068 30.8731 15.88 30.8731 17.704ZM27.8851 15.364C27.8851 13.156 27.6091 12.052 27.0571 12.052C26.7931 12.052 26.5531 12.256 26.3371 12.664C25.3771 14.944 24.8971 17.668 24.8971 20.836C24.8971 21.628 24.9091 22.228 24.9331 22.636C26.9011 21.124 27.8851 18.7 27.8851 15.364ZM49.9725 26.056C49.9725 26.56 49.7685 27.004 49.3605 27.388C48.9765 27.748 48.5205 27.928 47.9925 27.928C47.4645 27.928 46.9125 27.58 46.3365 26.884C45.7845 26.164 45.5085 25.552 45.5085 25.048C45.5085 24.448 45.6645 23.836 45.9765 23.212C46.0005 23.044 46.0845 22.204 46.2285 20.692C46.3725 19.18 46.7445 16.636 47.3445 13.06C47.9685 9.46 48.3645 7.012 48.5325 5.716V5.356C48.5325 4.78 48.3165 4.492 47.8845 4.492C47.4765 4.492 47.0565 4.708 46.6245 5.14C46.6725 5.236 46.6965 5.428 46.6965 5.716C46.6965 6.004 46.3725 6.928 45.7245 8.488C45.0765 10.024 44.1525 12.364 42.9525 15.508C42.5925 16.372 42.1125 16.804 41.5125 16.804C40.9125 16.804 40.3725 16.444 39.8925 15.724C39.4125 15.004 39.1725 14.392 39.1725 13.888C39.1725 13.36 39.2565 12.868 39.4245 12.412C40.0245 10.972 40.7085 9.544 41.4765 8.128C42.2445 6.688 42.8445 5.548 43.2765 4.708C43.7325 3.868 44.0685 3.256 44.2845 2.872C44.5245 2.488 44.7645 2.296 45.0045 2.296C45.2445 2.296 45.4605 2.32 45.6525 2.368C46.1085 1.816 46.7205 1.54 47.4885 1.54C48.2565 1.54 49.0245 1.78 49.7925 2.26C50.5845 2.74 50.9805 3.94 50.9805 5.86C50.9805 6.532 50.9205 7.504 50.8005 8.776C50.6805 10.024 50.6085 10.816 50.5845 11.152C52.5285 5.608 54.2565 2.14 55.7685 0.747999C56.0325 0.483999 56.4045 0.352 56.8845 0.352C57.9645 0.352 58.6365 0.567999 58.9005 0.999998C59.1885 1.408 59.3325 2.176 59.3325 3.304C59.3325 4.408 59.2245 5.608 59.0085 6.904C58.7925 8.2 58.4565 9.844 58.0005 11.836C57.5445 13.804 57.2445 15.112 57.1005 15.76C56.9805 16.384 56.9205 16.996 56.9205 17.596C56.9205 18.196 56.9565 18.496 57.0285 18.496C57.2205 18.496 57.7005 17.86 58.4685 16.588C59.2605 15.292 59.7285 14.644 59.8725 14.644C60.0165 14.644 60.0885 14.872 60.0885 15.328C60.0885 16.936 59.8965 18.64 59.5125 20.44C59.1525 22.24 58.6245 23.608 57.9285 24.544C57.2565 25.48 56.6445 25.948 56.0925 25.948C55.8525 25.948 55.5525 25.816 55.1925 25.552C54.8325 25.264 54.6165 25.084 54.5445 25.012C53.7525 24.148 53.3565 22.888 53.3565 21.232C53.3565 19.768 54.1005 15.424 55.5885 8.2C56.0445 5.896 56.3565 4.3 56.5245 3.412C54.7245 6.436 53.3205 9.64 52.3125 13.024C51.3285 16.384 50.5605 20.212 50.0085 24.508L49.9005 25.408L49.9725 26.056ZM68.9656 21.448C66.9976 24.976 65.4976 26.74 64.4656 26.74C63.7216 26.74 63.0496 26.284 62.4496 25.372C62.2816 25.132 62.1016 24.76 61.9096 24.256C61.7176 23.728 61.4776 23.248 61.1896 22.816C60.9256 22.384 60.7936 21.808 60.7936 21.088C60.7936 20.344 60.9376 19.684 61.2256 19.108C63.1936 15.22 65.2696 12.556 67.4536 11.116C67.7416 10.9 68.0776 10.792 68.4616 10.792C68.8456 10.792 69.3256 11.008 69.9016 11.44C70.2376 11.776 70.4416 12.064 70.5136 12.304C70.6336 12.832 70.6936 13.156 70.6936 13.276C71.5336 13.564 71.9536 14.092 71.9536 14.86C71.9536 15.388 71.8096 16.588 71.5216 18.46C71.2336 20.308 71.0656 21.688 71.0176 22.6C71.0176 23.104 71.1856 23.356 71.5216 23.356C71.9056 23.356 72.5896 22.684 73.5736 21.34C74.5816 19.996 75.1576 19.324 75.3016 19.324C75.5416 19.324 75.6616 19.72 75.6616 20.512L75.5896 22.276C75.5896 22.948 75.2896 23.872 74.6896 25.048C74.0896 26.2 73.3216 26.776 72.3856 26.776C71.8096 26.776 71.3536 26.584 71.0176 26.2C70.8976 26.08 70.7176 25.84 70.4776 25.48C69.7336 24.4 69.2296 23.056 68.9656 21.448ZM69.2896 13.132C66.2656 15.892 64.3456 19.048 63.5296 22.6C65.9536 20.512 67.8736 17.356 69.2896 13.132ZM87.9725 14.032C87.9725 13.744 87.9485 13.6 87.9005 13.6C87.8045 13.6 87.6965 13.792 87.5765 14.176C87.1445 15.28 86.1365 18.724 84.5525 24.508C84.3125 25.348 84.0605 25.768 83.7965 25.768C83.6765 25.768 83.4605 25.672 83.1485 25.48C81.9245 24.592 81.3125 23.5 81.3125 22.204C81.3125 21.172 81.4805 19.768 81.8165 17.992C82.2005 15.784 82.3925 14.596 82.3925 14.428C82.3925 14.236 82.3565 14.14 82.2845 14.14C82.2365 14.14 82.1525 14.26 82.0325 14.5C80.8085 17.428 80.0645 20.92 79.8005 24.976C79.7525 25.696 79.5125 26.056 79.0805 26.056C78.5045 26.056 77.9885 25.72 77.5325 25.048C76.6925 23.848 76.2725 22.504 76.2725 21.016C76.2725 20.08 76.3805 18.892 76.5965 17.452C76.8365 16.012 76.9805 15.136 77.0285 14.824C77.4365 12.304 77.8085 11.044 78.1445 11.044C78.4085 11.044 78.6125 11.392 78.7565 12.088C78.9005 12.76 78.9725 13.252 78.9725 13.564C78.9725 13.876 79.0205 14.032 79.1165 14.032C79.3805 14.032 79.6445 13.756 79.9085 13.204C80.1725 12.628 80.4965 12.064 80.8805 11.512C81.2645 10.936 81.7325 10.648 82.2845 10.648C82.8605 10.648 83.3885 10.864 83.8685 11.296C84.3485 11.704 84.6485 12.208 84.7685 12.808C85.0565 12.4 85.5365 11.836 86.2085 11.116C86.5685 10.612 86.9285 10.36 87.2885 10.36C87.6725 10.36 88.2245 10.54 88.9445 10.9C89.9285 11.404 90.4205 12.724 90.4205 14.86C90.4205 16.996 90.3485 18.832 90.2045 20.368V20.62C90.2045 20.98 90.2765 21.16 90.4205 21.16C90.6365 21.16 91.1645 20.56 92.0045 19.36C92.8445 18.136 93.3605 17.524 93.5525 17.524C93.8885 17.524 94.0565 18.388 94.0565 20.116C94.0565 21.82 93.4445 23.524 92.2205 25.228C91.6445 26.02 91.1525 26.416 90.7445 26.416L90.3485 26.308C89.3885 25.804 88.7045 25.228 88.2965 24.58C87.8885 23.932 87.6845 22.9 87.6845 21.484L87.9725 14.032ZM105.455 21.448C105.455 25.096 103.607 26.92 99.911 26.92C98.375 26.92 97.247 26.524 96.527 25.732C95.831 24.94 95.219 23.728 94.691 22.096C94.499 21.472 94.403 20.812 94.403 20.116C94.403 19.396 94.715 18.448 95.339 17.272C95.987 16.072 96.695 15.028 97.463 14.14C97.559 12.82 97.859 12.16 98.363 12.16C98.627 12.16 98.807 12.316 98.903 12.628C99.407 12.172 100.019 11.728 100.739 11.296C101.459 10.864 102.107 10.648 102.683 10.648C103.259 10.648 103.847 10.984 104.447 11.656C105.071 12.328 105.383 13.024 105.383 13.744C105.383 14.44 104.891 15.4 103.907 16.624C102.059 18.928 100.607 20.08 99.551 20.08C98.783 20.08 98.183 19.444 97.751 18.172C97.727 18.22 97.607 18.424 97.391 18.784C97.199 19.12 97.055 19.372 96.959 19.54C96.887 19.708 96.779 19.936 96.635 20.224C96.395 20.776 96.275 21.268 96.275 21.7C96.275 22.684 96.767 23.176 97.751 23.176C99.383 23.176 100.763 22.84 101.891 22.168C103.043 21.472 104.183 20.428 105.311 19.036C105.407 20.092 105.455 20.896 105.455 21.448ZM99.587 17.092C99.971 17.092 100.535 16.624 101.279 15.688C102.047 14.752 102.431 14.116 102.431 13.78C102.431 13.42 102.299 13.24 102.035 13.24C101.795 13.24 101.363 13.552 100.739 14.176C100.139 14.8 99.659 15.34 99.299 15.796C99.251 16.084 99.227 16.3 99.227 16.444C99.227 16.876 99.347 17.092 99.587 17.092Z" fill="#131212"/>
</svg>


    </div>
     

    
    </div> 
    {/** skill container  */}
    <div className="  flex flex-col gap-12 justify-center md:w-2/3 ref={skillRef} ">
       {/** skill title  */}
    <motion.h1 initial={{x:"-300px"}}
    animate={isSkillRefInView ? {x:0} : { }}
    transition={{delay:1}}
     className="font-bold text-2xl">
    SKILLS                      
    </motion.h1>
    {/**skill list */}
   <div className="flex gap-4 flex-wrap sm:w-2/3 xl:w-full">
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        HTML/CSS
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        JAVA
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        JAVASCRIPT
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        REACT&nbsp;.&nbsp;&nbsp;JS
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        GIT
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        CRYPTOGRAPHY
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        KALI LINUX
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        PYTHON
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        PHOTOGRAPHY
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        STOCK MARKET
    </div>
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        AI INFLUENCER
    </div>
    </div>
   
    
    </div>
     {/** exprince  container  */}
     <motion.div   className="flex flex-col gap-12 justify-center pb-48  xl:w-2/3 md:w-2/3 sm:w-2/3 xs:w-full ref={experienceRef}"
  animate={isExperienceRefInView ? "visible" : "hidden"}
  variants={experienceVariant}>
  {/** experience title  */}
  <motion.h1
  ref={experienceRef}
  initial={{x:"-300px"}}
    animate={isSkillRefInView ? {x:0} : { }}
    transition={{delay:1}}
     className="font-bold text-2xl">
     EXPERIENCE
     </motion.h1>

  {/** experience list */}
  <div className="flex flex-col gap-16 relative">
    {/** vertical line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-600"style={{ width: '4px', height: '100%' }}>
    </div>
    
    {/** experience list items */}
    <div className="flex justify-between h-48">
      {/** left */}
      <div className="w-1/3 ">
        {/** job title*/}
        <div className="bg-white p-3 font-semibold rounded-s-lg rounded-b-lg">JAVA</div>
        {/** job title desc */}
        <div className="p-3 text-m italic">I have been learning Java since finishing school.Over the years, I have gained extensive knowledge and hands-on experience in various aspects of Java programming.</div>
      </div>

      {/** center */}
      <div className="relative w-1/6 flex ">
        {/** circle */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/** right */}
      <div className="w-1/3 "></div>
    </div>

    <div className="flex justify-between h-56">
      {/** left */}
      <div className="w-1/3 "></div>

      {/** center */}
      <div className="relative w-1/6 flex ">
        {/** circle */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/** right */}
      <div className="w-1/3">
        {/** job title */}
        <div className="bg-white p-3 font-semibold rounded-s-lg">PYTHON</div>
        {/** job title desc */}
         <div className="p-3 text-m italic">
         In the 1st year of my college, I developed an interest in Python. Its simplicity and versatility make it an excellent language for scripting and much more.
        </div>
      </div>
    </div>

    <div className="flex justify-between h-48">
      {/** left */}
      <div className="w-1/3 ">
        {/** job title */}
        <div className="bg-white p-3 font-semibold rounded-s-lg">HTML/CSS</div>
        {/** job title desc */}
        <div className="p-3 text-m italic">
          I have been learning HTML/CSS since starting my college. In the early days of my learning, I just made simple pages, but now I build complex and responsive websites.
        </div>
      </div>

      {/** center */}
      <div className="relative w-1/6 flex ">
        {/** circle */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/** right */}
      <div className="w-1/3"></div>
    </div>

    <div className="flex justify-between h-48 mb-16">
      {/** left */}
      <div className="w-1/3"></div>

      {/** center */}
      <div className="relative w-1/6 flex ">
        {/** circle */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/** right */}
      <div className="w-1/3 ">
        {/** job title */}
        <div className="bg-white p-2 font-semibold rounded-s-lg">AI INFLUENCER</div>
{/** job title desc */}
<div className="p-3 text-m italic">
  In this AI generation, many new jobs have emerged, and AI Influencer is one of them. With the help of AI, we make an AI Influencer. You can check on Instagram with handle   &nbsp;&nbsp;
  <a href="https://www.instagram.com/virtualveena" target="_blank" rel="noopener noreferrer" className="text-blue-500">@virtualveena</a>
</div>

      </div>
      
    </div>
  </div>
</motion.div>




     </div>  
   
    


        </div>



    {/** svg container  */}
    <div className="fixed top-0 right-0 w-2/3 xl:w-1/3 md:w-1/4 sm:w-1/4 hidden sm:block xs:block">
  <Shinchan />
</div>
    </motion.div>
)
}
export default AboutPage