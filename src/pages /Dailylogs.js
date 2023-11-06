import { Link } from "react-router-dom";
import { useState } from "react"

// Dailylogs = index 
const Dailylogs = (props) => {
// return will iterate through each individual index from array above
// three functions will be assigned 1 for the function of the component, 1 for loaded and 1 for loading

  const [newForm, setNewForm] = useState({
    title: "",
    content: "",
    date: "",
  })

  
  // handleChange function for form
  const handleChange = (event) => {
    setNewForm
    ({ ...newForm, [event.target.name]: event.target.value })
    // (prev => ({ 
    //   ...prev, 
    //   [event.target.title]: event.target.value 
    // }))
  }


  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.createNotes(newForm)
    setNewForm({
      title: "",
      content: "",
      date: "",
    })
  }

  // loaded function
  const loaded = () => {
    return props.notes.map((note) => {
      return(
       <div key={note._id} className="note">
        <Link to={`/notes/${note._id}`} >
          <h1>{note.title}</h1>
        </Link>
      </div>
      )
    })
  }


  const loading = () => {
    return <h1>Loading...</h1>
  }
  // returning submission form
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input 
          type="text"
          value={newForm.content} 
          name="content"
          placeholder="content"
          onChange={handleChange}
        />
        <input  
          type="text"
          value={newForm.date}
          name="date"
          placeholder="date"
          onChange={handleChange}
        />
        <input type="submit" value="Create Comment" />
      </form>
      {props.notes ? loaded() : loading()}
    </section>
  )
};


export default Dailylogs;
