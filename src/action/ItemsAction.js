import axios from 'axios'
export const startGetItems = ( obj ) => {
    return(dispatch)=>{
         axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            
            if(obj){
                const cartItem = response.data.find( (ele)=>{ return ele.id==obj.ID})
                dispatch(addCart(cartItem))
                obj.redirect()

            }
            else{
                dispatch(setItems(response.data))
            }
        
        })
    }
}

const setItems =(items) => {
     return { type: "GET_ITEMS", payload: items}
}

const addCart =(item) => {
    return { type: "ADD_CART", payload: item}
}

const addCartVary =(newCart) => {
    return { type: "QUANTITY_VARY", payload: newCart}
}
export default addCartVary

export const handleRemove = (ID) => {
    return {type: "REMOVE",payload:ID}
}