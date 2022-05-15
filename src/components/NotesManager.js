import React from "react";
import {nanoid} from "nanoid";

function NotesManager(props) {

    const [notes, setNotes] = React.useState(
        JSON.parse(localStorage.getItem('notes'))
    )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ''
    )

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function addNote() {
        const newNote = {
            content: '# Type your title here',
            id: nanoid()
        }
        setNotes(prevState => [newNote, ...prevState])
        setCurrentNoteId(newNote.id)
    }

    function selectNote(id) {
        setCurrentNoteId(id)
    }

    function updateNote(text) {

        setNotes(prevState => prevState.map(note => (
            note.id === currentNoteId
                ? {...note, content: text}
                : note
        )))
    }

    function findCurrentNote() {
        return notes.find(note => note.id === currentNoteId) || notes[0]
    }

    function deleteNote(event, id) {
        event.stopPropagation()
        setNotes(prevState => prevState.filter(note => note.id !== id))
    }

    return(

        <div>
            {props.render({
                notes: notes,
                currentNoteId: currentNoteId,
                addNote: addNote,
                selectNote: selectNote,
                updateNote: updateNote,
                findCurrentNote: findCurrentNote,
                deleteNote: deleteNote
            })}
        </div>

    )
}

export default NotesManager