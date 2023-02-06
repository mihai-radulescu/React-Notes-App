import { MdDeleteForever } from 'react-icons/md';

const Note = ({ noteId, text, date}) =>{
    return(
        <div class='note'>
            <span>{text}</span>
            <div class='note-footer'>
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    );
};

export default Note;