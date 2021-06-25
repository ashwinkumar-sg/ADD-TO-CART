import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import itemsReducer from "../reducers/itemReducers";
import cartReducer from "../reducers/cartReducer";



const configureStore = () => {
    const store = createStore(combineReducers({

        Items : itemsReducer,
        Cart : cartReducer


    }),applyMiddleware(thunk))
    return store
}

export default configureStore
