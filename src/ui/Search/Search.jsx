import searchIcon from "/src/assets/icons/Search.svg";
import cross from "/src/assets/icons/cross.svg";
import styles from "./Search.module.css";
import cn from "classnames";
import { useTheme } from "../../ThemeContext";
import { useState } from "react";

export function Search({ onFilter }) {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim().length >= 2) {
      onFilter(search);
    } else {
      onFilter("");
    }
  };

  const handleClear = () => {
    setSearch("");
    onFilter("");
  };

  return (
    <div className={cn(styles.searchContainer, styles[theme])}>
      <input
        className={cn(styles.search, styles[theme])}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={cn(styles.iconsContainer, styles[theme])}>
        <img
          className={styles.icon}
          src={searchIcon}
          alt="Search"
          onClick={handleSearch}
        />
        <span className={styles.iconDivider}></span>
        <img
          className={styles.icon}
          src={cross}
          alt="Clear"
          onClick={handleClear}
        />
      </div>
    </div>
  );
}
