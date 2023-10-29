import React, {useState, useEffect} from 'react'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import About from './components/About'
import Detail from './components/Detail';
import Myform from './components/Form';
import axios from 'axios'
import './App.css';

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false)
   // const email = 'na@Mail.com';
   // const password = 'ja1'

   const navigate = useNavigate()
   
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }


   const logout = ()=>{
      setAccess(false);
      navigate('/Home');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) =>{
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id)=>{
      setCharacters(
         characters.filter((character)=>{
            return character.id !== id;
         })
      )
   }
   const onAddRandomCard = () => {
      const randomId = Math.floor(Math.random() * 825) + 1; 
      onSearch(randomId);
    };
   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} onAddRandomCard={onAddRandomCard} logout={logout}/>}
         <Routes>
            <Route path='/' element={<Myform login={login} />} />
            <Route path='/Home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/About' element={<About />}/>
            <Route path='/Detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
