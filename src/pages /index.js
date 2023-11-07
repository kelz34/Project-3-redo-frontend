import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = (props) => {
  const navigate = useNavigate();

  const [newForm, setNewForm] = useState({
    title: '',
    content: '',
    date: '',
  });
//form function to handle changes to state of app
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Limit content to 400 characters
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
  };
//everytime a note is clicked
  const handleNotePress = (e) => {
    console.log(e.currentTarget.id);
    props.findNote(e.currentTarget.id);
    navigate('/notes/' + e.currentTarget.id);
  };

  const loaded = () => {
    return props.Notes.map((note) => {
      return (
        <div key={note._id} className="note">
          <button onClick={handleNotePress} id={note._id}>
            <h1>{note.title}</h1>
          </button>
          <h2>{note.date}</h2>
          <h3>{note.content}</h3>
        </div>
      );
    });
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <h2>Notes</h2>
      {props.Notes ? loaded() : loading()}
    </section>
  );
};

export default Index;
