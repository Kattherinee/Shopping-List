import ToolBar from "../../components/ToolBar/ToolBar";
import AddButton from "../../ui/AddButton/AddButton";
import styles from "./HomePage.module.css";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleModalOpen() {
    setModalOpen(true);
  }
  function handleModalClose() {
    setModalOpen(false);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.head}>SHOPPING LIST</div>
          <ToolBar />
          <Modal open={modalOpen} onClose={handleModalClose} />
          <AddButton className={styles.addButton} onClick={handleModalOpen} />
        </div>
      </div>
    </>
  );
}
export default HomePage;
