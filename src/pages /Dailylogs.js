import { Link } from "react-router-dom";
import { useState } from "react"

// Dailylogs = index 
const Dailylogs = (props) => {
// return will iterate through each individual index from array above
// three functions will be assigned 1 for the function of the component, 1 for loaded and 1 for loading

  const [newForm, setNewForm] = useState({
    name: "",
    date: "",
    comment: "",
  })

  
  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.day]: event.target.value })
  }


  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.createQuotes(newForm)
    setNewForm({
      name: "",
      date: "",
      comment: "",
    })
  }


  const loaded = () => {

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
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input 
          type="text"
          value={newForm.date} 
          name="date"
          placeholder="date"
          onChange={handleChange}
        />
        <input  
          type="text"
          value={newForm.img}
          name="comment"
          placeholder="comment"
          onChange={handleChange}
        />
        <input type="submit" value="Create Comment" />
      </form>
      
    </section>
  )
};


export default Dailylogs;
