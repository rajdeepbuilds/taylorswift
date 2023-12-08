"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import NavMobile from "./NavMobile";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";
import Socials  from "./Socials.jsx";

const Header = () => {
  const [active, SetActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      SetActive(window.scrollY > 180);
    };
    //add event listner
    window.addEventListener("scroll", handleScroll);

    //clear event listner
    window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-[#030315] py-6 mb-5" : "bg-[#030315] py-8 mb-5"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/*logo*/}
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image
            src={"/assets/header/logoo.svg"}
            fill
            className="object-contain"
          />
        </Link>
        {/*nav*/}

        <Nav ContainerStyles="hidden xl:flex item-center gap-x-8" />
        {/*nav*/}
        <NavMobile />
        {/*menu btn*/}
        <div className="absolute right-7 top9 z-10 xl:hidden">
          <MenuBtn />
        </div>
        <Socials />
        {/*social icons*/}
      </div>
    </header>
  );
};

export default Header;
