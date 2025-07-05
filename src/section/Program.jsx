import ProgImg from "../assets/program.webp";
import H2 from "../components/H2";
import ProgImg1 from "../assets/pro1.webp";
import ProgImg2 from "../assets/pro2.webp";
import ProgImg3 from "../assets/pro3.webp";
import { ProgramCard } from "../components/ProgramCard";

const Program = () => {
  return (
    <section>
      <div className="flex justify-center items-center text-blue-950 my-16">
        <div className="w-[75vw] flex flex-col gap-6">
          <div className="flex gap-16 mb-6 items-center">
            <img src={ProgImg} alt="Students Picture" className="w-[30vw]" />
            <div className="flex flex-col gap-8">
              <H2 text="Le programme pédagogique" />
              <p className="text-[17px]">
                Suivant le système LMD, jusqu’au Master, notre formation repose
                sur un programme pédagogique conçu en adéquation avec les
                attentes du marché. La formation est sanctionnée par un diplôme
                de Licence et de Master en Informatique reconnu par le MESupRes
                de Madagascar."
              </p>
              <button className="w-fit font-bold text-blue-950 text-xl py-2 px-6 border-3 border-blue-950 hover:border-blue-950 hover:text-white cursor-pointer hover:bg-blue-950 transition-all duration-300">
                Notre programme
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <ProgramCard
              percentage="25%"
              title="Apprentissage théoriques en présentiel"
            />
            <ProgramCard
              percentage="25%"
              title="Apprentissage sur supports numériques"
            />

            <ProgramCard
              percentage="25%"
              title="Travaux individuels de l'étudiant"
            />

            <ProgramCard percentage="25%" title="Apprentissage en entreprise" />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <img src={ProgImg1} alt="People in HEI" className="" />
            <img src={ProgImg2} alt="People in HEI" className="" />
            <img src={ProgImg3} alt="People in HEI" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Program;
