import * as types from '../constants/action-types'
const initialState = {
    clients: [
        {
            id:0,
            name:'',
            number:'',
            plate:'',
            status:0,
            progress:0  
        },

    ]

}

const clientListReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SET_CLIENT_LIST:
            return {
                ...state, clients: action.clients
            }
        default:
            return state;
    }
}

export default clientListReducer;