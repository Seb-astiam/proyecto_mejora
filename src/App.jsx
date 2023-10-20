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
   const [access, setAcces] = useState(false)
   const EMAIL = 'na@Mail.com';
   const PASSWORD = 'ja1'

   const navigate = useNavigate()
   

   const login = (userData)=>{
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAcces(true);
         navigate('/Home');
      }
      else {
         alert('Usuario o contraseña erroneos')
      }
   }
   const logout = ()=>{
      setAcces(false);
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
            return character.id !== Number(id);
         })
      )
   }
   const onAddRandomCard = () => {
      const randomId = Math.floor(Math.random() * 4) + 1; 
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
