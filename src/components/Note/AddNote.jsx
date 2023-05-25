import React, { useState } from 'react'
import API from '../../API/API';
import {useNavigate} from "react-router-dom"

const AddNote = () => {
    const [note, setNote] = useState({
        noteTitle: "",
        noteDescription: ""
    });
    const navigate=useNavigate();

    const handleFormSubmmit = (e) => {
        e.preventDefault();
        API.addNote(note).then((res) => {
            setNote({
                noteTitle: "",
                noteDescription: ""
            })
            navigate("/")
        }).catch((err) => {
            console.log(err)
        });
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setNote({...note,[e.target.name]:value});
    }

    return (
        <div className='m-auto mt-5 shadow rounded-sm p-4'
            style={{
                width: "80%",
                marginTop: "23rem",
                backgroundColor: "whitesmoke"

            }}>
            <form onSubmit={(e) => handleFormSubmmit(e)}>
                <p className='font-bold text-center text-success font-2xl' style={{ fontWeight: "bold", fontSize: "larger" }}>Share your Information</p>
                <div className="form-group">
                    <label for="title">Note  Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"
                        placeholder="Enter Note Suitable Title" value={note.noteTitle} name='noteTitle' onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="form-group mt-4">
                    <label for="description">Note Desctiption</label>
                    <textarea type="text" className="form-control" id="description" placeholder="Enter the Note in a very simple words"  value={note.noteDescription} name='noteDescription' onChange={(e)=>handleChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-5 px-3">Add Note</button>
            </form>
        </div>
    )
}

export default AddNote