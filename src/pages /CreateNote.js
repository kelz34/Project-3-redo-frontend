import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';

function CreateNote(props) {
  const navigate = useNavigate();
  //reset form evrytime i use it. It was keeping text there after usage previously
  const [newForm, setNewForm] = useState({
    title: '',
    content: '',
    date: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    //character limit on the content for the notes
    if (name === 'content' && value.length > 400) {
      return;
    }

    setNewForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNotes(newForm);

    // Reset the form state
    setNewForm({
      title: '',
      content: '',
      date: '',
    });

    // Redirect to the home page after creating a note
    navigate('/notes');
  };

  return (
    <section className="create-note-container">
      <h2>Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.date}
          name="date"
          placeholder="Date"
          onChange={handleChange}
        />
        <textarea
          value={newForm.content}
          name="content"
          placeholder="Content (max 400 characters)"
          onChange={handleChange}
        />
        <input type="Submit" value="Create Note" />
      </form>
    </section>
  );
}

export default CreateNote;
