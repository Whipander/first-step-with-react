import React from "react";
const Link = ({ text, redirection, active, size, color }) => {
  return active ? (
    <li className={`${size} font-bold text-amber-400`}>
      <a href={redirection}>{text}</a>
    </li>
  ) : (
    <li
      href={redirection}
      className={`${size} font-bold hover:text-amber-400 transition-colors ${color}`}
    >
      <a href={redirection}>{text}</a>
    </li>
  );
};

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
