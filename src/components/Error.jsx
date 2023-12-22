import styles from "./Error.module.css"

const Error= () => {
  return (
    <p className={styles.error}>
      <span>404 :(</span> There was an error fecthing questions.
    </p>
  );
}

export default Error;
