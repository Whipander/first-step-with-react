import React from "react";
const Link = ({ text, redirection, active, textSize, textColor }) => {
  return (
    <li
      href={redirection}
      className={`${textSize} font-bold hover:text-amber-400 ${textColor}`}
    >
      {text}
    </li>
  );
};

const Navigation = () => {
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
      <ul>
        {links.map((link, index) => {
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Navigation;
