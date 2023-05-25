import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import API from '../../API/API';

const GetById = () => {
    const [note, setNote] = useState([]);
    const {id} = useParams();
    useEffect((dat) => {
        API.getById(id)
            .then((res) => {
                setNote(res.data)
            }).catch(err => {
                console.log(err)
            })
    },[])

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    My Notes
                </div>

                    {
                        note&&
                        <>
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontWeight: "600", paddingBottom: "20px", fontStyle: "normal" }}>{note.noteTitle}</h5>

                                <p className="card-text">{note.noteDescription}</p>
                                <button className="btn btn-primary">Get More</button>
                            </div>
                            <div className="card-footer text-muted">
                                {note.createdDate}
                            </div>
                        </>
                    }
                    
            </div>
        </div>
    )
}

export default GetById