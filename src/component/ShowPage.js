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
          {props.Items.map((item)=>{ 
            return(
               <div class="col-12 col-md-4 col-lg-3 col-sm-6" key = {item.id}>
                 
                  <div class="card-deck h-100">
                    <div class="card  mb-5" >
                      <img class="card-img-top p-5  border" width="100%" height="225"  src={item.image}  />
                  
                      <div class="card-body">
                        <p>{item.title}</p>
                      </div>

                      <div class="card-footer">
                        <div class="d-flex justify-content-between align-items-center">
                          <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>{props.dispatch(startGetItems({ ID:item.id ,redirect}))}}>add to cart</button>
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
        Items : state.Items
    }
}

export default connect(mapStateToProps)(ShowPage)