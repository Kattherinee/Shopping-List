import styles from "./ModeButton.module.css";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import { useTheme } from "../../ThemeContext";
import cn from "classnames";

export default function ModeButton({}) {
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      <button
        className={cn(styles.modeButton, styles[theme])}
        onClick={toggleTheme}
      >
        <img src={theme === "light" ? moon : sun} alt="" />
      </button>
    </>
  );
}
