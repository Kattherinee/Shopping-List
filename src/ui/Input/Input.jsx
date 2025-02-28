import styles from "./Input.module.css";

export function Input() {
  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Input your note..."
        />
      </div>
    </>
  );
}
