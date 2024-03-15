import { useSelector } from "react-redux"
import styles from "./Favorites.module.css"
import Card from "../Card/Card"

export default function Favorites (){
    const { div } = styles    
    const myFavorites = useSelector((state) => state.myFavorites)
    return (
    <div className={div}>
        {myFavorites?.map((fav) => (
            <Card 
                key= {fav.id}
                id= {fav.id}
                name= {fav.name}
                gender={fav.gender}
                image= {fav.image}   
            />
        ))}
    </div>
)
}