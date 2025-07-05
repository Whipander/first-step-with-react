import heiLogo from "../assets/hei-logo.png";
import Button from "../components/Button.jsx";

function NavBar() {
  return (
    <>
      <nav className="flex justify-around items-center text-white bg-blue-950 text-lg p-2 px-20 font-bold">
        <div className="flex items-center mb-3">
          <img src={heiLogo} alt="HEI logo" width={90} />
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <ul className="flex gap-5 items-center">
              <li className="text-amber-400">
                <a >ACCUEIL</a>
              </li>
              <li className="hover:text-amber-400">
                <a>ACTUALITÉS</a>
              </li>
              <li className="hover:text-amber-400">
                <a>BOURSE D'ÉTUDES</a>
              </li>
              <li className="hover:text-amber-400">
                <a>INSCRIPTION</a>
              </li>
            </ul>
            <Button label="INTRANET" btnStyle={"orange"} size={"md"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
