import Avatar from "../../components/Avatar"
import {useFirestore} from '../../hooks/useFirestore'
import {useAuthContext} from '../../hooks/useAuthContext'
import {useNavigate} from 'react-router-dom'
function ProjectSummary({project}) {
  const {deleteDocument} = useFirestore('projects')
  const {user} = useAuthContext()
  const navigate = useNavigate()

  const handleClick = (e) =>{
    deleteDocument(project.id)
    navigate('/')
  }
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project Assigned To: </h4>
        <div className="assigned-users">
          {project.assignUsersList.map(user=>(
            <div key={user.id}>
              <Avatar src={user.photoURL}></Avatar>
            </div>
          ))}
        </div>
      </div>
        {user.uid === project.createdBy.id && (
          <button className="btn" onClick={handleClick}>Mark as Delete</button>
        )}
    </div>
  )
}

export default ProjectSummary