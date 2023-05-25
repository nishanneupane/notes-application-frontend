import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import API from '../../API/API';

const GetByName = () => {
    const [note, setNote] = useState([]);
    const id = useParams();
    useEffect(() => {
        API.getByName(id.id)
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
                                <a href="https://railway.app/project/e1362146-ab8b-40e3-b123-01b5f26d1352/service/4f1bd80a-8775-41a0-8bcb-51f75c6ea620?id=9c3b24e9-cbe0-498f-8fe8-54b302d95604/" className="btn btn-primary">Get More</a>
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

export default GetByName