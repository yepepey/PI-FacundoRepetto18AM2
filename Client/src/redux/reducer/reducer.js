
import { ADD_FAVORITE, ADD_CHAR, FILTER, ORDER, REMOVE_FAVORITE, REMOVE_CHAR } from "../actions/actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    filterCharacter: []
}
//no necesitamos declarar al reducer como tal ya que es el unico que se exporta por default, si hay mas elementos, si tiene que coincidir

const rootReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        //llamamos a toda la info que teniamos anterior y le agregamos la nueva informacion (payload)
        case ADD_FAVORITE:
            return {
                ...state, 
                myFavorites: payload,
                
            };

            case ADD_CHAR:
            return {
                ...state, 
                allCharacters: [...state.allCharacters, payload],
                filterCharacter: [...state.allCharacters, payload]
            };

        //buscamos dentro de toda la informacion y filtramos (usamos filter que nos devulevo un nuevo arreglo) por aquellas que cumplas con la primisa,
        // en este caso que el ID no sea el que queremos remover
        case REMOVE_FAVORITE:
            return {
                /* ...state,
                myFavorites: state.myFavorites.filter((tempChar) => tempChar.id !== payload) */
                ...state,
                myFavorites: payload
            }

        case REMOVE_CHAR:
            return {
                ...state,
                allCharacters: state.allCharacters.filter((tempChar) => tempChar.id !== payload)
            }

        /*case FILTER:
            return {
                ...state,
                allCharacters: 
            }

        case ORDER:
            return {
                ...state,
                myFavorites: 
            }*/

        default:
            return{...state};
    }
}

export default rootReducer