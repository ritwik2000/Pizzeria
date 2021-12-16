import React, { Component } from 'react'
import axios from "axios";
import './OrderPizza2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from 'react-bootstrap';
import Navbar from './navbar'




export default class BuiltUrPizza extends Component {
    constructor(){
        super();
        this.state={
           pizzaList:[]
        }
    }

    componentDidMount = () =>{
        this.getPizzaData();
    }

    getPizzaData = () =>{
        axios.get("http://localhost:7000/getEmp")
        .then((res)=>{
            // console.log(res.data);
            const data = res.data
            this.setState({pizzaList:data})
        })
        .catch((err)=>{
            document.write(err)
        })
    }
    // <div id={condition ? 'msg' : null}>Hello World!</div>

    displayPizzaData = (pizzaList) =>{
        if (!pizzaList.length) return null;
        
        let a = '🟩';
        let b = '🟥';
        
        let vegnon;
        if(pizzaList.type==="veg"){ 
           vegnon = a;
        }else if(pizzaList.type==="nonveg"){
           vegnon = b;
        }  return pizzaList.map((pizzaList,index) => (
                <div key={index} style={{float: "left",width: "50%"}}>
                    <Card className="displaypizzacard">
                        <Card.Body>
                              <div>    
                                    <div className='box1'>    
                                        <p> {pizzaList.name}</p>
                                         <p>{vegnon} </p>  
                                        <p>{pizzaList.type} </p> 
                                        <p> ₹ {pizzaList.price}.00 </p> 
                                    </div>
                                   
                                    <div className='box2'>
                                        <p>{pizzaList.description}</p>
                                        <p><b>Ingredients:</b>{pizzaList.ingredients}</p>
                                      <p><b>Toppings:</b>{pizzaList.topping}</p>
                                    </div>
                           
                                    <div className='box3'>
                                        <img src={pizzaList.image} alt={pizzaList.name} />
                                        <br/><br/>
                                        <button class="add-to-cart">Add to Cart</button>
                                    </div>
                                </div>     
                        </Card.Body>
                        </Card>
                        <br />
                </div>
            ))
    }

    // componentDidMount(){
    //     axios.get("http://localhost:4002/getpizza")
    //     .then((res)=>{
    //         console.log(res.data);
    //         this.setState({
    //             pizzaList:res.data
    //         })
    //     })
    //     .catch((err)=>{
    //         document.write(err)
    //     })
    // }    

    render() {

        // var orderPizzaData = this.state.pizzaList.map((pizza)=>{
          
        //         return (   
        //             <div key={pizza._id} style={{float: "left",width: "50%"}}>
        //                  <Card className="displaypizzacard">
        //                  <Card.Body>
        //                          <div>    
        //                              <div className='box1'>    
        //                                  <p> {pizza.name}</p>
        //                                  {/* <p>🟩 </p>  
        //                                  <p>🟥 </p> */}
        //                                  <p>{pizza.type} </p> 
        //                                  <p> ₹ {pizza.price}.00 </p>
        //                              </div>
                                     
        //                              <div className='box2'>
        //                                  <p>{pizza.description}</p>
        //                                  <p><b>Ingredients:</b>{pizza.ingredients}</p>
        //                                  <p><b>Toppings:</b>{pizza.topping}</p>
        //                              </div>
                             
        //                              <div className='box3'>
        //                                  <img src={pizza.image} alt={pizza.name} />
        //                                  <br/><br/>
        //                                  <button class="add-to-cart">Add to Cart</button>
        //                              </div>
        //                          </div>     
        //                  </Card.Body>
        //                  </Card>
        //                  <br />
        //              </div>
                     
        //              )
          
        // })


        return (
            <>
            <div>
                <Navbar/>
                    <Card className='orderpizzacard'>
                        <Card.Body>
                           
                        <div >
                            {/* {orderPizzaData} */}
                            {this.displayPizzaData(this.state.pizzaList)}
                        </div>
                            
                        </Card.Body>
                    </Card>
            </div>
            
            </>
        )
    }
}
