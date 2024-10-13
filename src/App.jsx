import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
import Question1 from './components/Question1';
import Question2 from './components/Question2';

function App() {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <div className='flex flex-col my-2 items-center justify-center h-screen'>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/que1' element={<Question1 />} />
      <Route path='/que2' element={<Question2 />} />
    </Routes>
    </BrowserRouter> */}
    <button className="bg-blue-500 text-white px-4 py-2 mb-2 rounded" onClick={()=> navigate('/que1')}>Question 1</button>
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=> navigate('/que2')}>Question 2</button>
   </div>
  )
}


function RootApp(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/que1' element={<Question1 />} />
      <Route path='/que2' element={<Question2 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default RootApp
