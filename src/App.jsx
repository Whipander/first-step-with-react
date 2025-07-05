import NavBar from "./components/NavBar.jsx";
import About from "./section/About.jsx";
import Admission from "./section/Admission.jsx";
import Crew from "./section/Crew.jsx";
import Domaine from "./section/Domaine.jsx";
import Footer from "./section/Footer.jsx";
import Hero from "./section/Hero.jsx";
import Opportunities from "./section/Opportunities.jsx";
import Partenaire from "./section/Partenaire.jsx";
import Program from "./section/Program.jsx";
import Techno from "./section/Techno.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Crew />
      <Opportunities />
      <Domaine />
      <Admission />
      <Program />
      <Techno />
      <Partenaire />
      <Footer />
    </>
  );
}

export default App;
