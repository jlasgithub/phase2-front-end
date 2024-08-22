import logo from './logo.svg';
import './App.css';
import Display from './components/Display/Display.js';
import Input from './components/Input/Input.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.jsx';
import {returnsCustomers, post, put, deleteById } from './memdb.js'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import frog from'./frog.png';
import axios from 'axios';


function App(props) {
  const REST_URL = 'http://localhost:8080/api/customers';

  let blankCustomer = { "id": -1, "name": "", "email": "", "password": "" };

  //formObject is just to display inside text fields and applies to SELECT AND CANCEL
  const [formObject, setFormObject] = useState(blankCustomer);
  const [customers, setCustomers] = useState([]);
  const [refresh, setRefresh] = useState(false); // state to trigger re-fetch

  let mode = (formObject.id >= 0) ? 'Update' : 'Add';
  
  // run getCustomers (display) function whenever refresh state changes
  useEffect(() => { 
    getCustomers(); 
  }, [refresh]);
  // when we want to refresh after some action, just place:
  // setRefresh(!refresh);

  function getNextId(people){
    let maxid = 0;
    for( let item of people){
      maxid = (item.id > maxid)?item.id:maxid;
    }  
    return maxid + 1;
  }

  var nextId;

  // const getCustomers =  function(){
  //   setCustomers(returnsCustomers());
  // }


  const getCustomers = async () => {
    try {
      const response = await axios.get(`${REST_URL}`);
      //console.log(response.data);
      setCustomers(response.data);
      nextId = getNextId(response.data);
      } catch(error){
          console.error("error fetching customers: ", error);}
    }


  
  const handleInputChange = function (event) {
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = {...formObject}
    newFormObject[name] = value;
    setFormObject(newFormObject);
  }


  // nothing to do with API at all. just highlights displayed (already fetched) info
  const handleListClick = function(item){
    if(formObject.id === item.id){
      setFormObject(blankCustomer);
    }else{
      setFormObject(item);
    }
  }  

//commented part is what used to be there
  let onSaveClick = async () =>  {
    if (mode === 'Add') {
      formObject.id = nextId;
      //post(formObject);
      try {
        const response = await axios.post(`${REST_URL}`, formObject);
        } catch(error){
            console.error("error fetching customers: ", error);}
    }
    if (mode === 'Update') {
      //put(formObject.id, formObject);
      try {
        const response = await axios.put(`${REST_URL}/${formObject.id}`, formObject);
        console.log("true dat");
      } catch(error){
            console.error("error fetching customers: ", error);}
    }
    setFormObject(blankCustomer);
    setRefresh(!refresh);
  }

  let onCancelClick = function () {
    setFormObject(blankCustomer);
  }

  let onDeleteClick = async () => {
    if(formObject.id >= 0){
      //deleteById(formObject.id);
      try {
        const response = await axios.delete(`${REST_URL}/${formObject.id}`);
        console.log("true dat");
      } catch(error){
            console.error("error fetching customers: ", error);}
    }
    setRefresh(!refresh); 
    setFormObject(blankCustomer);
  }
  let pvars = {
    mode: mode,
    handleInputChange: handleInputChange,
    formObject: formObject,
    onDeleteClick: onDeleteClick,
    onSaveClick: onSaveClick,
    onCancelClick: onCancelClick
  }

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div className="pageTitle">
          Welcome to the CUSTOMER LOOKUP TABLE WHERE YOU CAN DO CUSTOMER LOOKUP FOR LOOKING UP CUSTOMERS IN THE CUSTOMER LOOKUP TABLE
        </div>
      </header>
      <Routes>
        <Route path="/" element={
          <div>
            <Display
              customers={customers}
              formObject={formObject}
              handleListClick={handleListClick}
            />
            <Input {...pvars} />
            <footer>
              <img id="frog" src={frog} alt="frog" />
            </footer>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </div>
  </Router>
    
  );
}

export default App;
