

const intialState = []

const itemsReducer = ( state = intialState, action ) => {
        switch(action.type){
        case 'GET_ITEMS' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default itemsReducer
