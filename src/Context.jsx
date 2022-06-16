import React, {useState} from 'react'
import { nanoid } from 'nanoid'
const Context = React.createContext(null)

function ContextProvider(props) {
   const [notes, setNotes] = useState([])

   function addNote() {
      setNotes(prevState => [createNewNote(), ...prevState])
   }

   function createNewNote() {
      return ({
         id: nanoid(),
         content: ''
      })
   }

   return(
      <Context.Provider value={{
         notes,
         addNote
      }}>
         {props.children}
      </Context.Provider>
   )
}

export {Context, ContextProvider}