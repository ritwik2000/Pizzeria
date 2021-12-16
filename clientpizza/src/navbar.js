import { Component } from "react";
import { Container} from "react-bootstrap";
import {Link} from 'react-router-dom'
import logo from './PizzeriaLogo.png';

class Navbar extends Component{
    render(){
        return(
            <div>
                 <ul>
<a class="navbar-brand" href="/">Pizzeria</a>


<Container>
                
                 <li> <img src={logo} alt="PIZZA" width="40" height="60" /> </li>
                 {/* <li><Link to='/Orderpizza'>Orderpizza</Link><span>|</span></li> */}
                 <li> <Link to='/Buildurpizza'>Buildurpizza</Link><span></span></li>
 
 <li> <Link to='/OrderPizza1'>OrderPizza</Link><span></span></li>
  <li><Link to='/OrderPizza1'><button class="btn"><i class="fa fa-shopping-cart"></i> shopping cart</button><span></span></Link></li> 
 
 {/* <i class="fa fa-shopping-cart" style="font-size:48px;color:red"></i> */}
 
                        </Container>
                       
                        



 
 
</ul>
            </div>

        );
    }
}
export default Navbar
