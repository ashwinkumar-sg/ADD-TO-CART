import axios from 'axios'
export const startGetItems = () => {
    return(dispatch)=>{
         axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            
                dispatch(setItems(response.data))
        
        })
    }
}

const setItems =(items) => {
     return { type: "GET_ITEMS", payload: items}
}

export const addCart =(CartItem) => {
    return { type: "ADD_CART", payload: CartItem}
}

const addCartVary =(newCart) => {
    return { type: "QUANTITY_VARY", payload: newCart}
}
export default addCartVary

export const handleRemove = (ID) => {
    return {type: "REMOVE",payload:ID}
}