import clsx from "clsx";
import styles from "./About.module.scss";
import { Container } from "react-bootstrap";
import Atropos from "atropos/react";
import { useSelector } from "react-redux";
import { getClients } from "../../../redux/clients";

const About = () => {
  const clients = useSelector(getClients);

  const scrollIntoClients = () => {
    const elementToView = document.getElementById("below");
    elementToView.scrollIntoView();
  };

  return (
    <Container className={clsx(styles.container)}>
      <section className={styles.clients}>
        <h2>Worked with: </h2>
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
            Get to know me <span>better!</span>
          </h2>
          {/* <p>
            Hello! My name is Filip, I'm 21 years old, and I'm a freelance
            professional with extensive experience in film editing and
            photography. Over the past 6 years, I've had the pleasure of
            collaborating with leading esports companies such as{" "}
            <a href="/portfolio/ESL%20Counter-Strike">ESL</a>,{" "}
            <a href="/portfolio/Cloud9 CSGO">Cloud9</a>,{" "}
            <a href="/portfolio/HLTVorg">HLTV.org</a>, and{" "}
            <a href="/portfolio/VALORANT // Polska">VALORANTPolska</a>, creating
            hundreds of films for them. My specialization lies in producing
            various types of content, including vlogs, documentaries, trailers,
            and fragmovies.
          </p>
          <p>
            Additionally, for the past 1.5 years, I've been honing my skills in
            photography and videography. I've had the opportunity to refine my
            craft at events like IEM Katowice 2023, pashagamingcamp18+, 9INE
            bootcamp, local gatherings, and personal travels. My services
            encompass high-quality photograhy & film production and editing,
            utilizing special effects, motion design, and color correction. I'm
            adept at managing multiple projects simultaneously, even under time
            pressure, both independently and as part of a team. My experience
            allows me to efficiently handle tasks and contribute my own ideas
            and creativity to the content creation process. I'm proficient in
            using software such as Sony Vegas and Adobe tools.
          </p>
          <p>
            I come from Strzegom, a small town near Wrocław in Poland, and I've
            been dedicated to film editing since the age of 15. My journey began
            in 2017 when I started creating fragmovies for my own channel. Soon,
            my dedication was recognized, and I joined the HLTV team. Video
            games have always been my passion and an integral part of my life,
            so working in the esports industry is a dream come true for me.
            Besides my professional pursuits, I love traveling, and I hope that
            in the future, these two passions will converge, allowing me to
            travel the world and create content from esports tournaments. If
            you're seeking a professional who combines creativity, technical
            skills, and a passion for film and photography, I'm ready to take on
            the challenge. Together, we can craft stories that capture attention
            and evoke emotions. Feel free to contact me to learn more about how
            I can enhance your projects.
          </p> */}
          <p>
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
    </Container>
  );
};

export default About;
