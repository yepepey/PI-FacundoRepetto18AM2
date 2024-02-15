import axios from 'axios';
import styles from './Detail.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//ESTAS SE VUELVE VARIABLES
const {div, nameStyle, imageStyle, data } = styles;


export default function Detail() {

    const [ character, setCharacter] = useState({})

    const { id } = useParams()


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
            ({ data }) => {
                console.log(data)
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No ha personas con ese ID')
                }
            }
        );
        
        return setCharacter({});
    }, [id]);

    const { name, status, species, gender, origin, image} = character

    return (
        <div className={div}>
            <table>
                <tr>
                    <td>
                        <h2 className={data}>Name: {name}</h2>
                        <h2 className={data}>Status: {status}</h2>
                        <h2 className={data}>Specie: {species}</h2>
                        <h2 className={data}>Gender: {gender}</h2>
                        <h2 className={data}>Origin: {origin?.name}</h2>
                    </td>
                    <td>
                        <img className={imageStyle} src={image} alt='' />
                    </td>
                </tr>
            </table>
        </div>
    );
}