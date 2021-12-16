import { Component ,Suspance,lazy, Suspense} from "react";
import Fire from './Fire.png';
import logo from './PizzeriaLogo.png';
import Chef from './chef.png';
import Time from './Time.png';
import { Container, Navbar } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './App.css'
class Home extends Component{
    constructor(){
        super();
        this.state={

        }
    }
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
 
                        </Container>
                        



 
 
</ul>
              
                       

                 <p style={{textAlign:'center', fontSize: '40px'}}>Our Story</p>
                 <p style={{textAlign: ''}}>We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!

Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan
Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.

We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun
excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh
Pan Pizza is the Tastiest Pan Pizza. Ever!</p>
<Container>
<Row>
<Col md={6}><Image src={Fire} width="300" height="250"/></Col>
<Col md={6}><p><h3>Ingredients</h3> </p>

<p>We're ruthless about goodness. We have no qualms about tearing up a day-old
lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut Cut, Chop.
Cho Steam Steam. Stir Stir. While they're still young and fresh - that's our motto. It
makes the kitchen a better place.</p>
</Col></Row></Container>
<Container><Row>

<Col md={6}><p><h3>Our Chefs</h3></p>

<p>They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). 
    They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you.</p></Col>
<Col md={6}><Image src={Chef} width="300" height="250"/></Col></Row></Container>
 
 <Container><Row><Col md={6}><img src={Time} width="300" height="250"/></Col>

<Col md={6}><p ><h3>45 min  delivery</h3></p></Col>

</Row></Container>
<div className="footer-copyright text-center py-3 footer">

        Copyrights © 2017 Pizzeria. All rights reserved.

    </div>

            </div>
        )
    }
}
export default Home;