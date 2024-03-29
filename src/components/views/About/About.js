import clsx from "clsx";
import styles from "./About.module.scss";
import { Container } from "react-bootstrap";
import Atropos from "atropos/react";
import { useSelector } from "react-redux";
import { getClients, getClientsPL } from "../../../redux/clients";
import { useTranslation } from "react-i18next";

const About = () => {
  const clientsEN = useSelector(getClients);
  const clientsPL = useSelector(getClientsPL);

  const [t, i18n] = useTranslation("global");

  const scrollIntoClients = () => {
    const elementToView = document.getElementById("below");
    elementToView.scrollIntoView();
  };

  const clients = i18n.language === "en" ? clientsEN : clientsPL;

  return (
    <Container className={clsx(styles.container)}>
      <section className={styles.clients}>
        <h2>{t("about-me.worked-with")} </h2>
        {clients.map((element) => (
          <a
            href={`/portfolio/${element.channelName}`}
            className={styles.client}
          >
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
                  Example videos
                  <i className="fa fa-arrow-right" aria-hidden="true" />
                </div>
                <a href={`/portfolio/${element.channelName}`}>
                  <i className="fa fa-link" aria-hidden="true" />
                </a>
              </div>
            </div>
          </a>
        ))}
      </section>
      <div className={styles.contentAbout}>
        <div className={styles.text}>
          <h2>
            {t("about-me.title-1")} <span>{t("about-me.title-2")}</span>
          </h2>
          <p>
            {t("about-me.1-part")}{" "}
            <a href="/portfolio/ESL%20Counter-Strike">ESL</a>,{" "}
            <a href="/portfolio/Cloud9 CSGO">Cloud9</a>,{" "}
            <a href="/portfolio/HLTVorg">HLTV.org</a>, and{" "}
            <a href="/portfolio/VALORANT // Polska">VALORANTPolska</a>
            {t("about-me.2-part")}
          </p>
          <p>{t("about-me.3-part")}</p>
          <p>{t("about-me.4-part")}</p>
          {/* <p>
            My moviemaking career started at the beginning of 2017 when I
            started to upload fragmovies on{" "}
            <a href="https://www.youtube.com/c/filqTV">my channel</a>, and by
            the end of the year I've joined{" "}
            <a href="/portfolio/HLTVorg">HLTV.org</a>, since then I have managed
            to produce videos for Youtubers & companies like{" "}
            <a href="/portfolio/ESL%20Counter-Strike">ESL</a>,{" "}
            <a href="/portfolio/VALORANT // Polska">VALORANTPolska</a>,{" "}
            <a href="/portfolio/Cloud9 CSGO">Cloud9</a>,{" "}
            <a href="/portfolio/NadeKing">NadeKing</a>,{" "}
            <a
              href="/portfolio/Snipe2DieTV - CS:GO Channel
"
            >
              Snipe2DieTV
            </a>{" "}
            and few more listed{" "}
            <span
              data-text="below"
              onClick={() => scrollIntoClients()}
              className={styles.below}
              id="below"
            >
              below
            </span>{" "}
            & in <a href="/portfolio">portfolio</a> section.
          </p>
          <p>
            I've been into video games and esports since I was a kid, and it was
            and always will be a huge part of my life. Besides that, I'm really
            passionate about videography & photography, where I'm slowly
            starting to look for some commissions, with few ones already booked
            in. My portfolio bases mostly on Counter-Strike, but I am able to
            provide some of the private videography stuff i've done, for the
            possible clients. Check <a href="/contact">contact</a> section for
            more informations.
          </p> */}
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
    </Container>
  );
};

export default About;
