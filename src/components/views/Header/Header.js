import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  const [scrollHide, setScrollHide] = useState(false);
  // const [showReel, setShowreel] = useState(false);

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

  // const toogleShow = () => {
  //   setShowreel(!showReel);
  // };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.box}>
          <div className={styles.title}>
            <div className={styles.block}></div>
            <h1>I am FILQ</h1>
          </div>
          <div className={styles.role}>
            <div className={styles.block}></div>
            <div className={styles.content}>
              <p className={styles.profession}>Professional Fragmovie Editor</p>
            </div>
          </div>
        </div>
        <div className={styles.showReel}>
          <div className={styles.iframeContainer}>
            <iframe
              width="1920"
              height="1080"
              src="https://www.youtube.com/embed/zAtTse9pKRs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
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
