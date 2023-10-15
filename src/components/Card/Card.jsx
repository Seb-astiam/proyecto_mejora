import style from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card(props) {
   const {name, status, species, gender, origin, image, onClose, id} = props

   return (
      <div className={style.containerCard}>

         <div className={style.headerCard}>

            <div className={style.ContainerButton}>
            <button onClick={()=>onClose(id)} className={style.btn}>X</button>
            </div>
            <div className={style.imagen} >
               <img src={image} alt='' />
            </div>
         </div>

         <div className={style.bodyCard}>

            <div className={style.name}>
            <Link to={`/Detail/${id}`} className={style.Link}> 
            <h2>{name}</h2>
            </Link>
            </div>
            
         {/* <h2>{status}</h2> */}
         {/* <h2>{species}</h2>
         <h2>{gender}</h2> */}
         {/* <h2>{origin}</h2> */}
         </div>

      </div>
   );
}
