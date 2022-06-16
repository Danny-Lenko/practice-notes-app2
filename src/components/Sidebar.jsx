import React, {useContext} from 'react'
import {Context} from '../Context'

function Sidebar() {
   const {notes, addNote, selectNote, currentNote} = useContext(Context)

   const allNotes = notes.map(note => (
      <section 
         className={`title ${note.id === currentNote.id ? 'selected-note' : ''}`} 
         key={note.id}
         onClick={() => selectNote(note.id)}
      >
         <h5 className="text-snippet">{note.content}</h5>
         <button className="title--delete">
            <i className="gg-trash trash-icon"></i>
         </button>
      </section>
   ))

   return(
      <aside className="sidebar">
         <header className="sidebar--header">
            <h3>Notes</h3>
            <button 
               className="new-note"
               onClick={addNote}
            >+</button>
         </header>

         {allNotes}
      </aside>
   )
}

export default Sidebar