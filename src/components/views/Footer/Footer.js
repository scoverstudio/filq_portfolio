import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className={styles.footerContainer}>
        <p>
          Copyright
          <i className="fa fa-copyright" aria-hidden="true"></i> 2023 Filip
          Szatkowski
        </p>
      </div>
    </footer>
  );
};

export default Footer;
