import {timeStamp} from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'

import React from 'react'
import { useState } from 'react'


const ProjectComments = () => {
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
    console.log(commentToAdd);
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