import { useEffect } from "react";
import { Container } from "react-bootstrap";
import ParticleBackground from "../../views/backgroundParticles/backgroundParticles";
import Footer from "../../views/Footer/Footer";
import Navigation from "../../views/Navigation/Navigation";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  useEffect(() => {
    window.onload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Container className={styles.container}>
        <ParticleBackground />
        <Navigation />
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
