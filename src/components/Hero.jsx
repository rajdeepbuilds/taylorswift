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
    <section className="h-[80vh] xl:h-[850px] mb-10" id="home">
        <div className="container mx-auto h-full flex justify-center 
        items-center xl:justify-start">
            {/* text */}
            <div className=" h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12">
              <MouseParallaxContainer
               globalFactorX={0.1} 
               globalFactorY={0.2} 
               resetOnLeave 
               className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]">
                <MouseParallaxChild
                 factorX={0.2}
                 factorY={0.4}
                 className="relative ">
                  <motion.div
                  variants={fadeIn('up',0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount:0.3}}
                   className="w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]">
                    <Image src={'/assets/hero/TAYLOR.svg'}
                    fill
                    alt=''
                    className="object-contain"/>
                  </motion.div>
                </MouseParallaxChild>

                <MouseParallaxChild
                 factorX={0.9}
                 factorY={0.9}
                 className="absolute xl:left-6 z-30">
                  <motion.div
                  variants={fadeIn('up',0.7)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount:0.3}}
                   className="w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]">
                    <Image src={'/assets/hero/Swift.svg'}
                    fill
                    alt=''
                    className="object-contain"/>
                  </motion.div>
                </MouseParallaxChild>
              </MouseParallaxContainer>
            </div>
            {/* image */}
            <div className="hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px]
             before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10">
                <Image src={'/assets/hero/mm 1.png'}
                 width={617}
                 height={893}
                 alt=''
                 quality={100}
                 
                 priority />
            </div>
        </div>
    </section>
  );
};

export default Hero