import { Search } from "../../ui/Search/Search";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.head}>SHOPPING LIST</div>
          <Search />
        </div>
      </div>
    </>
  );
}
export default HomePage;
