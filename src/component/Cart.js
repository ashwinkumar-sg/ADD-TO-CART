import React, { useEffect } from "react";
import {connect} from "react-redux"
import {Link}  from 'react-router-dom'
import {handleRemove} from "../action/ItemsAction"
import addCartVary from "../action/ItemsAction"
import Swal from "sweetalert2";


function Cart(props){

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
                    return Object.assign({},item,{quantity:item.quantity-1?item.quantity-1:1})
                }else{
                    return item
            }})
            props.dispatch(addCartVary(newCart))
        };
    
    const handleRemoveItem = (ID) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are removing the Cart product",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result)=>{
              if(result.value){
                 props.dispatch(handleRemove(ID))
              }
          })
        }

    return(
        <div class = "container-fluid">
            <h1 class="display-1 bg-warning">CART</h1>
            <div class="table-responsive" >            
                    <table border='1' class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th>Remove</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            </tr>
                        </thead>

                        <tbody >
                           {props.Cart.map((item)=>{
                                 return <tr key={item.id}>
                                                
                                                <td>
                                                    <button type="button" class="close bg-danger" aria-label="Close" onClick= {()=>{ handleRemoveItem(item.id)} }>
                                                        <span  aria-hidden="true">&times;</span>
                                                    </button>
                                                </td>

                                                <td >
                                                    <img alt="image"  height="100" src={item.image}/>
                                                </td>

                                                <td>{item.title}</td>

                                                <td>$ {item.price}</td>

                                                <td>
                                                  <div class="number d-flex ">
	                                                <button class="minus" onClick={ () =>{handleQuantityDecrease(item.id)} }>-</button>
                                            	      <div class="mx-3"><p>{item.quantity}</p></div>
	                                                <button class="plus" onClick={ () =>{handleQuantityIncrease(item.id)} }>+</button>
                                                  </div>
                                                </td>

                                                <td><h5>$ {item.quantity*item.price}</h5></td>
                                        </tr>
                            })} 
                        </tbody>
                    </table>
                <Link class="btn btn-primary btn-lg active" to="/">back</Link>
       </div>
       </div>
    )
}
const mapStateToProps = (state) =>{
    return {
      Cart:state.Cart
    }
}
export default connect(mapStateToProps)(Cart)