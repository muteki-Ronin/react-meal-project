// PARTS
import CustomLink from "./CustomLink";

function Header() {
  return (
    <nav className="light-blue lighten-1">
      <div className="nav-wrapper">
        <CustomLink type={"NavLink"} to="/" classCss={"brand-logo"}>
          REACT Meal
        </CustomLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <CustomLink type={"NavLink"} to="/about">
              About
            </CustomLink>
          </li>
          <li>
            <CustomLink type={"NavLink"} to="/contacts">
              Contacts
            </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
