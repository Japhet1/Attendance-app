import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Attendance from './pages/attendance';
import AttendanceNavbar from "./components/navbar"
import SignIn from './pages/SignIn';
import Home from './pages/home'
import NoticeBoard from './pages/noticeBoard';

const App = () => {
  return (
    <main>
      <BrowserRouter>
          <AttendanceNavbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/list' element={<Attendance/>} />
            <Route path='/notifications' element={<NoticeBoard/>} />
          </Routes>
        </BrowserRouter>

    </main>
  )
}

export default App
