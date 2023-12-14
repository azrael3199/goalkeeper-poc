import { Squash as HamburgerButton } from "hamburger-react";
import styles from "./Appbar.module.scss";
import { Navigation } from "../../types/common";
import AppLogo from "../app-logo/AppLogo";
import Hamburger from "../hamburger-menu/Hamburger";
import { useState } from "react";

interface AppbarProps {
  sticky?: boolean;
  navLinks?: Navigation[];
  isLoggedIn?: boolean;
}

const Appbar = ({
  sticky = false,
  navLinks,
  isLoggedIn = false,
}: AppbarProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Handlers
  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  return (
    <nav
      className={styles["navbar-main"]}
      style={{
        position: sticky ? "sticky" : "static",
        top: sticky ? 0 : undefined,
      }}
    >
      <div className={styles["nav-holder"]}>
        <section className={styles["left-section"]}>
          {navLinks && (
            <div className={styles["burger-menu"]}>
              <div className={styles["burger-icon"]}>
                <HamburgerButton
                  toggled={hamburgerOpen}
                  size={20}
                  toggle={toggleHamburger}
                />
              </div>
            </div>
          )}
          <div className={styles["brand"]}>
            <div className={styles["brand-logo"]}>
              <AppLogo />{" "}
            </div>
            <p className={styles["app-title"]}>GoalKeeper</p>
          </div>
          <ul className={styles["links-list"]}>
            {navLinks?.map((link: Navigation) => (
              <li key={link.location}>
                <a href={link.location} className={styles["page-link"]}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles["right-section"]}>
          {isLoggedIn ? (
            <>
              {
                // TODO: Profile Avatar
              }
            </>
          ) : (
            <div className={styles["auth-btns"]}>
              <button className={styles["login"]}>Login</button>
              <button className={styles["signup"]}>Sign Up</button>
            </div>
          )}
        </section>
      </div>
      {navLinks && hamburgerOpen && <Hamburger navLinks={navLinks} />}
    </nav>
  );
};

export default Appbar;
