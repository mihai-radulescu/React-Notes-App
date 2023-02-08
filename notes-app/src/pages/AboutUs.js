import NotesList from "../components/NotesList";


const AboutUs = () => {

    const notes = [
        {
            "id":-1,
            "userid": -1,
            "text": "Who we are: \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.",
            "date": ":)"
        },
        {
            "id":-2,
            "userid": -1,
            "text": "Contact Us: \n\nPhone: 0123456789 \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "date": ";)"
        }
    ];

    return (
        <div>
            <h1>About Us</h1>
            <NotesList notes={notes} handleAddNote={""} handleDeleteNote={""} showInfo={false}/>
        </div>
    );
};

export default AboutUs;