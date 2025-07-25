import React from "react";
import Link from "./Link.jsx";
const Navigation = ({ textSize, textColor, ulDirection }) => {
  const links = [
    {
      text: "ACCUEIL",
      href: "#",
    },
    {
      text: "ACTUALITÉS",
      href: "https://www.hei.school/actualites/",
    },
    {
      text: "BOURSES D'ÉTUDES",
      href: "https://www.hei.school/bourses-detudes/",
    },
    {
      text: "INSCRIPTION",
      href: "https://www.hei.school/inscription/",
    },
  ];
  return (
    <div>
      <ul className={`flex gap-5 ${ulDirection}`}>
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              text={link.text}
              redirection={link.href}
              size={textSize}
              color={textColor}
              active={index == 0 ? true : false}
            ></Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
