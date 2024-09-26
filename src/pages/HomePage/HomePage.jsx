import ToolBar from "../../components/ToolBar/ToolBar";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.head}>SHOPPING LIST</div>
          <ToolBar />
        </div>
      </div>
    </>
  );
}
export default HomePage;
