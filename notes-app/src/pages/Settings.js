import NotesList from "../components/NotesList";


const Settings = () => {

    const notes = [
        {
            "id":-1,
            "userid": -1,
            "text": ":( This page is under construction!",
            "date": ""
        },
    ];

    return (
        <div>
            <h1>Settings</h1>
            <NotesList notes={notes} handleAddNote={""} handleDeleteNote={""} showInfo={false}/>
        </div>
    );
};

export default Settings;