import { useEffect } from "react"
import { useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useDocument = (collection, id) =>{
  const [document, setDocument] = useState()
  const [error, setError] = useState()

  //realtime data for document
  useEffect(()=>{
    const ref = projectFirestore.collection(collection).doc(id)
    
    const unsubscribe = ref.onSnapshot((snapshot)=>{
      if(snapshot.data()){
        setDocument({...snapshot.data(), id: snapshot.id})
        setError(null)
      }
      else{
        setError('No Such Document Exists')
      }
    }, (err)=>{
      console.log(err.message);
      setError("Failed to Get Document")
    })

    return () => unsubscribe()

  },[collection,id])

  return {document, error}
}