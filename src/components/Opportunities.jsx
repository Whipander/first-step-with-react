import React from "react";
import H2 from "./H2.jsx";
import opportunitesImg from "../assets/opportunities.webp";
const Opportunities = () => {
  const paragraphes = [
    "Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…",
    "Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…",
  ];
  return (
    <div className="flex justify-center items-center text-blue-950 py-10 mx-72 gap-10">
      <div className="w-1/2">
        <H2 text={"Quelques débouchés"} />
        <div className="flex flex-col gap-5 mt-5">
          {paragraphes.map((paragraph, index) => {
            return (
              <p key={index} className="text-base/8">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={opportunitesImg}
          alt="A girl standing, pointing to the text."
          className="w-[456px]"
        />
      </div>
    </div>
  );
};

export default Opportunities;
