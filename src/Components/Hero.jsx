"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Fixed: No TypeScript syntax
  const handleMouseMove = useCallback((event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/Faseeh_M_Resume.pdf";
    link.download = "Faseeh_M_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Background Grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-grid-black/[0.2] dark:bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center pointer-events-none">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Custom Mouse Follower */}
      <motion.div
        className="fixed pointer-events-none z-[60] hidden md:block"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.8,
        }}
      >
        <div
          className={`bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 flex items-center justify-center shadow-lg
            ${isHovering 
              ? "w-[280px] h-12 text-base" 
              : "w-5 h-5 rounded-full"
            }`}
        >
          {isHovering && "Let's have a look at my resume... ✨"}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-widest uppercase text-xs text-center text-blue-100 max-w-80">
            Start Dynamic Web Magic With Me
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts Into Seamless User Experience"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-neutral-300">
            Hi I&apos;m Faseeh, A MERN Stack Developer
          </p>

          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="mt-4"
          >
            <MagicButton
              title="Download My Resume"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="gap-2"
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
