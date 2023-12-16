import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Appbar from "../../components/appbar/Appbar";
import { Navigation } from "../../types/common";

import styles from "./LandingPage.module.scss";

import targetImg from "../../assets/target.svg";
import teamGoalsImg from "../../assets/team-goals.svg";
import progressImg from "../../assets/progress.svg";
import bgImage from "../../assets/landing-bg.jpg";
import useScreenSize from "../../hooks/useScreenSize";
import appConfig from "../../appConfig";

const navLinks: Navigation[] = [
  {
    name: "Home",
    location: "/dashboard",
  },
];

const CONTENT = [
  {
    title: "Unlock Your Potential",
    subtitle: "A Group Goal Tracking App",
    text: "Welcome to Goalkeeper, a hassle-free platform for group accountability and goal setting! Empower yoursefl and your friends to achieve new heights. Embrace the journey of growth, track your progress, and celebrate success together",
    illustration: targetImg,
  },
  {
    title: "Teamwork at its Best",
    subtitle: "Collaborate, Plan, Set and Execute",
    text: "Effortlessly collaborate with your group. Set shared goals, provide support, and witness the power of collective motivation. Our platform fosters a sense of unity, making your journey towards success a shared adventure",
    illustration: teamGoalsImg,
  },
  {
    title: "Real-Time Progress",
    subtitle: "Track, Thrive, Triumph",
    text: "Say goodbye to guesswork. Our app provides real-time progress tracking, giving you insights into your achievements. Visualize your success, stay on course, and revel in satisfaction of reaching milestones together.",
    illustration: progressImg,
  },
];

const CONTACT_DETAILS = {
  email: "info@goalkeeper.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main Street, City, Country, ZIP Code",
  facebook: "sample@sample.com",
  linkedin: "sample@sample.com",
  twitter: "sample@sample.com",
};

const FOOTER_CONTENT = (
  <React.Fragment>
    <p className={styles["footer__content"]}>
      For inquiries, support, or partnership opportunities, please reach out to
      our dedicated team.
    </p>
    <p className={styles["footer__content"]}>
      <strong>Email: </strong>
      <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>
    </p>
    <p className={styles["footer__content"]}>
      <strong>Address: </strong>
      {CONTACT_DETAILS.address}
    </p>
    <p className={styles["footer__content"]}>
      Follow us on social media for updates and tips:
      <div className={styles["footer__content-socialMedia"]}>
        <a href={CONTACT_DETAILS.facebook}>
          <FaFacebook />
        </a>
        <a href={CONTACT_DETAILS.linkedin}>
          <FaLinkedin />
        </a>
        <a href={CONTACT_DETAILS.twitter}>
          <FaTwitter />
        </a>
      </div>
    </p>
  </React.Fragment>
);

const LandingPage = () => {
  const isLoggedIn = false; // TODO: This will come from context

  const screenSize = useScreenSize();

  return (
    <>
      <header className={styles["header"]}>
        <Appbar navLinks={navLinks} isLoggedIn={isLoggedIn} />
      </header>
      <main className={styles["landing-main"]}>
        <div className={styles["background"]}>
          <img src={bgImage} className={styles["background__image"]} />
        </div>
        <section className={styles["main"]}>
          {
            // TODO: Figure out what can be made reusable?
            CONTENT.map((c, idx) => {
              let firstSection, secondSection;
              const imgSection = (
                <section className={styles["info-card__img"]}>
                  <img src={c.illustration} alt={c.subtitle} />
                </section>
              );

              const contentSection = (
                <section className={styles["info-card__main"]}>
                  <div className={styles["info-card__titles-section"]}>
                    <p className={styles["info-card__title"]}>{c.title}</p>
                    <p className={styles["info-card__subtitle"]}>
                      {c.subtitle}
                    </p>
                  </div>
                  <div className={styles["info-card__content"]}>{c.text}</div>
                </section>
              );

              if (
                screenSize.width <=
                  appConfig.breakpoints.layoutBreakpointSmall ||
                idx % 2 === 0
              ) {
                firstSection = imgSection;
                secondSection = contentSection;
              } else {
                firstSection = contentSection;
                secondSection = imgSection;
              }

              return (
                <article key={c.title} className={styles["info-card"]}>
                  {firstSection}
                  {secondSection}
                </article>
              );
            })
          }
        </section>
      </main>
      <footer className={styles["landing-footer"]}>{FOOTER_CONTENT}</footer>
    </>
  );
};

export default LandingPage;
