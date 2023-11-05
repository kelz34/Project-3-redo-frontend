import { useParams } from "react-router-dom"

function Show(props) {
  const params = useParams()
  const  id = params.id
  const notes = props.notes
  const note = notes.find((n) => n._id === id)
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <h2>{note.content}</h2>
      {/* <img src={note.image} alt={note.name} /> */}
    </div>
  )
}
export default Show