//import logo from './Pi';
import logo from './PizzeriaLogo.png';
import './App.css';
import {Link} from 'react-router-dom'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Home from './Home'
//import IconButton from '@mui/material/IconButton';
//import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




function App() {
  return (
    <div className="App" >

<ul>
<a class="navbar-brand" href="/">Pizzeria</a>

<Container>
                
                 <li> <img src={logo} alt="PIZZA" width="40" height="40" /> </li>
                 {/* <li><Link to='/Orderpizza'>Orderpizza</Link><span>|</span></li> */}
                 <li> <Link to='/Buildurpizza'>Buildurpizza</Link><span></span></li>
 <li> <Link to='/Home'>Home</Link><span></span></li>
 <li> <Link to='/OrderPizza1'>OrderPizza</Link><span></span></li>
 
                        </Container>



 
 
</ul>

        
        
        
    </div>
  );
}

export default App;
