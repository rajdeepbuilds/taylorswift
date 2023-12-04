"use client";

import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Player = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto ">
          {/*text and avatar img */}
          <div>text & avatar img</div>
          {/*player */}
          <AudioPlayer
          
            loop
            preload="none"
            color="#333"
            volume={40}
            volumePlacement="top"
            src="/assets/freedom.mp3"
            style={{
                background: 'transparent',
                boxShadow: 'none',
                width: '100%',

            }}
          />
        </div>
      </div>
    </>
  );
};

export default Player;
