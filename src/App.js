import {Routes,Route, Navigate} from 'react-router-dom'
//pages
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import Navbar from './components/Navbar';
//auth
import { useAuthContext } from "./hooks/useAuthContext"
//css
import './App.css'
import Sidebar from './components/Sidebar'
import RequireAuth from './shared/RequireAuth'

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="container">
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
          }/>

          <Route exact path='/create' element={
            <RequireAuth>
              <Create/>
            </RequireAuth>
          }/>

          <Route path='/project/:id'element = {
            <RequireAuth>
              <Project/>
            </RequireAuth>
          }/>

          <Route exact path='/login' element={
            user?<Navigate to="/"/>:<Login/>
          }/>
          <Route exact path='/signup' element={
            user?<Navigate to="/"/>:<Signup/>   
          }/>
        </Routes>
      </div>
    </div>
  );
}

export default App
