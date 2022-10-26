import { useEffect } from 'react'
import { useState } from 'react'
import Select from 'react-select'
import {useCollection} from '../../hooks/useCollection'
import './Create.css'

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
]

function Create() {
  const [name,setName] = useState('')
  const [details,setDetails] = useState('')
  const [dueDate,setDueDate] = useState('')
  const [category,setCategory] = useState('')
  const [assignUsers, setAssignUsers] = useState([])

  const {documents} = useCollection('users')
  const [users, setUsers] = useState([])

  useEffect(()=>{
    if(documents){
      const options = documents.map(user =>{
        return {value:user, label:user.displayName}
      })
      setUsers(options)
    }
  },[documents])

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(name, details, dueDate, category.value, assignUsers);
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
          <span>Project Category:</span>
          <Select onChange={(option)=>setCategory(option)} options={categories}/>
        </label>
        
        <label>
        <span>Assign To: </span>
          <Select options={users} onChange={(option)=>setAssignUsers(option)} isMulti/>
        </label>


        <button className="btn">Add Project</button>
      </form>
    </div>
  )
}

export default Create