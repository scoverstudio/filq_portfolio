import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navigation.module.scss";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang)
  };
  return (
    <Navbar
      expand="md"
      variant="dark"
      className={clsx(
        "container-fluid navbar navbar-expand-md fixed-top ",
        styles.Navigation
      )}
    >
      <Container className="container-fluid">
        <Navbar.Brand href="/" className={styles.brandContainer}>
          <img
            alt="logo"
            src={`${process.env.PUBLIC_URL}/images/filqLogo.png`}
            className={styles.logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end light"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="/" className={styles.link}>
              Home
            </Nav.Link>
            <Nav.Link href="/portfolio" className={styles.link}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="/about" className={styles.link}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" className={styles.link}>
              Contact
            </Nav.Link>
            <div className={styles.controlLinks}>
              <Nav.Link
                href="https://www.youtube.com/c/filqTV"
                className={styles.link}
              >
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com/filqqq"
                className={styles.link}
              >
                <i className="fa fa-twitter" aria-hidden="true" />
              </Nav.Link>
            </div>
            <div
              className={styles.flag}
              onClick={() =>
                handleChangeLanguage(i18n.language === "en" ? "pl" : "en")
              }
            >
              <img
                alt="language flag"
                src={
                  i18n.language === "en"
                    ? `${process.env.PUBLIC_URL}/images/polish_flag.png`
                    : `${process.env.PUBLIC_URL}/images/english_flag.png`
                }
              ></img>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
