

const intialState = []

const cartReducer = ( state = intialState, action ) => {
        switch(action.type){

        case 'ADD_CART' : {
            return state.concat({...action.payload,...{quantity:1}})
        }    //HERE UPDATING THE CART WITH QUNTITY PROPERTY , BECAUSE IT'S NOT PRESENT IN JSON DATA 

        case 'QUANTITY_VARY' : {
            return action.payload
        }
        case 'REMOVE' : {
            return state.filter((item)=>{return item.id != action.payload})
        }
        default : {
            return [...state]
        }
    }
}
export default cartReducer
