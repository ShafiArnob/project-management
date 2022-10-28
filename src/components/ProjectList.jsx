import './ProjectList.css'
function ProjectList({projects}) {
  return (
    <div>
      {projects.length===0 && <p>No Projects Yet!!!</p>}
      {projects.map(project=>(
        <div key={project}>{project.name}</div>
      ))}
    </div>
  )
}

export default ProjectList