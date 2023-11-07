import style from './Card.module.css'
import {Link} from 'react-router-dom'
import { addFav, removeFav } from '../../redux/action';
import {connect} from 'react-redux'
import { useState, useEffect} from 'react';


function Card(props) {
   const {name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites} = props;
   const estadoClase = status === 'Alive' ? style.vivo : style.muerto;
   const [isFav, setIsFav] = useState(false);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = ()=>{
      isFav ? removeFav(id): addFav(props)
      setIsFav(!isFav)
   }

   return (
      <div className={style.containerCard}>
            {
               isFav ? (
                  <button onClick={handleFavorite}>🔴</button>
               ) : (
                  <button onClick={handleFavorite}>⚪️</button>
               )
            }
            <div className={style.containerButton}>
            <button onClick={()=>onClose(id)} className={style.btn}>X</button>
            </div>
         <div className={style.headerCard}>

            <div className={style.imagen} >
               <img src={image} alt=''className={style.img} />
            </div>
         </div>

         <div className={style.bodyCard}>

            <div className={style.name}>
            <Link to={`/Detail/${id}`} className={style.Link}> 
            <h2>{name}</h2>
            </Link>
            </div>
            
         <h2 className={`${estadoClase}`}>{status}</h2>
         {/* <h2>{species}</h2>
         <h2>{gender}</h2> */}
         {/* <h2>{origin}</h2> */}
         </div>

      </div>
   );
   
}

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character)=>{
         dispatch(addFav(character))
      },
      removeFav: (id)=>{
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state)=>{
   return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)