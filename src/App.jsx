import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login'
import PhoneOTPLogin from './Pages/Login/PhoneOTPLogin'
import StoreReg from './Pages/Store/StoreReg'
import SelectStore from './Pages/Store/SelectStore'
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/phoneotp' element={<PhoneOTPLogin />} />
        <Route path='/storereg' element={<StoreReg/>} />
        <Route path='/selectstore' element={<SelectStore/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
