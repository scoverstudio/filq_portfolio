import { useTranslation } from "react-i18next";
import styles from "./HomeAbout.module.scss";

const HomeAbout = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.container}>
      <div className={styles.findMe}>
        <h3>{t("header.message")}</h3>
        {i18n.language === 'en' ? <p>{t("sub-header.message-part-1")} <span>{t("sub-header.message-contact-part-2")}</span> {t("sub-header.message-part-3")}</p> :  <p>{t("sub-header.message")}</p>}
        <div className={styles.linksContainer}>
          <a href="https://www.youtube.com/c/filqTV">
            <i className="fa fa-youtube" aria-hidden="true" />
          </a>
          <a href="https://twitter.com/filqqq">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com/filkoooo">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
