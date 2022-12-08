import { Routes, Route } from 'react-router-dom'
import { useContext, useEffect } from 'react'

import '~/App.scss'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Nav from './Components/Nav'
import Chatbox from './Components/Chatbox'
import NavContainer from './Components/NavContainer'

import { Data } from './Provider'

function App() {
    const myData = useContext(Data)

    window.addEventListener('load', (e) => {
        let loginNow = e.currentTarget.localStorage.login

        if (loginNow === 'true') {
            myData.setLogin('disable')
            myData.setLogout('enable')
        } else {
            myData.setLogin('enable')
            myData.setLogout('disable')
        }
    })

    return (
        <div className="App">
            <Nav />

            <NavContainer />

            <Chatbox />

            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}

export default App
