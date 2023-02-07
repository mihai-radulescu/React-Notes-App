import { MdDeleteForever } from 'react-icons/md';

const Note = ({ noteId, text, date, handleDeleteNote}) =>{
    return(
        <div class='note'>
            <span>{text}</span>
            <div class='note-footer'>
                <small>{date}</small>
                <MdDeleteForever 
                onClick={() => handleDeleteNote(noteId)}
                className='delete-icon' size='1.3em'/>
            </div>
        </div>
    );
};

export default Note;