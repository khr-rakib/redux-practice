import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from './redux/reducers'
import Thunk from 'redux-thunk';


import firebase from "firebase/app";
import "firebase/auth";

const fbConfig = {
    apiKey: "AIzaSyA05083tDt3qi0K_ipCGj9JssZ8CP7cYtA",
    authDomain: "fir-auth-3f155.firebaseapp.com",
    databaseURL: "https://fir-auth-3f155.firebaseio.com",
    projectId: "fir-auth-3f155",
    storageBucket: "fir-auth-3f155.appspot.com",
    messagingSenderId: "457968889308",
    appId: "1:457968889308:web:8847103f8d7cdecc163319"
};

firebase.initializeApp(fbConfig);

// react-redux-firebase config
const rrfConfig = {
    userProfile: "users",
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(Thunk)))

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    // createFirestoreInstance // <- needed if using firestore
};

export default store;