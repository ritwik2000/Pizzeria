import axios from "axios";
import { Component } from "react";
//import "./FruitsDetails.css";
import Orderpizza from "./Orderpizza";
import Table from "react-bootstrap/Table";
import { yellow } from "@material-ui/core/colors";
import './App.css';
import { CenterFocusStrong } from "@material-ui/icons";
import Navbar from "./navbar"


class OrderPizza1 extends Component{
    constructor(){
        super();
        this.state = {
            PizzaList : [],
            selectedCourse : [],
            sum:0
        }
        this.addedCourses = this.addedCourses.bind(this);
       // this.sumadd=this.sumadd.bind(this)
    }
    // addedCourses(event){
    //     if(event.target.checked){
    //         var selectedCourse1=parseInt(event.target.value)
           
    //         this.setState({
    //             selectedCourse : [selectedCourse1, ...this.state.selectedCourse],
    //             sum:parseInt(event.target.value)+this.state.sum
               
               
               
                


                
    //         })
    //         var sum1=0

    //       for(let i=1;i<=this.state.selectedCourse.length;i++){
    //         this.state.sum=this.state.sum+this.state.selectedCourse[i];
    //         console.log(this.state.selectedCourse[i])
    //        sum1=sum1+1

    //       }

    //      this.setState({
    //         sum:sum1
            
    //     });
             
    //         console.log(this.state.sum)
    //     }else{
    //         let index  = this.state.selectedCourse.indexOf(event.target.value);
    //         if(index !== -1){
    //             this.state.selectedCourse.splice(index, 1);
    //         }
    //     }
       
    //  }
    // sumadd(){
    //     let sum1=0

    //     for(let i=0;i<=this.state.selectedCourse.length;i++){
    //         sum1+=this.state.selectedCourse[i];
    //     }
    //     this.setState({
    //         sum:sum1
            
    //     });
    //     console.log(this.state.selectedCourse)
        
        
    // }
    addedCourses(e){

        // console.log(e);

        // console.log(e.target.value);

       

        if(e.target.checked){

            this.setState({

                addedIngredientsAmount : [...this.state.selectedCourse, e.target.value],

                sum : this.state.sum + parseInt(e.target.value),

                // addedIngredients : this.state.addedIngredients.push(obj)

            })
            

        }  
        else{

            this.setState({

                addedIngredientsAmount : [...this.state.selectedCourse, e.target.value],

                sum : this.state.sum - parseInt(e.target.value),

                // addedIngredients : this.state.addedIngredients.push(obj)

            })

        }  
        

       

        // console.log( " after adding to array : " + this.state.addedIngredientsAmount);

        // console.log(  this.state.addedIngredients);



    }
    
    

    componentDidMount(){
        
        axios.get("http://localhost:7000/getEmp1")
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
                {/* <img src={fruit.image} alt={fruit.name}/> */}
                
                <div>
                    {/* <h4>Name : {fruit.tname}</h4>
                    <h4>Price : ₹{fruit.price}</h4> */}
                 
                    <Table striped bordered style={{padding:89}}> 
                    <thead>
                    {/* <td><input type="checkbox" onClick={this.addedCourses} value={fruit.price} /></td> */}
                
                            
                           
                        </thead>
                        <tbody>
                            <tr style={{padding:60}}>
                            <th> <img src={pizza.image} alt="Flowers in Chania" width="100" height="120"></img></th>
                                <th>{pizza.tname} ₹{pizza.price}</th>
                                {/* <th>{pizza.price}</th> */}
                                {/* <th> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>  <button type="button" class="btn btn-link">Add</button></th> */}
                                <th><input type="checkbox" onClick={this.addedCourses} value={pizza.price} /><button  type="button" class="btn1 btn-link">Add</button></th> 
                                {/* <th><button onClick={this.sumadd()} type="button" class="btn btn-link">Add</button></th> */}
                               
                               
                                
                            </tr>

                        </tbody>
                    </Table>
                   
                    
                </div>
               
            </div>
        );
       
                
        var sum1=0;
        for(let i=0;i<=this.state.selectedCourse.length;i++){
            sum1+=parseInt(this.state.selectedCourse[i])

        }
        console.log(sum1)

        return(
            <div>
                <Navbar/>
               <div>
               <h4>Pizzeria now gives you options to build your own pizza.customize your pizza choosing ingredients from the list given below</h4>
                <div className = "container">
                    {PizzaData}
                </div>    
                {/* <button onClick={this.sum()} class="button">countprice</button>   */}  
                {/* <button onClick={this.sumadd()} type="button" class="btn btn-link">Add</button>       */}
                <h3>Total Cost:{this.state.sum}</h3> 
                <button class="button">Build ur Pizza</button>
               
                
            </div>
            <div className="footer-copyright text-center py-3 footer">

        Copyrights © 2017 Pizzeria. All rights reserved.

    </div>
            </div>
        );
        
    }
}

export default OrderPizza1;