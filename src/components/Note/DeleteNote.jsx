import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import API from '../../API/API';

const DeleteNote = () => {
    const [message,setMessage]=useState("");
    const id=useParams();

    useEffect(()=>{
        API.deleteNote(id.id).then((res)=>{
            setMessage("Note Deleted Sucessfully")
        }).catch((err)=>{
            console.log(err)
        })
    })

  return (
    <div>
        {
            message&&<p className='m-auto text-center flex text-success'>
                {message}
            </p>
        }
        {
            !message&&<p className='m-auto text-center flex text-danger'>
                {message}
            </p>
        }
    </div>
  )
}

export default DeleteNote