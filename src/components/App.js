import React from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'
import Split from "react-split";
import NotesManager from "./NotesManager";

export default function App() {

    return(

        <NotesManager render={
            (params) => (

                <div className="App">

                    {
                        params.notes[0]

                            ? <Split
                                className="split"
                                sizes={[30, 70]}
                                direction="horizontal"
                            >
                                <Sidebar
                                    notes={params.notes}
                                    currentNoteId={params.currentNoteId}
                                    addNote={params.addNote}
                                    currentNote={params.findCurrentNote()}
                                    selectNote={params.selectNote}
                                    deleteNote={params.deleteNote}
                                />

                                <Editor
                                    currentNote={params.findCurrentNote()}
                                    updateNote={params.updateNote}
                                />
                            </Split>

                            : <div className="no-notes">

                                <h1>You have no notes</h1>

                                <button
                                    className="first-note"
                                    onClick={params.addNote}
                                >
                                    Create one now
                                </button>
                            </div>
                    }

                </div>

            )
        } />


    )
}