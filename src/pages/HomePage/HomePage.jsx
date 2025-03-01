import ToolBar from "../../components/ToolBar/ToolBar";
import AddButton from "../../ui/AddButton/AddButton";
import styles from "./HomePage.module.css";
import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import NotesList from "../../components/NotesList/NotesList";
import detectiveLight from "../../assets/DetectiveLight.png";
import { useTheme } from "../../ThemeContext";
import cn from "classnames";

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [filterNote, setFilterNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { theme } = useTheme();

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const loadedNotes = keys
      .filter((key) => key !== "theme")
      .map((key) => {
        try {
          return JSON.parse(localStorage.getItem(key));
        } catch (error) {
          return null;
        }
      })
      .filter((note) => note && note.text && note.id);
    setNotes(loadedNotes);
  }, []);

  function handleApplyNote(text) {
    if (!text.trim()) {
      setModalOpen(false);
      return;
    }
    if (editMode && editingNote) {
      const updatedNote = { ...editingNote, text };
      setNotes((prev) =>
        prev.map((note) => (note.id === editingNote.id ? updatedNote : note))
      );
      localStorage.setItem(editingNote.id, JSON.stringify(updatedNote));
    } else {
      const noteId = Date.now().toString();
      const newNote = { id: noteId, text: text, status: false };
      setNotes((prev) => [...prev, newNote]);
      localStorage.setItem(noteId, JSON.stringify(newNote));
    }
    setModalOpen(false);
  }

  function handleDeleteNote(noteId) {
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
    localStorage.removeItem(noteId);
  }

  function handleOpenEdit(note) {
    setEditMode(true);
    setEditingNote(note);
    setModalOpen(true);
  }

  function handleOpenAdd() {
    setEditMode(false);
    setEditingNote(null);
    setModalOpen(true);
  }

  function handleToggleNote(noteId, newStatus) {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === noteId) {
          const updatedNote = { ...note, status: newStatus };
          localStorage.setItem(note.id, JSON.stringify(updatedNote));
          return updatedNote;
        }
        return note;
      })
    );
  }

  function handleSearch(query) {
    setSearchQuery(query);
  }

  function handleFilterNotes(st) {
    setFilterNote(st);
  }

  const displayedNotes = notes.filter((note) => {
    const statusMatch = filterNote === null ? true : note.status === filterNote;
    const searchMatch =
      searchQuery.trim().length < 3 ||
      note.text.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && searchMatch;
  });

  return (
    <div className={cn(styles.container, styles[theme])}>
      <div className={styles.contentWrapper}>
        <div className={styles.head}>TODO LIST</div>
        <ToolBar onFilter={handleFilterNotes} onSearch={handleSearch} />
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onApply={handleApplyNote}
          header={editMode ? "Edit Note" : "Add Note"}
          defaultNote={editingNote ? editingNote.text : ""}
        />
        <AddButton className={styles.addButton} onClick={handleOpenAdd} />
        {displayedNotes.length ? (
          <NotesList
            notes={displayedNotes}
            onEditMode={handleOpenEdit}
            onDeleteMode={handleDeleteNote}
            onToggle={handleToggleNote}
          />
        ) : (
          <div className={styles.empty}>
            <img
              src={detectiveLight}
              alt="detective searching for footprints"
            />
            <h2>Empty...</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
