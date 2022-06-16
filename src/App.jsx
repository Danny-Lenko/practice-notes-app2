import React, {useContext} from 'react'
import Split from 'react-split'
import {Context} from './Context'

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

function App() {
    const {notes, addNote} = useContext(Context)
    console.log(notes)

    return(
        <div className="App">
            {
                notes[0]

                ? <Split className="split" sizes={[30, 70]} direction="horizontal">
                    <Sidebar />
                    <Editor />
                </Split>

                : <section className="no-notes">
                    <h1>You have no notes</h1>
                    <button 
                        className="first-note"
                        onClick={addNote}
                    >
                        Add one now
                    </button>
                </section>
            }
        </div>
    )
}

export default App