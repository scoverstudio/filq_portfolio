import styles from "./HomeAbout.module.scss";
// import Atropos from "atropos/react";

const HomeAbout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h3>
          More about my <span>Journey!</span>
        </h3>
        <p>
          Self taught movie editor who started with <span>CS:GO</span> and
          stayed with it for longer time. Over{" "}
          <span>4 years of experience</span> in biggest e-sport industries on
          the world.
        </p>
        <p>
          I'm not closing my work in e-sports only. In the future I would like
          to make videos that goes beyond that.
        </p>
        <p>
          Check out my <span>portfolio</span> for work I gatherd over last 4
          years and look up at <span>About</span> section to know more details.
        </p>
      </div>

      <div className={styles.findMe}>
        <h3>Find me on</h3>
        <p>
          Feel free to <span>contact</span> me!
        </p>
        <div className={styles.linksContainer}>
          <a href="https://www.youtube.com/c/filqTV">
            <i className="fa fa-youtube" aria-hidden="true" />
          </a>
          <a href="https://twitter.com/filqqq">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
