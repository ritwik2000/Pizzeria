import axios from "axios";
import { Component } from "react";
//import "./FruitsDetails.css";
import Orderpizza from "./Orderpizza";
import Navbar from './navbar'


class OrderPizza1 extends Component{
    constructor(){
        super();
        this.state = {
            PizzaList : [],
            size:{}
        }
    }

    componentDidMount(){
        
        axios.get("http://localhost:7000/getEmp")
        .then((res)=>{
            console.log(res.data);
            this.setState({
                PizzaList : res.data
            })
        })
        .catch((err)=>{

            document.write(err);
        })
    }

    render(){
       
        
        

        
        var PizzaData = this.state.PizzaList.map((pizza)=>

        
        
        
        
            <div key={pizza._id} className="containerElement">
                 <img src={pizza.image} alt={pizza.name}width="300" height="250"/> 


               
            
               
                
        {/* let button; */}
       
                {/* <div class="col-sm-7"> */}
                <div class="col-sm-7">

                {/* <img src={pizza.image} alt={pizza.name}width="300" height="250"/> */}
                    <h4><b>Name :</b> {pizza.name}</h4>
                 <h4><b>Price :</b> ₹{pizza.price}</h4>
              <h4><b>Description : </b>{pizza.description}</h4>
                 <h4><b> Ingredients:</b> {pizza.ingredients}</h4>
                 <h4><b>Topping : </b>{pizza.topping}</h4>
                 <h4><b>Type : </b>{pizza.type == "veg" ? "🟩" : "🟥"}</h4>
                   
                    
                   
                    <button type="button" class="btn">Add to cart</button>
                   
                </div>
            </div>
            
        
            );
        // let button
        // console.log(PizzaData)
        //  if (PizzaData.type=== "veg") {
            
        //      button = <i class="fa fa-square" style="font-size:36px;color:green"></i>
            
        //  }
        //  else {
        //     button = <i class="fa fa-square" style="font-size:36px;color:green"></i>
        // }
         var PizzaData1=this.state.PizzaList.map((pizza)=>{
             if(pizza.type==="veg"){
                 return <button type="button" class="btn">Add to veg</button>

              
                
           }
            else{
               return <button type="button" class="btn">Add to nonveg</button>
                
               
            }
         })
         
        
        

        return(
            <div>
                <Navbar/>
            <div className="container">
               
           
                <div className = "flex-container">
                {PizzaData}
                    
                </div>   
                            
            </div>
            <div className="footer-copyright text-center py-3 footer">

        Copyrights © 2017 Pizzeria. All rights reserved.

    </div>
            </div>
        );
    }
}

export default OrderPizza1;