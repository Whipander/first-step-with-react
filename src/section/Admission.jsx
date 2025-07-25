
import { AdmissionCard } from "../components/AdmissionCard";
import H2 from "../components/H2";


const Admission = () => {
  return (
    <section className="py-16 bg-tan text-white items-center justify-center text-center">
      <div className="flex flex-col gap-10 justify-center items-center">
        <H2 text="Admission" />
        <div className="w-[50vw] text-center flex flex-col gap-2">
          <p>
            Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se
            fait par test de niveau :
          </p>
          <p>
            une épreuve de français niveau B2 et d’une épreuve de mathématiques
            niveau Terminale D.
          </p>
        </div>
        <div className="flex">
          <AdmissionCard
            number="01"
            color="bg-[#FCDFB5]"
            title="Dépôt de dossiers"
            content="pour les bacheliers de toutes séries sans limite d’âge"
            arrow={true}
          />
          <AdmissionCard
            number="02"
            color="bg-[#FFCD8C]"
            title="Test de niveau"
            content="composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D"
            arrow={true}
          />
          <AdmissionCard
            number="03"
            color="bg-[#F9BF58]"
            title="Inscription définitive"
            content="(si test réussi)"
            arrow={false}
          />
        </div>
        <div className="flex gap-5">
          <button className="font-bold text-white text-xl py-3 px-5 border-3 border-white hover:border-blue-950 cursor-pointer hover:bg-blue-950 transition-all duration-300">
            Inscrivez-vous ici
          </button>
          <button className="font-bold text-xl py-3 px-5 bg-blue-950 text-white hover:text-blue-950 cursor-pointer hover:bg-white transition-all duration-300">
            Résultat concours
          </button>
        </div>
      </div>
    </section>
  );
};
export default Admission;
