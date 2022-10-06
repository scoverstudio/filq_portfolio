import Container from "react-bootstrap/Container";
import styles from "./Homepage.module.scss";
import clsx from "clsx";
import HomeAbout from "../HomeAbout/HomeAbout";
import Header from "../Header/Header";

const Homepage = () => {
  return (
    <Container className={clsx("px-4", styles.container)}>
      <Header />
      <HomeAbout />
    </Container>
  );
};

export default Homepage;
