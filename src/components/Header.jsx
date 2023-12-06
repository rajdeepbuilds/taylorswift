'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Header = () => {
  return (
    <header className="fixed z-50 w-full">
      <div className="container mx-auto">
        {/*logo*/}
        <Link href={'#'} className="relative flex w-[226px] h-[37.64px]">
         <Image src={'/assets/header/logo.svg'} fill/>
        </Link>
      </div>
    </header>
  );
  
};

export default Header