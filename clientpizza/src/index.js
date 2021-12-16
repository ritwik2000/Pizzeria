import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Orderpizza from './Orderpizza'
import Buildurpizza from './Buildurpizza'
import Home from './Home';
import OrderPizza1 from './OrderPizza1';
// import OrderPizza2 from './OrderPizza2';



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
ReactDOM.render(<Router>
  <Route exact path="/" component={Home}></Route>
  <Route path="/Orderpizza" component={Orderpizza}></Route>
  <Route path="/Buildurpizza" component={Buildurpizza}></Route>
  <Route path="/Home" component={Home}></Route>
  <Route path="/OrderPizza1" component={OrderPizza1}></Route>
  {/* <Route path="/OrderPizza2" component={OrderPizza2}></Route> */}
  
 
 
 
  
</Router>, document.getElementById('root'));
reportWebVitals();
