import styles from './Form.module.css'
import { useState } from "react"
import validator from "./validation"

export default function Form ( {login} ) {

    const { errorsStyles, div, container } = styles

    const [ userData , setUserData] = useState({email: '' , password: ''})
    const [ errors , setErrors ] = useState({})

    /* Seteo dependiendo de del nombre que reciba el evento, el valor que se va a almacenar */
    const handleChange = (eventChange) => {

        /* Guarda los errores en base a la informacion que se va escribiendo en los input */
        setErrors(validator({...userData, [eventChange.target.name]: eventChange.target.value}))

        /* siempre usar el spread operator para no perder la informacion anterior */
        setUserData({...userData, [eventChange.target.name]: eventChange.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    return (
        <div className={container}>
            <form onSubmit={handleSubmit}>
                <div className={div}>
                    <label>User:  </label>
                    {/* El evento se realiza en los input xq estamos buscando el cambio mientras se va escribiendo  */}
                    <input type="text" value={userData.email} name="email" onChange={handleChange} placeholder="Insert Email"/>
                    { errors.e1 ? (
                        <p className={errorsStyles}>{errors.e1}</p>
                    ) : errors.e2 ? (
                        <p className={errorsStyles}>{errors.e2}</p>
                    ) : (
                        <p className={errorsStyles}>{errors.e3}</p>
                    )
                    }
                </div>
                <div className={div}>
                    <label>Password:  </label>
                    {/* El evento se realiza en los input xq estamos buscando el cambio mientras se va escribiendo  */}
                    <input type="password" value={userData.password} name="password" onChange={handleChange} placeholder="Insert password"/>
                    { errors.p1 ? (
                        <p className={errorsStyles}>{errors.p1}</p>
                    ) : (
                        <p className={errorsStyles}>{errors.p2}</p>
                    )}
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}