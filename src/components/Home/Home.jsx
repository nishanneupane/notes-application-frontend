import React, { useEffect, useState } from 'react'
import API from '../../API/API';

const Home = () => {
    const [note, setNote] = useState([]);
    useEffect((dat) => {
        API.getAll()
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
                    note.map((item, index) => (
                        <>
                            <div className="card-body">
                                <h5 className="card-title" style={{fontWeight:"600",paddingBottom:"20px",fontStyle:"normal"}}>{item.noteTitle}</h5>
                                
                                <p className="card-text">{item.noteDescription}</p>
                                <a href="https://jittery-idea-production.up.railway.app/" className="btn btn-primary">Get More</a>
                            </div>
                            <div className="card-footer text-muted">
                                {item.createdDate}
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Home