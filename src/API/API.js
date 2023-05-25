import axios from "axios"
export const BASE_API_URL="https://jittery-idea-production.up.railway.app/api/v1/note"
class NoteService{

    addNote(note){
        return axios.post(BASE_API_URL+"/add" ,note);
    }

    updateNote(note,id)
    {
        return axios.put(BASE_API_URL+"/edit/"+id,note)
    }
    deleteNote(id){
        return axios.delete(BASE_API_URL+"/delete/"+id)
    }
    getAll(){
        return axios.get(BASE_API_URL+"/get")
    }
    getById(id){
        return axios.get(BASE_API_URL+"/getById/"+id)
    }
    getByName(name){
        return axios.get(BASE_API_URL+"/getByTitle/"+name)
    }
}

const API = new NoteService();
export default API;

