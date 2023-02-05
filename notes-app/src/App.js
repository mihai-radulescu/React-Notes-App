import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () =>{
  return (
    <div class='container'>
      <Search />
      <NotesList />
    </div>
  );
};

export default App;