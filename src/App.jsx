import React, {useState, useEffect} from 'react'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import About from './components/About'
import Detail from './components/Detail';
import Myform from './components/Form';
import axios from 'axios'
import './App.css';
import Favorites from './components/Favorites/Favorites.jsx';

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false)

   const navigate = useNavigate()

   const login = async (userData) => {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      try {
        const { data } = await axios.get(
          URL + `?email=${email}&password=${password}`
        );
        const { access } = data;
        setAccess(access);
        if (access) navigate("/home");
      } catch (error) {
        console.error(error);
      }
    };

   const logout = ()=>{
      setAccess(false);
      navigate('/Home');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id){
      try{
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         const data = response.data
         if(data.id){
            setCharacters((oldchars)=> [...oldchars, data])
         } else { 
            window.alert('¡No hay personajes con este ID!');
      }
   }
   catch(err){
      console.log(err)
   }
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
            <Route path='/Favorites' element={<Favorites />}/>
         </Routes>
      </div>
   );
}

export default App;
