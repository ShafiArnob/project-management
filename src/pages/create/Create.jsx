import { useEffect, useState } from 'react'
import Select from 'react-select'
import {useCollection} from '../../hooks/useCollection'
import {timeStamp} from '../../firebase/config'
import {useAuthContext} from '../../hooks/useAuthContext'
import {useFirestore} from '../../hooks/useFirestore'
import {useNavigate} from 'react-router-dom'

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
  const [formError, setFormError] = useState(null)

  const navigate = useNavigate()
  const {addDocument, response} = useFirestore('projects')
  const {documents} = useCollection('users')
  const [users, setUsers] = useState([])

  const {user} = useAuthContext( )
  useEffect(()=>{
    if(documents){
      const options = documents.map(user =>{
        return {value:user, label:user.displayName}
      })
      setUsers(options)
    }
  },[documents])

  const handleSubmit = async (e) =>{
    e.preventDefault()

    setFormError(null)

    if(!category){
      setFormError("Please Select a project category")
      return
    }
    if(assignUsers.length<1){
      setFormError("Please assign the project to at least One user")
      return
    }
    const assignUsersList = assignUsers.map((u)=>{
      // console.log(u);
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id
      }
    })
    const createdBy = {
      displayName:user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    }
    const project = {
      name,
      details,
      category:category.value,
      dueDate: timeStamp.fromDate(new Date()),
      comments:[],
      createdBy,
      assignUsersList
    }
    // console.log(project);
    await addDocument(project);
    if(!response.error){
      navigate('/')
    }
    console.log(response);
  }

  return (
    <div>
      <h2 className='page-title'>Create New Project</h2>
      <form className='create-form' onSubmit={handleSubmit}>
        <label>
          <span>Project Name: </span>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} required/>
        </label>

        <label>
          <span>Project Detail: </span>
          <textarea type="text" onChange={(e)=>setDetails(e.target.value)} value={details} required/>
        </label>

        <label>
          <span>Set Due Date: </span>
          <input type="date" onChange={(e)=>setDueDate(e.target.value)} value={dueDate} required/>
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
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  )
}

export default Create