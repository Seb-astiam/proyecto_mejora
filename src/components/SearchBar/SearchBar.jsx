import { useState } from "react";
import style from './SearchBar.module.css'
export default function SearchBar(props) {
   const {onSearch} = props
   const [id, setId] = useState('');
   const handleChange = (e)=>{
      setId(e.target.value);
   }
   return (
      <div>
         <input type='search' onChange={handleChange} value={id} className={style.imput}/>
         <button onClick={()=>onSearch(id)} className={style.btn}>Agregar</button>
      </div>
   );
}
