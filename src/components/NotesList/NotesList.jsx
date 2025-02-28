import Note from "../../ui/Note/Note";

export default function NotesList({ notes, onEditMode, onDeleteMode }) {
  return (
    <>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onEdit={() => onEditMode(note)}
          onDelete={() => onDeleteMode(note.id)}
        >
          {note.text}
        </Note>
      ))}
    </>
  );
}
