import {useState} from 'react'
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail';

function App() {
   const [characters, setCharacters] = useState([]);
   const onSearch = (id) =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
      const randomId = Math.floor(Math.random() * 825) + 1; 
      onSearch(randomId);
    };
   return (
      <div className='App'>
         <Nav onSearch={onSearch} onAddRandomCard={onAddRandomCard}/>
         <Routes>
            <Route path='/Home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/About' element={<About />}/>
            <Route path='/Detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
