import styles from "./Input.module.css";

export function Input({ note, setNote }) {
  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Input your note..."
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
      </div>
    </>
  );
}
