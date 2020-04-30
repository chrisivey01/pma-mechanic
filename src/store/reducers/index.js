import { combineReducers } from 'redux';
import vehicleReducer from './vehicle'
import clientListReducer from './clientList'


export default combineReducers({
    vehicleReducer,
    clientListReducer
})