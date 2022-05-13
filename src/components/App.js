import React from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'
import Split from "react-split";
import { nanoid } from 'nanoid'

export default function App() {

    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState('')

    console.log(notes)

    function createNote() {
        return {
            content: '# Type your title here',
            id: nanoid()
        }
    }

    function addNote() {
        const newNote = createNote()
        setNotes(prevState => [newNote, ...prevState])
        setCurrentNoteId(notes[0].id)
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