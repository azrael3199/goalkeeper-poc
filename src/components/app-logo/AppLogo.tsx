import styles from "./AppLogo.module.scss";

const AppLogo = () => {
  return (
    <div className={styles["logo-main"]}>
      <div className={styles["circle-one"]}></div>
      <div className={styles["circle-two"]}></div>
      <div className={styles["circle-three"]}></div>
    </div>
  );
};

export default AppLogo;
