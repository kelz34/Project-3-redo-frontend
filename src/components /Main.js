import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dailylogs from '../pages /Dailylogs';
import Show from "../pages /Show";

const Main = (props) => {
  // display the quotes
  const [notes, setNotes] = useState(null);
  // calling API from backend
  const URL = "http://localhost:4000/notes/";

  const getNotes = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setNotes(data)
  };

  const createNotes = async (note) => {
    // make a request to create a quote
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    getNotes();
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
    getNotes()
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
    <Main>
      <Routes>
        <Route path="/" element={ 
          <Dailylogs notes={notes} 
          createNotes={createNotes}
          />
        }/>
        <Route path="/notes/:id" element={
          <Show
          notes={notes}
          updateNotes={updateNotes}
          deleteNotes={deleteNotes}
          />
        }/>
      </Routes>
    </Main>
      
    </div>
  );
}

export default Main;
