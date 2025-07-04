import H2 from "./H2";
import CloudImg from "../assets/cloud.png";
import IntelImg from "../assets/intel.png";
import IngenImg from "../assets/ingen.png";

const DomaineCard = ({ pic, title, content }) => {
  return (
    <div className="rounded-xl hover:shadow-md flex flex-col transition-all items-center text-center px-8 pb-6 h-[70vh] bg-white w-full sm:w-1/3">
      <img src={pic} alt={`${title} illustration`} className="w-36" />
      <h3 className="text-2xl mt-2 mb-4 font-header-serif font-semibold text-amber-500">
        {title}
      </h3>
      <p className="text-blue-950 text-[17px]">{content}</p>
    </div>
  );
};

const Domaine = () => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl items-center text-center mx-auto flex flex-col gap-4">
        <H2 text="Domaines"/>
        <p className="text-base text-blue-950 text-[17px]">
          Au cours de vos trois ans de formation, naviguez entre les domaines
          les plus porteurs du numérique du présent et de l'avenir :
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          <DomaineCard
            pic={CloudImg}
            title="Cloud et cybersécurité"
            content="Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité."
          />
          <DomaineCard
            pic={IntelImg}
            title="Intelligence artificielle"
            content="Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI."
          />
          <DomaineCard
            pic={IngenImg}
            title="Ingénierie logicielle"
            content="Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques."
          />
        </div>
      </div>
    </section>
  );
};

export default Domaine;
