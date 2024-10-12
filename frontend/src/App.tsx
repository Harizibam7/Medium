import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SingIn'
import { Blog } from './Pages/Blog'
import { Blogs } from './Pages/Blogs'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
          <Route path='/blogs' element ={<Blogs/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
