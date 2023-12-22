import styles from "./loader.module.css"

export default function Loader() {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
      <p>Loading questions...</p>
    </div>
  );
}
