import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          {/* <h1>Hi,  </h1> */}
          <div className={styles.title}>
            <div className={styles.block}></div>
            <h2>
              I am FILQ<span>.</span>
            </h2>
          </div>
          <div className={styles.role}>
            <div className={styles.block}></div>
            <div className={styles.content}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              <span>
                <p>Profesional</p>
                <p>Fragmovie</p>
                <p>Editor</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            alt="filq"
            src={`${process.env.PUBLIC_URL}/images/filqImage2.png`}
          ></img>
        </div>
      </div>
      <div className={styles.scrollContainer}>
        <h3>Scroll down </h3>
        <img
          alt="filq"
          src={`${process.env.PUBLIC_URL}/images/mouse-scroll-icon-2.jpg`}
        />
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
      </div>
    </>
  );
};

export default Header;
