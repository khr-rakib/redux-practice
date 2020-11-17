import Axios from "axios"
import { ADD_POST, DECREMENT, GET_POSTS, INCREMENT } from "../types"

export const getIncrement = (id) => ({
    type: INCREMENT,
    payload: id,
})

export const getDescrement = () => ({
    type: DECREMENT,
})

export const getPosts = () => async dispatch => {
    const result = await Axios.get('https://jsonplaceholder.typicode.com/users')

    dispatch({
        type: GET_POSTS,
        payload: result.data
    })
}

export const addPost = (postData) => async dispatch => {
    const result = await Axios.get('https://jsonplaceholder.typicode.com/users', postData)
    dispatch({
        type: ADD_POST,
        payload: result.data
    })
} 