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
import { useDispatch, useSelector } from 'react-redux';
import { addChar, removeChar } from './redux/actions/actions.js';



function App() {
    //Conjunto de personajes que se van guardando mientras lo vamos llamando
   const [ characters, setCharacters] = useState([]);
   // para saber donde estoy parado
   const { pathname } = useLocation()
   const dispatch = useDispatch();

   const allCharacters = useSelector((state) => state.allCharacters)

  
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


   function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    })
   }
   //login antes de usar express y BE
   /*
   const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home')
    }
   }
   */ 

   const onClose = (id) => {
      //crea un nuevo arreglo sin el personaje
      const filteredSate = characters.filter((char)=> char.id !== id);
      setCharacters(filteredSate);
      dispatch(removeChar(id))
   };

   const onSearch = (id) => {
    if (!isNaN(id)) {
      // address apuntando a la api directamente axios(`http://rickandmortyapi.com/api/character/${id}`).then(
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         (reponse) => {
            if (reponse.data.name) {
               setCharacters((oldChars) => [...oldChars, reponse.data]);
               dispatch(addChar(reponse.data))
            } else {
               window.alert(`¡No hay personajes con ID: ${id}!`);
            }
         }
      );
    } else {
      window.alert('Insert a number')
    }
   };

   const logOut = () => {
    setAccess(false) ;
   }
   

   return (
      <div className='App'>
      { pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut}/>}
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