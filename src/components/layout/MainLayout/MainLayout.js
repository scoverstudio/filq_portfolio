import { Container } from "react-bootstrap";
import Footer from "../../views/Footer/Footer";
import Navigation from "../../views/Navigation/Navigation";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <Container className={styles.container}>
        <Navigation />
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
