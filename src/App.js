import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-configs';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  const signUserOut = () =>{
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }
  return (
    <Router>
      <h1>ELBLOGDECARLOSFERRERAS </h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/">Historia</Link>
        <Link to="/">Arte</Link>
        <Link to="/">Teologia</Link>
        <Link to="/">Mitologia</Link>

        {!isAuth ? ( <Link to="/login">Iniciar sesion</Link> 
        ) : (
          <>
           <Link to="/createpost">Crear publicacion</Link>
           <button onClick={signUserOut}>Cerrar Sesion</button>
           </>
           )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={ isAuth }/>} />
        <Route path="/createpost" element={<CreatePost isAuth={ isAuth }/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />

      </Routes>
    </Router>
  );
}

export default App;
