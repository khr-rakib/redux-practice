const { INCREMENT, DECREMENT, GET_POSTS, ADD_POST } = require("../types")

const initialState = {
    counter: 0,
    posts: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case INCREMENT:
            console.log(payload);
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case GET_POSTS:
            return {
                ...state,
                posts: payload
            }
        case ADD_POST:
            return {
                ...state,
                posts: payload
            }
        default:
            return state;
    }
}