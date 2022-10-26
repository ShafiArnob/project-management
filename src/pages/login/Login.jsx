import { useState } from 'react'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()

  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Login</h2>  
      <label>
        <span>email:</span>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
      </label>  

      <label>
        <span>password:</span>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
      </label>  
        
      <button className='btn'>Login</button>

      {/* {error && <div className='error'>{error}</div>} */}
    </form>
  )
}

export default Login