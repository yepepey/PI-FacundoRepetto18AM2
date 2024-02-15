import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

function App() {
    //Conjunto de personajes que se van guardando mientras lo vamos llamando
   const [ characters, setCharacters] = useState([]);
   // para saber donde estoy parado
   const { pathname } = useLocation()

    //elementos para el accesso/login
   const navigate = useNavigate()
   const [ access, setAccess] = useState(false)
   // base de datos falsa
   const EMAIL = "test@email.com"
   const PASSWORD = "test123"


  // si el accesso no es true, te manda obligatoriamente al pathing "/"
  useEffect(() => {
    !access && navigate('/');
   }, [access])

   const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home')
    }
   }

   


   const onClose = (id) => {
      //crea un nuevo arreglo sin el personaje
      const filteredSate = characters.filter((char)=> char.id !== id);
      setCharacters(filteredSate);
   };

   const onSearch = (id) => {
    if (!isNaN(id)) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         (reponse) => {
            if (reponse.data.name) {
               setCharacters((oldChars) => [...oldChars, reponse.data]);
            } else {
               window.alert(`¡No hay personajes con ID: ${id}!`);
            }
         }
      );
    } else {
      window.alert('Insert a number')
    }
   };
   

   return (
      <div className='App'>
      { pathname !== '/' && <Nav onSearch={onSearch} />}
        <Routes>
          
          {/* Login */}
          <Route path='/' element={
            <Form login={login} />
          } />

          {/*Home */}
          <Route path='/home' element={
            <Cards characters={characters} onClose={onClose} />
          } />
          
          {/*About */} 
          <Route path='/about' element={
            <About />
          } />

          {/*Favorites */}
          <Route path='/favorites' element={
            <Favorites />
          } />

          {/*Detail ID */}
          <Route path='/detail/:id' element={
            <Detail />
          } />

          {/*No se encuentra */}
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </div>
   );
}

export default App;