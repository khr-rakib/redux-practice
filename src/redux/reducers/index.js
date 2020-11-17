import { combineReducers } from "redux";
import adminReducer from './adminReducer'

import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
    firebase: firebaseReducer,
    admin: adminReducer
});