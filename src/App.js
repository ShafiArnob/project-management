import {Routes,Route,Navigate} from 'react-router-dom'
//pages
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import Navbar from './components/Navbar';

//css
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route exact path='/create' element={<Create/>}></Route>
          <Route path='/project/:id'element = {<Project/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App
