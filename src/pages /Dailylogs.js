import { Link } from "react-router-dom";
import { useState } from "react"

// Dailylogs = index 
const Dailylogs = (props) => {
// return will iterate through each individual index from array above
// three functions will be assigned 1 for the function of the component, 1 for loaded and 1 for loading

  const [newForm, setNewForm] = useState({
    day: "",
    symbol: "",
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
      day: "",
      symbol: "",
    })
  }


  const loaded = () => {

  }


  const loading = () => {
    return <h1>Loading...</h1>
  }
};


export default Dailylogs;
