import React from "react"

function Sidebar() {

   return(
      <aside className="sidebar">
         <header className="sidebar--header">
            <h3>Notes</h3>
            <button className="new-note">+</button>
         </header>
      </aside>
   )
}

export default Sidebar