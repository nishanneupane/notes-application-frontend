import React from 'react'
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate =useNavigate();
    const addNote=(e)=>{
        e.preventDefault();
        navigate("/add")
    }
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between bg-dark p-2">
                <span className="navbar-brand" style={{color:"pink",cursor:"pointer"}} onClick={()=>navigate("/")}>Notes-app</span>
                <form className="form-inline">
                <button className="btn btn-outline-info my-2 my-sm-0" type="button" onClick={(e) => addNote(e)}>Add Notes</button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar