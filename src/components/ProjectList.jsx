import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar'
//styles
import './ProjectList.css'
function ProjectList({projects}) {
  return (
    <div className='project-list'>
      {projects.length===0 && <p>No Projects Yet!!!</p>}
      {projects.map(project=>(
        <Link to={`/project/${project.id}`} key={project.id}>
            <h4>{project.name}</h4>
            <p>Due by {project.dueDate.toDate().toDateString()}</p>
            <div className="assigned-to">
              <ul>
                {project.assignUsersList.map(user=>(
                  <li key={user.photoURL}>
                    <Avatar src={user.photoURL}></Avatar>
                  </li>
                ))}
              </ul>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default ProjectList