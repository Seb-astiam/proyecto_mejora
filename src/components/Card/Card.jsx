import style from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card(props) {
   const {name, status, species, gender, origin, image, onClose, id} = props;

   const estadoClase = status === 'Alive' ? style.vivo : style.muerto;

   return (
      <div className={style.containerCard}>

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
