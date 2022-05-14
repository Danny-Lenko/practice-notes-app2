import React from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'
import Split from "react-split";
import { nanoid } from 'nanoid'

export default function App() {

    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ''
    )

    React.useEffect(() => {

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
        // const oldNotes = notes.filter(note => note.id !== currentNoteId)
        // const newNote = notes.find(note => note.id === currentNoteId)
        // setNotes([{...newNote, content: text}, ...oldNotes])

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

        <div className="App">

            {
                notes[0]

                    ? <Split
                        className="split"
                        sizes={[30, 70]}
                        direction="horizontal"
                    >
                        <Sidebar
                            notes={notes}
                            currentNoteId={currentNoteId}
                            addNote={addNote}
                            currentNote={findCurrentNote()}
                            selectNote={selectNote}
                            deleteNote={deleteNote}
                        />

                        <Editor
                            currentNote={findCurrentNote()}
                            updateNote={updateNote}
                        />
                    </Split>

                    : <div className="no-notes">

                        <h1>You have no notes</h1>

                        <button
                            className="first-note"
                            onClick={addNote}
                        >
                            Create one now
                        </button>
                    </div>
            }

        </div>

    )
}