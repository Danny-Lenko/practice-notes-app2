import React, {useEffect, useState} from 'react'
import { nanoid } from 'nanoid'
const Context = React.createContext(null)

function ContextProvider(props) {

   const [notes, setNotes] = useState(
      () => JSON.parse(localStorage.getItem('notes')) || []
   )
   const [currentNote, setCurrentNote] = useState(notes[0] || '')

   function addNote() {
      setNotes(prevState => {
         const resetSelected = prevState.map(note => ({
            ...note, 
            isSelected: false
         }))

         return [createNewNote(), ...resetSelected]
      })
   }

   function createNewNote() {
      const newNote = {
         id: nanoid(),
         content: '# Type your title',
         isSelected: true
      }
      setCurrentNote(newNote)
      return newNote
   }

   function selectNote(id) {
      setNotes(prevState => prevState.map(note => (
         note.id === id 
            ? {...note, isSelected: true}
            : {...note, isSelected: false}
      )))
   }

   function findSelectedNote() {
      return notes.find(note => note.isSelected)
   }

   function updateNote(text) {
      const oldNotes = notes.filter(note => note.id !== currentNote.id)
      const selectedNote = {...currentNote, content: text}
      setNotes([selectedNote, ...oldNotes])
   }

   function deleteNote(id, e) {
      e.stopPropagation()
      setNotes(prevState => prevState.filter(note => note.id !== id))
   }

   useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))

      const currentNote = findSelectedNote()
      currentNote 
         ? setCurrentNote(currentNote)
         : setCurrentNote(notes[0])

   }, [notes])

   return(
      <Context.Provider value={{
         notes,
         addNote,
         selectNote,
         currentNote,
         updateNote,
         deleteNote
      }}>
         {props.children}
      </Context.Provider>
   )
}

export {Context, ContextProvider}