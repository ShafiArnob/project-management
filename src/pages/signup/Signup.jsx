import './Signup.css'

import React, { useState } from 'react'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  
  return (
    <form className='auth-form'>
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
        <input type="file"  required/>
      </label>

      <button className='btn'>Sign up</button>
    </form>
  )
}

export default Signup