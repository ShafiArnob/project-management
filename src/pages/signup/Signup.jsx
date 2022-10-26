import { useState } from 'react'
import {useSignup} from '../../hooks/useSignup'
import './Signup.css'
function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const { signup, isPending, error} = useSignup()
  
  const handleFileChange = (e) =>{
    setThumbnail(null)
    let selected = e.target.files[0]
    
    if(!selected){
      setThumbnailError("Please Select a File")
      return
    }
    if(!selected.type.includes('image')){
      setThumbnailError("Selected File must be an image")
      return
    }
    if(!selected.size>100000){
      setThumbnailError("Image file must be less than 100kb")
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    signup(email, password, displayName, thumbnail);
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>  
      <label>
        <span>email:</span>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
      </label>  

      <label>
        <span>password:</span>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
      </label>  
      
      <label>
        <span>display-name:</span>
        <input type="text" onChange={(e)=>setDisplayName(e.target.value)} value={displayName} required/>
      </label>
      
      <label>
        <span>profile thumbnail:</span>
        <input type="file" onChange={handleFileChange} required/>
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>

      
      <button className='btn'>Sign up</button>

      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Signup