import { useEffect, useState } from 'react';
import styles from './Card.module.css';
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
//ESTAS SE VUELVE VARIABLES
const {div, nameStyle, imageStyle, btn, data, btn2 } = styles;


export default function Card({ id, name, status, species, gender, origin, image, onClose }) {

   const [ isFav , setIsFav ] = useState(false)

   // dispatcher para poder actualizar los estados globales
   const dispatch = useDispatch();

   // traemos el estado global
   const myFavorites = useSelector((state) => state.myFavorites)

   //usamos la variable como seteador del nuevo char favorito
   const myChar = { 
      id: id,
      name: name,
      status:status,
      species:species,
      gender:gender,
      image: image 
   }
   

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   // logica por la cual un handle puede agregar o remover al estado global de favoritos
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(id))
      } else {
         setIsFav(true)
         dispatch(addFav(myChar))
      }
   }
      
   // elemento usado para un condicional para eliminar el boton de cerrar si no estamos en la pagina correspondiente
   const { pathname } = useLocation()

   return (
      <div className={div}>
         
         { 
            isFav ? (
               pathname == '/favorites' ? (
                  null
               ) : (
                  <button className={btn} onClick={()=>(onClose(id))}>X</button>
               )
            ) : (
               <button className={btn} onClick={()=>(onClose(id))}>X</button>
            )
         }


         {
            isFav ? (
               <button onClick={handleFavorite} className={btn2}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={btn2}>🤍</button>
            )
         }
         <Link to={`/detail/${id}`}>
            <h2 className={nameStyle}>{name}</h2>
         </Link>
         <h4 className={ true && data}>Status: {status}</h4>
         <h4 className={data}>Species: {species}</h4>
         <h4 className={data}>Gender: {gender}</h4>
         { origin?.name ? ( origin.name ? <h4 className={data}>From: {origin?.name }</h4> : null )  : <p></p>}
         <img className={imageStyle} src={image} alt='' />
      </div>
   );
}