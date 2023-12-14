import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "../../types/common";
import styles from "./Hamburger.module.scss";

interface HamburgerProps {
  navLinks: Navigation[];
  isOpen?: boolean;
}

const Hamburger = ({ navLinks, isOpen = false }: HamburgerProps) => {
  return (
    <AnimatePresence>
      <motion.nav
        className={styles["hamburger"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ul className={styles["hamburger-nav-list"]}>
          {navLinks.map((link, idx) => (
            <motion.li
              key={link.location}
              className={styles["hamburger-list-item"]}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 + idx / 10,
              }}
            >
              <a href={link.location}>{link.name}</a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Hamburger;
