// CORE
import { NavLink } from "react-router-dom";

function CustomLink({ type, to, children, classCss, target }) {
  return type === "a" ? (
    <a href={to} className={classCss} target={target}>
      {children}
    </a>
  ) : (
    <NavLink to={to} className={classCss}>
      {children}
    </NavLink>
  );
}

CustomLink.defaultProps = {
  type: "a",
};

export default CustomLink;
