import { Search } from "../../ui/Search/Search";
import styles from "./ToolBar.module.css";
import Select from "../../ui/Select/Select";
import { useState } from "react";
import ModeButton from "../../ui/ModeButton/ModeButton";

export default function ToolBar({ onFilter, onSearch }) {
  const [status, setStatus] = useState("All");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div className={styles.container}>
      <Search onFilter={onSearch} />
      <div className={styles.buttons}>
        <Select
          options={["All", "Done", "To do"]}
          value={status}
          onChange={handleStatusChange}
          onFilter={onFilter}
        />
      </div>
      <ModeButton />
    </div>
  );
}
