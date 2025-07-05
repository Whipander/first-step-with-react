import heiLogo from "../assets/hei-logo.png";
import Button from "./Button.jsx";
import Navigation from "./Navigation.jsx";

function NavBar() {
  return (
    <>
      <nav className="flex justify-around items-center text-white bg-blue-950 text-lg p-2 px-20 font-bold">
        <div className="flex items-center mb-3">
          <img src={heiLogo} alt="HEI logo" width={90} />
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <Navigation textColor={"text-white"} textSize={"xl"}></Navigation>
            <Button label="INTRANET" btnStyle={"orange"} size={"md"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
