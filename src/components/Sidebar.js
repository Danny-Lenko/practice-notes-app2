import React from 'react'

export default function Sidebar(props) {

    const allNotes = props.notes.map(note => (

        <section key={note.id}
                 className={`
                    title ${ note === props.currentNote 
                        ? 'selected-note' 
                        : '' }
                 `}
                 onClick={() => props.selectNote(note.id)}
        >

            <h4 className="text-snippet">
                {note.content.match(/[\w\s]/g)}
            </h4>

            <button
                className="delete-btn"
                onClick={(event) => props.deleteNote(event, note.id)}
            >
                <i className="gg-trash trash-icon"></i>
            </button>
        </section>
    ))


    return(

        <aside className="sidebar">

            <header className="sidebar--header">

                <h3>Notes</h3>

                <button className="new-note"
                        onClick={props.addNote}
                >
                    +
                </button>
            </header>

            {allNotes}

        </aside>

    )
}