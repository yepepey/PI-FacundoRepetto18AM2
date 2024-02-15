export const ADD_FAVORITE = 'ADD_FAV'
export const REMOVE_FAVORITE = 'REMOVE_FAV'
export const FILTER = 'FILTER'

export function addFav (char) {
    return {
        type: ADD_FAVORITE,
        payload: char
    }
}

export function removeFav (id) {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}

export function filteredCards (gender) {
    return {
        type: FILTER,
        payload: gender
    }
}