import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
 
const Show = (props) => {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id
  const notes = props.notes
  const note = notes.find((n) => n._id === id)

  const [editForm, setEditForm] = useState(note)

  // this function handles change that occurs in the edit form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateNotes(editForm);
    navigate("/")
  };

  const removeNote = () => {
    props.deleteNotes(notes._id)
    navigate("/")
  };

  return (
    <div className="note">
      <h1>{note.title}</h1>
      <h2>{note.content}</h2>
      <button id="delete" onClick={removeNote}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.content}
          name="content"
          placeholder="content"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.date}
          name="date"
          placeholder="date"
          onChange={handleChange}
        />
        <input type="submit" value="Update Note" />
      </form>
    </div>
  )
}
export default Show

