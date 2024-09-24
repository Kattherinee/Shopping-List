import searchIcon from "/src/assets/icons/Search.svg";
import styles from "./Search.module.css";
import cn from "classnames";

export function Search() {
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          className={cn(styles.search)}
          type="text"
          placeholder="Search..."
        />
        <span className={styles.searchIcon}>
          <img src={searchIcon} alt="Search" />
        </span>
      </div>
    </>
  );
}
