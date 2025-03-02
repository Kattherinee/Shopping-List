import styles from "./Input.module.css";
import { useTheme } from "../../ThemeContext";
import cn from "classnames";

export function Input({ note, setNote }) {
  const { theme } = useTheme();

  return (
    <>
      <div className={cn(styles.inputContainer, styles[theme])}>
        <input
          className={cn(styles.input, styles[theme])}
          type="text"
          placeholder="Input your note..."
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
      </div>
    </>
  );
}
