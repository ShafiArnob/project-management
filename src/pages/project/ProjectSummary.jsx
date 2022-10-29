import Avatar from "../../components/Avatar"

function ProjectSummary({project}) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
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
    </div>
  )
}

export default ProjectSummary