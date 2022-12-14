import { NavLink } from 'react-router-dom'
import {useAuthContext} from '../hooks/useAuthContext'
import Avatar from './Avatar'

import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

function Sidebar() {
  const {user} = useAuthContext()
  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL}></Avatar>
          <p>Hey {user.displayName}</p>
        </div>

        <nav className="links">
          <ul>
            <li>
              <NavLink to="/" exact>
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar