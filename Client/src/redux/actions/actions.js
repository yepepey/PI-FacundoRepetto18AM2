import axios from 'axios';

export const ADD_FAVORITE = 'ADD_FAV'
export const ADD_CHAR = 'ADD_CHAR'
export const REMOVE_CHAR = 'REMOVE_CHAR'
export const REMOVE_FAVORITE = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'


export function addFav (char) {
    const endpoint = 'https://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, char).then(({ data }) => {
            return dispatch({
                type: ADD_FAVORITE,
                payload: data,
            })
        })
    }
}

export function addChar (char) {
    return {
        type: ADD_CHAR,
        payload: char
    }
}

export function removeChar (id) {
    return {
        type: REMOVE_CHAR,
        payload: id
    }
}

export function removeFav (id) {
    const endpoint = 'https://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.post(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAVORITE,
                payload: data
            })
        })
    }
}

export function filterCards (gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order
    }
}