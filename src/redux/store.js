import { applyMiddleware, createStore, compose } from "redux";
import reducer from './reducer/reducer.js'
import { thunk } from "redux-thunk";


// Configuracion basica del sistema aunque el metodo esta deprecado actualmente
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_CPMPOSE__ || compose;


const  store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;