import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home"
import AddNote from './components/Note/AddNote';
import EditNote from './components/Note/EditNote';
import DeleteNote from './components/Note/DeleteNote';
import GetById from './components/Note/GetById';
import GetByName from './components/Note/GetByName';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/add"} element={<AddNote/>}/>
        <Route path={"/edit/:id"} element={<EditNote/>}/>
        <Route path={"/delete/:id"} element={<DeleteNote/>}/>
        <Route path={"/getById/:id"} element={<GetById/>}/>
        <Route path={"/getByName/:id"} element={<GetByName/>}/>
      </Routes>
    </div>
  );
}

export default App;
