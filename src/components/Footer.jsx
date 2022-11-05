// PARTS
import CustomLink from "./CustomLink";

function Footer() {
  return (
    <footer className="page-footer light-blue lighten-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <CustomLink
            to={"https://github.com/muteki-Ronin/react-meal-project"}
            classCss={"grey-text text-lighten-4 right"}
            target="_blank"
          >
            Repo
          </CustomLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
