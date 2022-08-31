import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  const [scrollHide, setScrollHide] = useState(false);

  const controlScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 50) {
        setScrollHide(true);
      } else setScrollHide(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlScroll);
      };
    }
  }, []);

  return (
    <>
      <div className={styles.headerContainer}>
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
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
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
        <div
          className={clsx(
            styles.scrollContainer,
            scrollHide && styles.hideScroll
          )}
        >
          <h3>Scroll down </h3>
          <img
            alt="filq"
            src={`${process.env.PUBLIC_URL}/images/mouse-scroll-icon-2.jpg`}
          />
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
