import { MdDeleteForever } from 'react-icons/md';

const Note = () =>{
    return(
        <div class='note'>
            <span>Hello. This is a note</span>
            <div class='note-footer'>
                <small>05/02/2023</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    );
};

export default Note;