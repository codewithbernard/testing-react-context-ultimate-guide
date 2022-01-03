import { useContext } from "react";

import { ThemeContext } from "../../contexts/Theme";

const Button = ({ children, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={`btn-${theme}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
