import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Show(props) {
  const params = useParams();
  const navigate = useNavigate();

  // Define state for the form data and initialize it with the note's details
  const [updateForm, setUpdateForm] = useState({
    title: props.note.title,
    content: props.note.content,
    date: props.note.date,
  });

  // Handle form input changes
  const handleChange = (event) => {
    setUpdateForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Handle form submission to update the note
  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateNotes(updateForm, params.id);
  };

  // Handle the delete action
  const handleDelete = () => {
    props.deleteNotes(params.id);
    navigate('/notes'); // Redirect to the home page after deletion
  };

  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <h2>{props.note.date}</h2>
      <p>"{props.note.content}"</p>
      <button onClick={handleDelete} id="delete">
        DELETE NOTE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updateForm.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={updateForm.content}
          name="content"
          placeholder="Content"
          onChange={handleChange}
        />
        <input
          type="text"
          value={updateForm.date}
          name="date"
          placeholder="Date"
          onChange={handleChange}
        />
        <input type="submit" value="Update Note" />
      </form>
    </div>
  );
}

export default Show;
