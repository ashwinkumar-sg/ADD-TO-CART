import React, { useEffect } from "react";
import {connect} from "react-redux"
import {Link}  from 'react-router-dom'
import {handleRemove} from "../action/ItemsAction"
import addCartVary from "../action/ItemsAction"


function Cart(props){
    console.log(props.Cart,"123")

    const handleQuantityIncrease = (ID) => {
        const  newCart =    props.Cart.map((item)=>{
            if(item.id == ID){
                return Object.assign({},item,{quantity:item.quantity+1})
            }else{
                return item
        }})
        props.dispatch(addCartVary(newCart))
	};

    const handleQuantityDecrease = (ID) => { 
        const  newCart = props.Cart.map((item)=>{
                if(item.id == ID){
                    return Object.assign({},item,{quantity:item.quantity-1})
                }else{
                    return item
            }})
            props.dispatch(addCartVary(newCart))
        };


    return(
        <div>
            <h1>CART</h1>
            {   
                    <table border='1' class="table table-striped">
                        <thead>
                            <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                            </tr>
                        </thead>

                        <tbody>
                           {    props.Cart.map((item)=>{

                                        return <tr key={item.id}>
                                                <td><button type="button" class="close" aria-label="Close" onClick= {()=>{ props.dispatch(handleRemove(item.id))} }>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </td>
                                                <td ><img alt="image" width="50%" height="225" src={item.image}/></td>
                                                <td>{item.title}</td>
                                                <td>${item.price}</td>
                                                <td>
                                                <div class="number d-flex">
	                                              <button class="minus" onClick={ () =>{handleQuantityDecrease(item.id)} }>-</button>
                                            	  <input type="text" value={item.quantity}/>{console.log(item.quantity)}
	                                              <button class="plus" onClick={ () =>{handleQuantityIncrease(item.id)} }>+</button>
                                                </div>
                                                </td>
                                                <td>$ {item.quantity*item.price}</td>
                                               </tr>
                                    })} 
                        </tbody>
                    </table>
                }
                <Link class="btn btn-primary btn-lg active" to="/">back</Link>
       </div>
    )
}
const mapStateToProps = (state) =>{
    return {
      Cart:state.Cart
    }
}
export default connect(mapStateToProps)(Cart)