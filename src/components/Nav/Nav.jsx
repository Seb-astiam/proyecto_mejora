import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom' 
import Button from '@mui/material/Button'

const Nav = (props) => {
    const {onSearch} = props
    return (
        <div className={style.containerNav}>
        <Link to={'/About'}>
        <Button variant="outlined" color='primary'>About</Button>
        </Link>
        <Link to={'/Home'}>
        <Button variant="outlined" >Home</Button>
        </Link>

        <div className={style.SearchBar}>
            <SearchBar onSearch={onSearch}/>
        </div>
        
        </div>


    )
}

export default Nav
