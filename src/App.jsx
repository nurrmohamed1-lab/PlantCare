import { useState } from 'react'
// import Plants from './pages/Plants'
import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import { BrowserRouter ,Routes,Route,Navigate } from 'react-router-dom'
import Layout from './Layout/Layout'
import Login from './pages/Login'
import Explore from './pages/Explore'
import Details from './pages/Details'
import Myplants from './pages/Myplant'
import { ToastContainer } from 'react-toastify' 
import "react-toastify/dist/ReactToastify.css"
import AddPlant from './pages/Admin/AddPlant'
import EditPlant from './pages/Admin/EditPlant'

function App() {
  const [isLoggedin,setIsloggedIn]=useState(false)
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Navigate to="/home"replace/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsloggedIn}/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path='/myplant'element={isLoggedin?<Myplants/>:<Navigate to="/login"/>}/>
      <Route path='/admin/add' element={<AddPlant/>}/>
      <Route path='/admin/edit/:id' element={<EditPlant/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App
