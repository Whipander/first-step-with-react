import React from "react";
import H2 from "../components/H2.jsx";
import yannickImg from "../assets/yannick.jpg";
import tahinaImg from "../assets/tahina.png";
import louImg from "../assets/dr-lou.jpg";
import miradoImg from "../assets/mirado.webp";
import julienImg from "../assets/julien.webp";
import ryanImg from "../assets/ryan.webp";
import jeanImg from "../assets/jean-aime-maxa.jpg";
import parisonImg from "../assets/parison.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Card = ({ member }) => {
  return (
    <div className="bg-white rounded-2xl overflow-clip shadow-lg p-6 text-blue-950 flex flex-col items-center h-96">
      <img
        src={member.imageSrc}
        alt={member.name}
        className="size-48 rounded-full object-cover mb-4"
      />
      <h3 className="text-2xl font-semibold font-header-serif">
        {member.name}
      </h3>
      <p className="text-sm/6 text-center mt-2">{member.job}</p>
    </div>
  );
};

const Crew = () => {
  const crewMembers = [
    {
      imageSrc: yannickImg,
      name: "Yannick Raharijaona",
      job: "Responsable technique ML chez Rocket Science (Ottawa - Canada)",
    },
    {
      imageSrc: tahinaImg,
      name: "Dre Tahina Ralitera",
      job: "Docteure-Ingénieure, CNRS France | Prix l'Oréal-UNESCO pour les Femmes en science (2017)",
    },
    {
      imageSrc: louImg,
      name: "Dr Lou Maurica",
      job: "Docteur-Ingénieur en Informatique | Fondateur et Directeur pédagogique de HEI",
    },
    {
      imageSrc: miradoImg,
      name: "Mirado RAFENOMAHENINTSOA",
      job: "Data and Business Intelligence Specialist 5+",
    },
    {
      imageSrc: julienImg,
      name: "Julien RAJERISON",
      job: "Lead Développeur | Fondateur de l'association Techzara Madagascar",
    },
    {
      imageSrc: ryanImg,
      name: "Ryan Andriamahery",
      job: "Développeur back end | Cofondateur et Directeur des Opérations de HEI",
    },
    {
      imageSrc: jeanImg,
      name: "Jean Aimé Maxa",
      job: "Responsable technique cybersécurité chez CES France Continental (Toulouse - France)",
    },
    {
      imageSrc: parisonImg,
      name: "Parison Ravalomanda",
      job: "Ingénieur en Informatique | Ingénieur logiciel chez Google (Londres - UK)",
    },
  ];

  return (
    <div className="bg-tan text-white py-16 px-6 md:px-400 text-center">
      <div className="mb-10">
        <H2 text="L'équipe pédagogique" />
        <p className="text-base/8 mt-4">
          Notre équipe pédagogique se compose d’experts nationaux et
          internationaux de l’informatique, de la cybersécurité, de
          l’intelligence artificielle, dont un ingénieur chez Google. Ils sont
          passionnés par l’informatique et sont engagés vers l’excellence. Nous
          sommes conscients que cette équipe est la pierre angulaire de
          l’employabilité de nos étudiants, elle a été soigneusement
          sélectionnée.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
      >
        {crewMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <Card member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Crew;
