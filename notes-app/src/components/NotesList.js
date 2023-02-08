import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote, handleDeleteNote, showInfo}) => {

    return(
        <div className='notes-list'>
			<AddNote showInfo={showInfo} handleAddNote={handleAddNote} />
            {notes.map((note) => (
				<Note
					noteId={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
        </div>
    );
};

export default NotesList;