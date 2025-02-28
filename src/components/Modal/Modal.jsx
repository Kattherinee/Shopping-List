import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import styles from "./Modal.module.css";
import { Input } from "../../ui/Input/Input";

const Modal = function Modal({ open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) dialog.current.showModal();
    else dialog.current.close();
  }, [open]);

  return createPortal(
    <dialog
      className={cn(styles.modal, { [styles.open]: open })}
      ref={dialog}
      onClose={onClose}
    >
      <div className={styles.content}>
        <h2>New Note</h2>
        <Input />
      </div>
      <div className={styles.buttonsWrapper}>
        <button className={cn(styles.button, styles.cancel)} onClick={onClose}>
          Cancel
        </button>
        <button className={cn(styles.button, styles.apply)}>Apply</button>
      </div>
    </dialog>,
    document.getElementById("root")
  );
};

export default Modal;
