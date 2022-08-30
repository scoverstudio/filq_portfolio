import clsx from "clsx";
import TagCloud from "TagCloud";
import styles from "./About.module.scss";
import "./About.css";
import { Container } from "react-bootstrap";
import Atropos from "atropos/react";
import SimpleCloud from "./TagCloudMobile";

const About = () => {
  const myTags = [
    "HLTV.org",
    "Dust2.dk",
    "NadeKing",
    "EsportalPolska",
    "Svenska Elitserien",
    "VALORANTPolska",
    "Galaxy Racer",
    "FABRYKA ESPORTU",
    "ESL ",
    "DreamHack",
    "IEM",
    "SCOVER",
  ];

  // eslint-disable-next-line no-unused-vars
  var tagCloud = TagCloud(".content", myTags, {
    radius: 300,
    maxSpeed: "normal",
    initSpeed: "normal",
    direction: 135,
    keep: true,
  });

  return (
    <Container className={clsx(styles.container)}>
      <div className={styles.contentAbout}>
        <div className={styles.text}>
          <h2>
            Know me <span>better!</span>
          </h2>
          <p>
            Hi! My name is <span>Filip Szatkowski</span> and I'm from Poland.
            I'm 20 years old and I live in Strzegom.
          </p>
          <p>
            I`ve been editing CS:GO fragmovies for 5 years now, started at the
            beginning of 2017, and by the end of the year I joined HLTV.org,
            since then - i am still a part of it. During my career I have worked
            with a lot of interesting names e.g.
            <span> VALORANTPolska, ESL, DreamHack, IEM.</span>
          </p>
          <p>
            Hello am 48 year man from somalia. Srry for my bed england. I selled
            my wife for internet connection for play "counter strirk" and i want
            to become the goodest player like you I play with 400 ping on brazil
            server and I am Global elite 2. pls no copy pasterino my story.
          </p>
        </div>
        <Atropos
          shadow={false}
          highlight={false}
          rotateXMax={25}
          rotateYMax={25}
          className={styles.image}
        >
          <img
            alt="gamer"
            className="image"
            src={`${process.env.PUBLIC_URL}/images/aboutImg.png`}
          ></img>
        </Atropos>
      </div>
      <div className={styles.cloudContainer}>
        <h2>worked for</h2>
        <div className={clsx("content", styles.cloud)}></div>
      </div>
      {/* <div className={styles.logos}>
        <h1>
          Biggest <span>Industries</span> I worked for
        </h1>
        <div className={styles.singleImg}>
          <img alt="filq" src={`${process.env.PUBLIC_URL}/images/esl.png`} />
        </div>
        <div className={styles.singleImg}>
          <img alt="filq" src={`${process.env.PUBLIC_URL}/images/iem.png`} />
        </div>
        <div className={styles.singleImg}>
          <img
            alt="filq"
            src={`${process.env.PUBLIC_URL}/images/nadekingLogo.svg`}
          />
        </div>
        <div className={styles.singleImg}>
          <img
            alt="filq"
            src={`${process.env.PUBLIC_URL}/images/DreamHack-logo.png`}
          />
        </div>
        <div className={styles.singleImg}>
          <img alt="filq" src={`${process.env.PUBLIC_URL}/images/HLTV.png`} />
        </div>
      </div> */}
      <div className={styles.work}>
        <h2>
          I <span>worked</span> with
        </h2>
        <SimpleCloud />
      </div>
    </Container>
  );
};

export default About;
