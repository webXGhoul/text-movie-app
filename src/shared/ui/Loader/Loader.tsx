import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles["loader-block"]}>
      <div className={styles.loader}>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
      </div>
    </div>
  );
};

export default Loader;
