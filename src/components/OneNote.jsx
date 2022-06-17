import React, { useContext } from "react"

import { Context } from "../Context"

function OneNote({ note }) {
  const { selectNote, currentNote, deleteNote } = useContext(Context);

  return (
      <section
         className={`title ${note.id === currentNote.id ? "selected-note" : ""}`}
         onClick={() => selectNote(note.id)}
      >

      <h5 className="text-snippet">
         {
            note.content.match(/[\w\s]/g)
               ? note.content.split('\n')[0].match(/[\w\s]/g).join('')
               : ''
         }
      </h5>

      <button className="title--delete">
         <i 
            className="gg-trash trash-icon"
            onClick={(e) => deleteNote(note.id, e)}
         ></i>
      </button>
   
   </section>
  )
}

export default OneNote
