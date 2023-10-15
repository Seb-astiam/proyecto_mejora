import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom' 
import Button from '@mui/material/Button'

const Nav = (props) => {
    const {onSearch, onAddRandomCard} = props
    return (
        <div className={style.containerNav}>
        <Link to={'/About'}>
        <button className={style.btn}>About</button>
        </Link>
        <Link to={'/Home'}>
        <button className={style.btn}>Home</button>
        </Link>

        <div className={style.SearchBar}>
            <SearchBar onSearch={onSearch}/>
        </div>

        <button onClick={onAddRandomCard} className={style.btn}>Agregar Tarjeta Aleatoria</button>

        
        </div>


    )
}

export default Nav
