import {useCollection} from '../hooks/useCollection'
import Avatar from './Avatar'

import './OnlineUsers.css'

function OnlineUsers() {
  const {error, documents} = useCollection('users')
  
  return (
    <div className='user-list'>
      <h2>All Users</h2>
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL}></Avatar>
        </div>
      ))}
    </div>
  )
}

export default OnlineUsers