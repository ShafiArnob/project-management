import { useState } from 'react'
import './Create.css'

function Create() {
  const [name,setName] = useState('')
  const [details,setDetails] = useState('')
  const [dueDate,setDueDate] = useState('')
  const [category,setCategory] = useState('')
  const [assignUsers, setAssignUsers] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()

  }

  return (
    <div>
      <h2 className='page-title'>Create New Project</h2>
      <form className='create-form' onSubmit={handleSubmit}>
        <label>
          <span>Project Name: </span>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        </label>

        <label>
          <span>Project Detail: </span>
          <textarea type="text" onChange={(e)=>setDetails(e.target.value)} value={details}/>
        </label>

        <label>
          <span>Set Due Date: </span>
          <input type="date" onChange={(e)=>setDueDate(e.target.value)} value={dueDate}/>
        </label>

        <label>
          <span>Project Category</span>
          {/* category select here */}
        </label>
        
        <label>
          {/* asignee here */}
        </label>


        <button className="btn">Add Project</button>
      </form>
    </div>
  )
}

export default Create