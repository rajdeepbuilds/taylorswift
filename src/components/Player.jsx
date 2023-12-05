"use client";

import React from "react";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Player = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto">
          {/*text and avatar img */}
          <div>text & avatar img</div>
          {/*player */}
          <div>
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              volume={40}
              volumePlacement="top"
              src="/assets/freedom.mp3"
              style={{
                minWidth:'100%',
                background:'transparent',
                boxShadow:'none',
                
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
