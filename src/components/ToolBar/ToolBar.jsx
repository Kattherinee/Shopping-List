import { Search } from "../../ui/Search/Search";
import styles from "./ToolBar.module.css";
import Select from "../../ui/Select/Select";
import { useState } from "react";

export default function ToolBar() {
  const [status, setStatus] = useState("All");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <>
      <div className={styles.container}>
        <Search />
        <div className={styles.buttons}>
          <Select
            options={["All", "Bought", "To buy"]}
            value={status}
            onChange={handleStatusChange}
          />
        </div>
      </div>
    </>
  );
}
