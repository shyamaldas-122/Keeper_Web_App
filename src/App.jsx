import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    // arrow function to hold prevnotes
    setNotes((prevNotes) => {
      // returning it to set it new notes array
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(()=>{
    // String to JSON
    const notes=JSON.parse(localStorage.getItem("notes"))
    // console.log(notes);
    if(notes && notes.length>0)
    {
      setNotes(notes);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((newitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newitem.title}
            content={newitem.content}
            color={newitem.color}
            time={newitem.time}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  )
}

export default App
