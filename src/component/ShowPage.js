import {connect} from "react-redux"
import React from "react"
import { startGetItems } from "../action/ItemsAction"

function ShowPage(props) {
  
  const redirect = () => {
    return props.history.push('/cart')
  }

    return (
          
           <div class="container">
       
             <div class="row">
            {
            props.Items.map((item)=>{ 
            return(
               <div class="col-md-4 col-sm-2 col-1 g-1" key = {item.id}>
                 
                 <div class="card card-deck" >
                   <img class="card-img-top p-5  border" width="100%" height="225"  src={item.image}  />
       
                   <div class="card-body">
                     <div class="d-flex justify-content-between align-items-center">
                        <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>{props.dispatch(startGetItems({ ID:item.id ,redirect}))}}>add to cart</button>
                        <small class="text-muted"><h6>${item.price} </h6></small>
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
        Items : state.Items
    }
}

export default connect(mapStateToProps)(ShowPage)