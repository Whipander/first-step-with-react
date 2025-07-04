import H2 from "./H2";

const Admission = () => {
  return (
    <div className="h-screen bg-tan text-white items-center justify-center text-center">
      <div className="flex flex-col gap-5 bg-amber-400 justify-center  items-center">
        <H2 text="Admission" />
        <p className="w-[50vw] text-center bg-red-400">
          Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se
          fait par test de niveau : une épreuve de français niveau B2 et d’une
          épreuve de mathématiques niveau Terminale D.
        </p>
      </div>
    </div>
  );
};
export default Admission;
