import Note from "../../ui/Note/Note";

export default function NotesList({
  notes,
  onEditMode,
  onDeleteMode,
  onToggle,
}) {
  return (
    <>
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
    </>
  );
}
