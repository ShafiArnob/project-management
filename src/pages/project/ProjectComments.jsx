import {timeStamp} from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import {useFirestore} from '../../hooks/useFirestore'
import { useState } from 'react'


const ProjectComments = ({project}) => {
  const {updateDocument, response} = useFirestore('projects')
  const [newComment, setNewComment] = useState('')
  const {user} = useAuthContext()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timeStamp.fromDate(new Date()),
      id: Math.random()
    }
    await updateDocument(project.id, {
      comments:[...project.comments, commentToAdd]
    })
    if(!response.error){
      setNewComment('')
    }
  }

  return (
    <div className='project-comments'>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new Comment:</span>
          <textarea onChange={(e)=>setNewComment(e.target.value)} value={newComment} required></textarea>
        </label>
        <button className='btn'>Add Comment</button>
      </form>
    </div>
  )
}

export default ProjectComments