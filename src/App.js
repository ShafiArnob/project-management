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
import OnlineUsers from './components/OnlineUsers'

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      {user && <Sidebar/>}
      <div className="container">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
          }/>

          <Route path='/create' element={
            <RequireAuth>
              <Create/>
            </RequireAuth>
          }/>

          <Route path='/project/:id'element = {
            <RequireAuth>
              <Project/>
            </RequireAuth>
          }/>

          <Route path='/login' element={
            user?<Navigate to="/"/>:<Login/>
          }/>
          <Route path='/signup' element={
            user?<Navigate to="/"/>:<Signup/>   
          }/>
        </Routes>
      </div>
      {user && <OnlineUsers></OnlineUsers>}
    </div>
  );
}

export default App
