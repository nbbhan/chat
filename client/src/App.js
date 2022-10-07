import { Routes, Route } from 'react-router-dom'

import './App.scss';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
