import './Style.css';
import Registration from './Components/Registration';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import TodosList from './Components/TodosList';
import { Route, Routes } from 'react-router-dom'
import UserInfo from './Components/UserInfo';
import { useState } from 'react';
import RequireAuth from './Components/private/RequireAuth';

function App() {
  const [lgout, setLgout] = useState(false);
  const [regi, setRegi] = useState(true);
  return (
    <>
      <NavBar lgout={lgout} setLgout={setLgout} regi={regi} setRegi={setRegi} />
        
      <Routes>
        <Route path='/' element={<Login setLgout={setLgout} setRegi={setRegi} /> } />
        <Route path='/regi' element={<Registration regi={regi} /> } />
        <Route path='/user' element={<RequireAuth>< UserInfo /></RequireAuth> } />
        <Route path='/todolist' element={<TodosList /> } />
      </Routes>
    </>
  );
}

export default App;
