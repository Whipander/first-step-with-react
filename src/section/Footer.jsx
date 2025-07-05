import React from "react";
import Navigation from "../components/Navigation.jsx";
import heiLogo from "../assets/hei-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import H3 from "../components/H3.jsx";

const Paragraphe = ({ text }) => {
  return <p className="text-base/7 text-gray-200">{text}</p>;
};

const Footer = () => {
  const adresse = [
    "II J 161 R Ambodivoanjo",
    "Ivandry Antananarivo",
    "101, Madagascar",
  ];

  const socialsIcons = [
    { icon: faFacebook, href: "https://www.facebook.com/hei.school%20" },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/company/hei-school%20",
    },
    { icon: faInstagram, href: "https://www.instagram.com/hei.school/" },
  ];
  return (
    <>
      <footer className="bg-blue-950 pt-4 pb-12">
        <div className="w-2/3 flex justify-around mx-auto py-3">
          <div className="w-1/6 flex flex-col gap-5">
            <img src={heiLogo} alt="HEI logo" width={90} />
            <Paragraphe
              text={"Formation habilitée par l’Etat suivant le système LMD"}
            />
            <Paragraphe text={"Habilitation MESupRes n°31309/2023"} />
          </div>
          <div className="w-1/6 flex flex-col gap-5 pt-22">
            <H3 text={"Adresse"} />
            {adresse.map((p, index) => {
              return <Paragraphe key={index} text={p} />;
            })}
          </div>
          <div className="w-1/6 flex flex-col gap-5 pt-22">
            <H3 text={"Navigation"} />
            <Navigation
              textColor={"text-gray-200"}
              ulDirection={"flex-col"}
            ></Navigation>
          </div>

          <div className="w-1/6 flex flex-col gap-5 pt-22">
            <H3 text={"Médias sociaux"} />
            <div className="flex gap-3">
              {socialsIcons.map((icon, index) => {
                return (
                  <a href={icon.href}>
                    <FontAwesomeIcon
                      icon={icon.icon}
                      key={index}
                      size="xl"
                      className="bg-amber-400 p-2 aspect-square rounded-full text-white cursor-pointer"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-center p-2">
        <p> &copy; HEI Madagascar </p>
      </div>
    </>
  );
};

export default Footer;
