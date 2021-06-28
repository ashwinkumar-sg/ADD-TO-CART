import {connect} from "react-redux"
import React from "react"
import { addCart } from "../action/ItemsAction"
import Swal from 'sweetalert2'

function ShowPage(props) {
  console.log(props.Cart,"vvv")

  const redirect = () => {
    return props.history.push('/cart')
  }

  const handleCartItemes = (id)=>{
        const dublicate = props.Cart.find((ele)=>{ return ele.id === id }) 
        if(dublicate){
          Swal.fire("Already present in the cart")
        }else
        {
          const CartItem = props.Items.find((ele)=>{ return ele.id === id }) 
          props.dispatch(addCart(CartItem))
          redirect()
        }
    }

    return (
          
      <div class="container">
       
        <div class="row">
          {
          props.Items.map((item)=>{ 
            return(
               <div class="col-12 col-md-4 col-lg-3 col-sm-6" key = {item.id}>
                 
                  <div class="card-deck h-100">
                    <div class="card border-primary mb-5" >
                      <img class="card-img-top p-5  border" width="100%" height="225"  src={item.image}  />
                  
                      <div class="card-body">
                        <p>{item.title}</p>
                      </div>

                      <div class="card-footer">
                        <div class="d-flex justify-content-between align-items-center">
                         
                          <button type="button" class="btn btn-sm btn-outline-info" onClick={()=>{handleCartItemes(item.id)}}>add to cart</button>
                          <small class="flot-left text-muted"><h6>${item.price} </h6></small>
                        </div>
                      </div>

                    </div>
                  </div>
               </div>
          )})}
        </div>
      </div>
             
    )
   }


         
const mapStateToProps = (state) => {
    return {
        Items : state.Items,
        Cart:state.Cart

    }
}

export default connect(mapStateToProps)(ShowPage)