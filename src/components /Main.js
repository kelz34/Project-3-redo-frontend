import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate
import Index from '../pages/index.js';
import Show from '../pages/show.js';
import CreateNote from '../pages/CreateNote'; // Import the CreateNote component

const URL = "https://thawing-brushlands-81862-dd69e79146b3.herokuapp.com/notes";

const Main = (props) => {
  const [Notes, setNotes] = useState(null);
  const [note, setNote] = useState({});
  //redirect ability navigate
  const navigate = useNavigate();
  //function to find specific note by id
  const findNote = (id) => {
    setNote(Notes.find((p) => {
      return p._id === id;
    }));
  }
//we are fetching notes from backend server
  const getNotes = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
//create note post route
  const createNotes = async (note) => {
    const response = await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    });
    const createdNote = await response.json();
    setNotes((prev) => [...prev, createdNote]);

    // Redirect to the home page after creating a note
    navigate('/notes');
  }
//updating note put route
  const updateNotes = async (note, id) => {
    try {
      await fetch(URL + '/' + id, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      await getNotes();
      findNote(id);

      // Redirect to the home page after updating a note
      navigate('/notes');
    } catch (error) {
      console.error('Error:', error);
    }
  };
//delete route
  const deleteNotes = async (id) => {
    await fetch(URL + '/' + id, {
      method: 'delete'
    });
    getNotes();
  }
//holds empty state until data is rendered and updates app with data it pulls
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<CreateNote createNotes={createNotes} />} /> {/* Create Note page */}
        <Route path="/notes" element={<Index Notes={Notes} findNote={findNote} />} /> {/* View Notes page */}
        <Route path="/notes/:id" element={<Show note={note} updateNotes={updateNotes} deleteNotes={deleteNotes} />} />
      </Routes>
    </main>
  );
}

export default Main;
