const Link = ({ text, redirection, active, size, color }) => {
  return active ? (
    <li className={`${size} font-bold text-amber-400`}>
      <a href={redirection}>{text}</a>
    </li>
  ) : (
    <li
      href={redirection}
      className={`${size} font-bold hover:text-amber-400 ${color}`}
    >
      <a href={redirection}>{text}</a>
    </li>
  );
};

export default Link;
