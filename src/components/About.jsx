import aboutImage from "../assets/about.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPeopleGroup,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import H2 from "./H2.jsx";

function About() {
  const textContent = [
    {
      icon: faGraduationCap,
      header: "+3 ans",
      description:
        "Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.",
    },
    {
      icon: faPeopleGroup,
      header: "+250 étudiants",
      description:
        "Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.",
    },
    {
      icon: faMedal,
      header: "Notre mission",
      description:
        "Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.",
    },
  ];
  return (
    <div className="flex justify-center items-center text-blue-950 py-2 mx-52 my-16 gap-10">
      <div className={"flex justify-center items-center w-1/2"}>
        <img
          src={aboutImage}
          alt="Hei students having fun"
          className={"w-[530px]"}
        />
      </div>
      <div className={"flex flex-col gap-10 w-1/2"}>
        <H2 text={"À propos de nous"}></H2>

        {textContent.map((item, index) => (
          <div className={"flex flex-col gap-5 px-2"} key={index}>
            <div className={"flex items-center gap-3"}>
              <FontAwesomeIcon
                icon={item.icon}
                size={"4x"}
                className={"aspect-square text-amber-400"}
              />
              <h3 className={"text-2xl font-bold"}>{item.header}</h3>
            </div>
            <p className="text-base/8">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
