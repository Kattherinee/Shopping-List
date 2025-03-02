import Note from "../../ui/Note/Note";
import styles from "./NotesList.module.css";

export default function NotesList({
  notes,
  onEditMode,
  onDeleteMode,
  onToggle,
}) {
  return (
    <div className={styles.list}>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onEdit={() => onEditMode(note)}
          onDelete={() => onDeleteMode(note.id)}
          onToggle={onToggle}
        >
          {note.text}
        </Note>
      ))}
    </div>
  );
}
