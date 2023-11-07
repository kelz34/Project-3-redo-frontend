import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dailylogs from '../pages /Dailylogs';
import Show from "../pages /Show";

const Main = (props) => {
  // display the quotes
  const [notes, setNotes] = useState(null);
  const [note, setNote] = useState(undefined)

  // calling API from backend
  const URL = "https://thawing-brushlands-81862-dd69e79146b3.herokuapp.com/notes";

  const findNote = (id) => {
    setNote(notes.find((p) => {
      return p._id === id
    }))
  }

  const getNotes = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setNotes(data)
  };

  const createNotes = async (note) => {
    // make a request to create a note
    const response = await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const createdNote = await response.json()
    setNotes((prev) => [...prev, createdNote]);
  }

  const updateNotes = async (note, id) => {
    // make post request to create quote
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note)
    })
    // update list of quotes
   await getNotes()
   findNote(id)
  }

  const deleteNotes = async (id) => {
    // make post request to delete quotes
    await fetch(URL + id, {
      method: "delete",
    })
    // update list of quotes
    getNotes()
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div className="Main">
      <Routes>
        <Route path="/" 
        element={ 
          <Dailylogs 
          notes={notes} 
          createNotes={createNotes}
          findNote={findNote}
          />
        }/>
        <Route path="/notes/:id" 
        element={
          <Show
          note={note}
          updateNotes={updateNotes}
          deleteNotes={deleteNotes}
          />
        }/>
      </Routes>
      
    </div>
  );
}

export default Main;
