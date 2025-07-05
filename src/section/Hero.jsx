import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heiBanner1 from "../assets/hei-banner-1.webp";
import heiBanner2 from "../assets/hei-banner-2.webp";
import heiBanner3 from "../assets/hei-banner-3.webp";

import Button from "../components/Button.jsx";

function Hero() {
  const slides = [
    {
      image: heiBanner1,
      description:
        "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants.",
    },
    {
      image: heiBanner2,
      description:
        "« L'éducation est l'arme la plus puissante pour changer le monde. » Selon Nelson Mandela. « L'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » Selon HEI. C'est notre mission.",
    },
    {
      image: heiBanner3,
      description:
        "Des enseignants expérimentés et une méthode active centrée sur les compétences métier.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="h-screen relative text-shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={`HEI Banner ${index + 1}`}
              className="h-screen w-screen object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center gap-20 px-4">
              <h1 className="text-white font-header-serif font-semibold text-8xl leading-tight">
                Haute École d'Informatique
              </h1>

              <p className="text-white text-xl w-3/4 max-w-3xl transition-all duration-500">
                {slides[currentSlide].description}
              </p>

              <div className="font-bold text-lg flex items-center gap-16 w-3/4 flex-wrap justify-center">
                <Button
                  btnStyle="white"
                  label="Inscrivez-vous ici"
                  size="lg"
                  customAttributes="min-w-1/5"
                />
                <Button
                  btnStyle="orange"
                  label="Emploi du temps"
                  size="lg"
                  customAttributes="min-w-1/5"
                />
                <Button
                  btnStyle="blue"
                  label="Programme pédagogique"
                  size="lg"
                  customAttributes="min-w-1/5"
                />
              </div>

              <p className="text-white text-xl">
                Habilitation MESupRES, suivant l'arrêté n°31309/2023
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
