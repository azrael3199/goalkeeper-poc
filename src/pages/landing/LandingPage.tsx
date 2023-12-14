import Appbar from "../../components/appbar/Appbar";
import { Navigation } from "../../types/common";

import styles from "./LandingPage.module.scss";

import targetImg from "../../assets/target.svg";
import teamGoalsImg from "../../assets/team-goals.svg";
import progressImg from "../../assets/progress.svg";

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

const LandingPage = () => {
  const isLoggedIn = false; // TODO: This will come from context

  return (
    <>
      <header className={styles["header"]}>
        <Appbar navLinks={navLinks} isLoggedIn={isLoggedIn} />
      </header>
      <main className={styles["landing-main"]}>
        <section className={styles["main"]}>
          {
            // TODO: Figure out what can be made reusable?
            CONTENT.map((c, idx) => {
              const firstSection = (
                <section className={styles["info-card__img"]}>
                  <img src={c.illustration} alt={c.subtitle} />
                </section>
              );

              const secondSection = (
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

              console.log(idx);

              return (
                <article key={c.title} className={styles["info-card"]}>
                  {idx % 2 === 0 && firstSection}
                  {idx % 2 === 0 && secondSection}
                  {idx % 2 === 1 && secondSection}
                  {idx % 2 === 1 && firstSection}
                </article>
              );
            })
          }
        </section>
      </main>
    </>
  );
};

export default LandingPage;
