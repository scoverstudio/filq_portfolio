import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className={styles.footerContainer}>
        <p>
          Copyright
          <i class="fa fa-copyright" aria-hidden="true"></i> 2022 Filip
          Szatkowski
        </p>
      </div>
    </footer>
  );
};

export default Footer;
