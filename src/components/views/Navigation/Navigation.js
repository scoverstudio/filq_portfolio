import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navigation.module.scss";

const Navigation = () => {
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
        <Navbar.Brand href="#home" className={styles.brandContainer}>
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
          <Nav className="">
            <Nav.Link href="/" className={styles.link}>
              Home
            </Nav.Link>
            <Nav.Link href="/" className={styles.link}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="/" className={styles.link}>
              About
            </Nav.Link>
            <Nav.Link href="/" className={styles.link}>
              Contact
            </Nav.Link>
            <Nav.Link href="#link" className={styles.link}>
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
