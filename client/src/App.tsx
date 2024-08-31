import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import './App.css'

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/signup' element={<></>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
