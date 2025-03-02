import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import styles from "./Modal.module.css";
import { Input } from "../../ui/Input/Input";
import { useTheme } from "../../ThemeContext";

const Modal = function Modal({ open, onClose, onApply, header, defaultNote }) {
  const dialog = useRef();
  const [note, setNote] = useState("");

  const { theme } = useTheme();

  useEffect(() => {
    if (open) dialog.current.showModal();
    else dialog.current.close();
  }, [open]);

  useEffect(() => {
    if (open) setNote(defaultNote);
  }, [defaultNote, open]);

  function handleApply() {
    onApply(note);
    onClose();
  }

  return createPortal(
    <div
      className={cn(styles.overlay, { [styles.open]: open })}
      onClick={onClose}
    >
      <dialog
        className={cn(styles.modal, { [styles.open]: open }, styles[theme])}
        ref={dialog}
        onClick={(e) => e.stopPropagation()} // чтобы клик внутри модалки не закрывал окно
        onClose={onClose}
      >
        <div className={styles.content}>
          <h2>{header}</h2>
          <Input note={note} setNote={setNote} />
        </div>
        <div className={styles.buttonsWrapper}>
          <button
            className={cn(styles.button, styles.cancel)}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={cn(styles.button, styles.apply)}
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </dialog>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
