import H2 from "./H2";
import GirlImg from "../assets/debouche.png";

const Debouche = () => {
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <div className="flex w-[80vw] items-center justify-center">
          <div className="flex flex-col gap-6 w-[50%]">
            <H2 text="Quelques débouchés" />
            <p>
              Formez-vous à une panoplie de métiers du numérique avec nous et
              venez acquérir les fondements de la programmation (qui vous
              servira pour les différents métiers) ! Ce sont des métiers
              porteurs, des métiers du présent, des métiers du futur…
            </p>
            <p>
              Développeur back end, développeur front end, développeurs mobile,
              chefs de projet, exploitants cloud, analystes cybersécurité,
              pentesters, auditeur technique SSI, auditeur organisationnel SSI,
              administrateur système et réseau, développeur de sécurité…
            </p>
          </div>
          <img src={GirlImg} className="w-[30vw]" alt="HEI Student" />
        </div>
      </div>
    </>
  );
};

export default Debouche;
