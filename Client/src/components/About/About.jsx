import styles from './About.module.css'

const {div, p, h1} = styles

export default function About () {
    return(
        <div className={div}>
            <h1 className={h1}>Aplicacion creada por<br /><strong>Facundo Repetto</strong></h1>
            <p className={p}>Esta aplicacion esta creada como medio de aprendizaje conjunto con compañeros y del bootcamp soyHenry.</p>
            <p className={p}>Estamos buscando aprender y como desarrollar la aplicacion con React, usando Redux y otras herramientas empaquetadas.</p>
        </div>
    )
}