import axios from "axios";
import { Component } from "react";
import './App.css';
import {Link} from 'react-router-dom'
//import { Container, Row, Col,Grid,Item } from 'react-grid';
import Table from "react-bootstrap/Table";
import Navbar from './navbar'



class Orderpizza extends Component{
    constructor(){
        super();
        this.state = {
            empName : "",
            projectName : "",
            projectTitle : "",
            empList : [],
            id:"",
            type:"",
            price:"",
            name:"",
            image:"",
            description:"",
            ingredients:[],
            topping:[]
        }

        this.handleidChange = this.handleidChange.bind(this);
        this.handletypeChange = this.handletypeChange.bind(this);
        this.handlepriceChange = this.handlepriceChange.bind(this);
        this.handlenameChange = this.handlenameChange.bind(this);
        this.handleimageChange = this.handleimageChange.bind(this);
        this.handledescriptionChange= this.handledescriptionChange.bind(this);
        this.handleingredientsChange = this.handleingredientsChange.bind(this);
        this.handletoppingChange = this.handletoppingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFetch = this.handleFetch.bind(this);
    }

    handleidChange(e){
        this.setState({
            id : e.target.value
        })
    }

    handletypeChange(e){
        this.setState({
            type : e.target.value
        })
    }

    handlepriceChange(e){
        this.setState({
            price : e.target.value
        })
    }
    handlenameChange(e){
        this.setState({
            name : e.target.value
        })
    }
    handleimageChange(e){
        this.setState({
            image : e.target.value
        })
    }
    handledescriptionChange(e){
        this.setState({
            description : e.target.value
        })
    }
    handleingredientsChange(e){
        this.setState({
            ingredients : e.target.value
        })
    }
    handletoppingChange(e){
        this.setState({
            topping : e.target.value
        })
    }

    handleSubmit(e){
        // e.preventDefault();
        // var empArr = [];
        // empArr.push(JSON.stringify(this.state));
        // console.log(empArr);

        var emp = {
            "id" : this.state.id,
            "type" : this.state.type,
            "price" : this.state.price,
            "name":this.state.name,
            "image":this.state.image,
            "description":this.state.description,
            "ingredients":this.state.ingredients,
            "topping":this.state.topping
        }

        console.log(emp);

        axios.post("http://localhost:7000/addEmployee" , emp)
        .then((res)=>{
            console.log("posted data");
           
            alert("Employee Added!");
        })
        .catch((err)=>{
            document.write(err)
        })
    }

    handleFetch(e){
        e.preventDefault();
        axios.get("http://localhost:7000/getEmp")
        .then((res)=>{
            console.log(res.data);
            this.setState({
                empList : res.data
            })
        
            // document.write(JSON.stringify(res.data));
           
        })
        .catch((err)=>{
            document.write(err)
        })
    }
    
    render(){
        const arr = this.state.empList.map((emp) => 
        <tr>
            <td>{emp.id}</td>
            <td>{emp.type}</td>
            <td>{emp.price}</td>
            <td>{emp.name}</td>
           
            <td><img src={emp.image} alt="Flowers in Chania" width="100" height="120"></img></td>
            <td>{emp.description}</td>
            <td>{emp.ingredients}</td>
            <td>{emp.topping}</td>
        </tr>
        )

        return(
            
            <div style ={{textAlign:"center"}}>
                
        
        
        
    <Navbar/>
                <h1> Pizza Details Form </h1>
                {/* <form onSubmit={(e)=>this.handleSubmit(e)}  >
                    <div className="form-class">
                        <label> Name</label>
                        <input type = "text" value={this.state.empName} onChange= {(e)=>this.handleEmpNameChange(e)} />
                    </div>
                    <div className="form-class">
                        <label>LINK</label>
                        <input type = "text" value={this.state.projectName} onChange= {(e)=>this.handleProjectNameChange(e)} />
                    </div>
                    <div className="form-class">
                        <label>Price</label>
                        
                        <input type = "text" value={this.state.projectTitle} onChange= {(e)=>this.handleProjectTitleChange(e)} />
                       
                    </div>
                    <input type = "submit" value = "Save" className="btn" />
        </form> */}
                <form onSubmit={(e)=>this.handleFetch(e)}>
                    <input type = "submit" value = "Fetch" className="btn" />
                </form> 

              
                    <Table striped bordered hover>
                        <thead>
                            <th>id</th>
                            <th>type</th>
                            <th>price</th>
                            <th>name</th>
                            <th>image</th>
                            <th>description</th>
                            <th>ingredients</th>
                            <th>topping</th>
                           
                        </thead>
                        <tbody>
                      
                      
                      {arr}
                      
                        
                        </tbody>
                    </Table>
                
            </div>
        );
    }
}

export default Orderpizza;