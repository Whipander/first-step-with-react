import clsx from "clsx";

function Button({ label, btnStyle, size }) {
  const btnMap = {
    orange: "bg-amber-400 text-white",
    blue: "bg-blue-950 text-white",
    white: "bg-white text-blue-950",
    transparent: "text-white border-3 border-white",
  };

  const sizeMap = {
    md: "px-4 py-2",
    lg: "px-8 py-4",
  };

  const buttonClass = clsx(
    "rounded",
    "cursor-pointer",
    btnMap[btnStyle],
    sizeMap[size]
  );

  return <button className={buttonClass}>{label}</button>;
}

export default Button;
