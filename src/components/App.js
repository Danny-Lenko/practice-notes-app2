import React from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'
import Split from "react-split";
import { nanoid } from 'nanoid'

export default function App() {

    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState('')

    function addNote() {
        const newNote = {
            content: '# Type your title here',
            id: nanoid()
        }
        setNotes(prevState => [newNote, ...prevState])
        setCurrentNoteId(newNote.id)
    }

    function selectNote(event, id) {
        event.stopPropagation()

        setCurrentNoteId(id)
    }

    function findCurrentNote() {
        return notes.find(note => note.id === currentNoteId)
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
                        />

                        <Editor />

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