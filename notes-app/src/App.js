import { useState, useEffect } from 'react';
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () =>{

  let userId = '1';
  const [searchText, setSearchText] = useState('');
  const [notes, setNotes] = useState([]);
  

  fetch('http://localhost:3001/notes?userid=' + userId)
    .then(response => response.json())
    //.catch(error => console.error('Error:', error));
    .then(response => setNotes(response));


  return (
    <div class='container'>
      <Header />

      <Search handleSearchNote={setSearchText} />

      <NotesList 
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
      />

    </div>
  );
};

export default App;