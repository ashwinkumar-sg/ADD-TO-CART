import React from 'react';
import {BrowserRouter,Link,Route,Switch,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import ShowPage from "./component/ShowPage"
import Cart from "./component/Cart"

function App(props)
{
   return (
<div>
    <BrowserRouter>  
        <Route path="/" component = {ShowPage} exact={true}/>
        <Route path="/cart" component = {Cart}/>
    </BrowserRouter>
  </div>
  );
}
const mapStateToProps = (state) => {
  return {
    Items : state.Items
  }
}
export default connect(mapStateToProps)(App)
