import React, { useContext } from "react"

import { Context } from "../Context"
import OneNote from "./OneNote"

function Sidebar() {
   const { notes, addNote } = useContext(Context)

   const allNotes = notes.map((note) => (
      <OneNote note={note} key={note.id} />
   ));

  return (
    <aside className="sidebar">

      <header className="sidebar--header">
         <h3>Notes</h3>
         <button className="new-note" onClick={addNote}>
            +
         </button>
      </header>

      {allNotes}

    </aside>
  )
}

export default Sidebar
