"use client";

import React from "react";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Player = () => {
  return (
    <>
      <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px]
       h-[112px] flex items-center relative z-40"
      >
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          {/*text and avatar img */}
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            <div className="relative w-16 h-16">
              <Image
                className="rounded-[35px]"
                src={"/assets/player/avatar.png"}
                fill
                alt=""
                priority
              />
            </div>
            {/*text*/}
            <div className="leading-none text-white">
              <div className="text-lg font-medium">Taylor Swift</div>
              <div className="text-sm font-light">Lover</div>
            </div>
          </div>
          {/*player */}
          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              volume={40}
              volumePlacement="top"
              src="/assets/freedom.mp3"
              style={{
                minWidth: "100%",
                background: "transparent",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Player;
