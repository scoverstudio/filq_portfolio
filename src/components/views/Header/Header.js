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
              {/* <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <span>
                <p>Profesional</p>
                <p>Fragmovie</p>
                <p>Editor</p>
              </span> */}
              <p className={styles.profession}>Professional Fragmovie Editor</p>
            </div>
          </div>
        </div>
        <div className={styles.showReel}>
          <div className={styles.iframeContainer}>
            <iframe
              width="1120"
              height="315"
              src="https://www.youtube.com/embed/hVp8HBxHhMQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            />
          </div>
        </div>
        {/* <div className={styles.imageContainer}>
          <img
            alt="filq"
            src={`${process.env.PUBLIC_URL}/images/filqImage2.png`}
          ></img>
        </div>
        <div
          className={clsx(styles.showReelContainer, showReel && styles.show)}
        >
          <div className={clsx(styles.showReel, showReel && styles.show)}>
            <h2>Best of Filq</h2>
            <iframe
              className={showReel && styles.show}
              width="1000"
              height="630"
              title="rock"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
            <i
              class="fa fa-plus"
              onClick={() => toogleShow()}
              aria-hidden="true"
            ></i>
          </div>
          <button
            onClick={() => toogleShow()}
            className={showReel && styles.show}
          >
            Showreel
          </button>
        </div> */}
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
