// Socials.jsx
import React from "react";
import { Link } from "next/link";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiGithubFill,
} from "react-icons/ri";

const makichu = [
  {
    path: "#",
    icon: <RiInstagramFill />
  },
  {
    path: "#",
    icon: <RiLinkedinFill />
  },
  {
    path: "#",
    icon: <RiTwitterFill />
  },
  {
    path: "#",
    icon: <RiGithubFill />
  }
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {makichu.map((items, index) => (
        <Link href={items.path} key={index}>
          <a className={`${iconStyles}`}>{items.icon}</a>
        </Link>
      ))}
    </div>
  );
};

export default {makichu, Socials};// Make sure to export the component
