import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "../data";
import MagicButton from "./ui/MagicButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [xClient, setXClient] = useState(0);
  const [yClient, setYClient] = useState(0);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const changeMouse = (event) => {
      setXClient(event.clientX);
      setYClient(event.clientY);
    };

    window.addEventListener("mousemove", changeMouse);
  }, [xClient, yClient]);
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <motion.div
        className="bg-purple h-[1.8rem] w-[1.8rem] rounded-full absolute md:inline hidden z-50 -top-10 -left-2 text-black-100 text-sm whitespace-nowrap font-semibold"
        style={
          enter && {
            radius: "10px",
            height: "3rem",
            width: "17rem",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.5s",
          }
        }
        animate={{
          x: xClient,
          y: yClient,
        }}
        transition={{ duration: 0.5 }}
      >
        {enter && "Yeah! Sure send me an email"}
      </motion.div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="mailto:faseehch16@gmail.com?subject=Let's%20get%20in%20touch&body=Hello%20Mughees,"
          onMouseEnter={() => {
            setEnter(true);
          }}
          onMouseLeave={() => {
            setEnter(false);
          }}
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Faseeh Masood
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
