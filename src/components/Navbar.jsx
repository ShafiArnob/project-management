import './Navbar.css'
import Temple from '../assets/temple.svg'
import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext"

function Navbar() {
  const {logout} = useLogout()
  const {user} = useAuthContext()
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>

        {!user &&
          <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Sign up</Link></li>
          </>          
        }

        {user ? <li><button className='btn' onClick={logout}>Logout</button></li> : ""}
      </ul>
    </div>
  )
}

export default Navbar