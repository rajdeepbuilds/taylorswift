
import { Link } from "next/link";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiGithubFill,
} from "react-icons/ri";
const socialMedia = [
  {
    path: "#",
    icon: <RiInstagramFill />,
  },
  {
    path: "#",
    icon: <RiLinkedinFill />,
  },
  {
    path: "#",
    icon: <RiTwitterFill />,
  },
  {
    path: "#",
    icon: <RiGithubFill />,
  },
];

const SocialMedia = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socialMedia.map((item, index) => {
        return <Link href={item.path}>{item.icon}</Link>;
      })}
    </div>
  );
};

export default SocialMedia;
