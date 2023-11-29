"use client";

import Image from "next/image";
import
 {MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import { fadeIn } from "../../variants";

const locationSequence = [
  "Bunkyo City,Japan",
  3000,
  "Kallang,Singapore",
  3000,
  "Amsterdam,Netherlands",
  3000,
  "Nanterre,France",
  3000,
  "Solna,Sweden",
  3000,
];

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-[850px]" id="home">
        <div className="container mx-auto h-full flex justify-center
        items-center xl:justify-start">
            {/* text */}
            <div>text</div>
            {/* image */}
            <div>
                <Image src={'/assets/hero/singer.png'}
                 width={617}
                 height={893}
                 alt=''
                 quality={50}
                 priority />
            </div>
        </div>
    </section>
  );
};

export default Hero