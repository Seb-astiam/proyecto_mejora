import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom' 

const Nav = (props) => {
    const {onSearch, onAddRandomCard, logout} = props
    return (
        <div className={style.containerNav}>
        <Link to={'/About'}>
        <button className={style.btn}>About</button>
        </Link>
        <Link to={'/Home'}>
        <button className={style.btn}>Home</button>
        </Link>
        <Link to={'/Favorites'}>
        <button className={style.btn}>Favorites</button>
        </Link>

        <div className={style.SearchBar}>
            <SearchBar onSearch={onSearch}/>
        </div>

        <button onClick={onAddRandomCard} className={style.btn}>Add random card</button>
        <button onClick={logout} className={style.btn}>Logout</button>

        
        </div>


    )
}

export default Nav
