import { useState, useEffect } from 'react';
import NotesList from "../components/NotesList";
import Search from "../components/Search";

const MyNotes = () => {
    let userId = '1';
    const [searchText, setSearchText] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/notes?userid=' + userId)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => setNotes(response));

    }, []);

    const addNote = (text) => {
        const date = new Date();
        const lastId = notes[notes.length - 1];
        const newNote = {
            id: lastId.id + 1,
            userid: userId,
            text: text,
            date: date.toLocaleDateString(),
        };

        fetch('http://localhost:3001/notes/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newNote),
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));

        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);

        fetch('http://localhost:3001/notes/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));
    }

    return (
        <div class='container'>
            <Search handleSearchNote={setSearchText} />

            <NotesList
                notes={notes.filter((note) =>
                    note.text.toLowerCase().includes(searchText)
                )}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
                showInfo={true}
            />

        </div>
    );
};

export default MyNotes;