import clsx from "clsx";
import styles from "./About.module.scss";
import "./About.css";
import { Container } from "react-bootstrap";
import Atropos from "atropos/react";
import { useSelector } from "react-redux";
import { getClients } from "../../../redux/clients";

const About = () => {
  const clients = useSelector(getClients);

  // const myTags = [
  //   "HLTV.org",
  //   "Dust2.dk",
  //   "NadeKing",
  //   "EsportalPolska",
  //   "Svenska Elitserien",
  //   "VALORANTPolska",
  //   "Galaxy Racer",
  //   "FABRYKA ESPORTU",
  //   "ESL ",
  //   "DreamHack",
  //   "IEM",
  //   "SCOVER",
  // ];

  return (
    <Container className={clsx(styles.container)}>
      <section className={styles.clients}>
        <h2>Clients!</h2>
        {clients.map((element) => (
          <div className={styles.client}>
            <div className={styles.clientImage}>
              <div className={styles.img}>
                <img
                  style={element.style}
                  alt="client"
                  src={element.image}
                ></img>
              </div>
            </div>
            <div className={styles.clientContent}>
              <div className={styles.clientText}>
                <h4>{element.name}</h4>
                <p>{element.description}</p>
              </div>
              <div className={styles.clientExamples}>
                <div className={styles.exampleVideo}>
                  Example video
                  <i class="fa fa-arrow-right" aria-hidden="true" />
                </div>
                <a href={element.videos[0]}>
                  <i class="fa fa-link" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
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
            src={`${process.env.PUBLIC_URL}/images/filqLogo.png`}
          ></img>
        </Atropos>
      </div>
      {/* <div className={styles.cloudContainer}>
        <h2>worked for</h2>
        <div className={clsx("content", styles.cloud)}></div>
      </div> */}
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
      {/* <div className={styles.work}>
        <h2>
          I <span>worked</span> with
        </h2>
        <SimpleCloud />
      </div> */}
    </Container>
  );
};

export default About;
