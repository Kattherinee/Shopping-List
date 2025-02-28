import ToolBar from "../../components/ToolBar/ToolBar";
import AddButton from "../../ui/AddButton/AddButton";
import styles from "./HomePage.module.css";
import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import NotesList from "../../components/NotesList/NotesList";

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const loadedNotes = keys.map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setNotes(loadedNotes);
  }, []);

  function handleApplyNote(text) {
    if (!text.trim()) {
      setModalOpen(false);
      return;
    }
    if (editMode && editingNote) {
      const updateNote = { ...editingNote, text };
      setNotes((prev) =>
        prev.map((note) => (note.id === editingNote.id ? updateNote : note))
      );
      localStorage.setItem(editingNote.id, JSON.stringify(updateNote));
    } else {
      const noteId = Date.now().toString();
      const newNote = { id: noteId, text: text };
      setNotes((prev) => [...prev, newNote]);
      localStorage.setItem(noteId, JSON.stringify(newNote));
    }
    setModalOpen(false);
  }

  function handleDeleteNote(noteId) {
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
    localStorage.removeItem(noteId);
  }

  function handleOpenEdit(currNote) {
    setEditMode(true);
    setEditingNote(currNote);
    setModalOpen(true);
  }
  function handleOpenAdd() {
    setEditMode(false);
    setEditingNote(null);
    setModalOpen(true);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.head}>SHOPPING LIST</div>
          <ToolBar />
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onApply={handleApplyNote}
            header={editMode ? "Edit Note" : "Add Note"}
            defaultNote={editingNote ? editingNote.text : ""}
          />
          <AddButton className={styles.addButton} onClick={handleOpenAdd} />
          <NotesList
            notes={notes}
            onEditMode={handleOpenEdit}
            onDeleteMode={handleDeleteNote}
          />
        </div>
      </div>
    </>
  );
}
export default HomePage;
