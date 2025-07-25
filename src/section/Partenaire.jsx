import H2 from "../components/H2";

import ParImg1 from "../assets/partenaires/par1.webp";
import ParImg2 from "../assets/partenaires/par2.png";
import ParImg3 from "../assets/partenaires/par3.webp";
import ParImg4 from "../assets/partenaires/par4.png";
import ParImg5 from "../assets/partenaires/par5.png";
import ParImg6 from "../assets/partenaires/par6.png";
import ParImg7 from "../assets/partenaires/par7.webp";
import ParImg8 from "../assets/partenaires/par8.webp";
import ParImg9 from "../assets/partenaires/par9.png";

const Partenaire = () => {
  return (
    <section className="py-16 px-4 text-blue-950">
      <div className="max-w-6xl items-center text-center mx-auto flex flex-col gap-5">
        <H2 text="Nos partenaires" />
        <p className="text-base text-[17px] mx-36">
          L’employabilité de nos étudiants se base sur la pertinence de notre
          programme pédagogique et de la composition de notre corps enseignant
          mais aussi du soutien et la collaboration des entreprises partenaires
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-20 mt-10">
            <a href="http://www.nexta.mg/">
              <img src={ParImg1} alt="NEXTa" className="w-32" />
            </a>
            <a href="https://www.passerellesnumeriques.org/fr/">
              <img src={ParImg2} alt="PNM" className="h-16" />
            </a>
            <a href="https://www.getyooz.com/fr/">
              <img src={ParImg3} alt="yooz" className="w-36" />
            </a>
            <a href="https://etechconsulting-mg.com/">
              <img src={ParImg4} alt="etech" className="w-36" />
            </a>
            <a href="https://emit.mg/accueil">
              <img src={ParImg5} alt="EMIT" className="w-32" />
            </a>
          </div>
          <div className="flex items-center mt-2 gap-20">
            <a href="https://www.numer.tech/">
              <img src={ParImg6} alt="Numer" className="w-36" />
            </a>
            <a href="https://www.bpartners.app/home">
              <img src={ParImg7} alt="B Parters" className="w-40" />
            </a>
            <a href="https://youritfactory.com/">
              <img src={ParImg8} alt="java" className="w-32" />
            </a>
            <a href="https://kanteco.com/home">
              <img src={ParImg9} alt="Kante Co" className="w-32" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Partenaire;
