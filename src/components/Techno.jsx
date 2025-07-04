import H2 from "./H2";
import TechImg1 from "../assets/techno/techno1.png";
import TechImg2 from "../assets/techno/techno2.png";
import TechImg3 from "../assets/techno/techno3.png";
import TechImg4 from "../assets/techno/techno4.png";
import TechImg5 from "../assets/techno/techno5.png";
import TechImg6 from "../assets/techno/techno6.png";
import TechImg7 from "../assets/techno/techno7.png";
import TechImg8 from "../assets/techno/techno8.png";
import TechImg9 from "../assets/techno/techno9.png";
import TechImg10 from "../assets/techno/techno10.png";
import TechImg11 from "../assets/techno/techno11.png";

const Techno = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 text-blue-950">
      <div className="max-w-6xl items-center text-center mx-auto flex flex-col gap-5">
        <H2 text="Les technos et langages utilisées" />
        <p className="text-base text-[17px]">
          Nos étudiants sont formés à l’utilisation et à la maîtrise des
          langages de programmation Java et JavaScript. Ces deux langages
          occupent une place de choix dans le domaine du développement logiciel
          et du web, offrant une polyvalence et une robustesse appréciées par
          les développeurs à travers le monde.
        </p>
        <div className="flex gap-20 mt-10">
            <img src={TechImg1} alt="java" className="w-32"/>
            <img src={TechImg2} alt="python" className="w-32"/>
            <img src={TechImg3} alt="javascript" className="w-32"/>
            <img src={TechImg4} alt="c-language logo" className="w-32"/>
            <img src={TechImg5} alt="typescript" className="w-32"/>
        </div>
           <div className="flex items-center mt-2 gap-20">
            <img src={TechImg6} alt="docker" className="h-10"/>
            <img src={TechImg7} alt="NextJS" className="w-28"/>
            <img src={TechImg8} alt="AWS" className="w-18"/>
            <img src={TechImg9} alt="serverless" className="w-36"/>
            <img src={TechImg10} alt="React" className="w-32"/>
            <img src={TechImg11} alt="OpenApi" className="w-32"/>
        </div>
      </div>
    </section>
  );
};
export default Techno;
