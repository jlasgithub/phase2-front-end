import logo from './logo.svg';
import './App.css';
import Display from './components/Display/Display.js';
import Input from './components/Input/Input.js';
import {returnsCustomers, post, put, deleteById } from './memdb.js'
import {useState, useEffect} from "react";
import frog from'./frog.png';

function App(props) {
  let blankCustomer = { "id": -1, "name": "", "email": "", "password": "" };

  const [formObject, setFormObject] = useState(blankCustomer);

  const [customers, setCustomers] = useState([]);
  let mode = (formObject.id >= 0) ? 'Update' : 'Add';
  
  useEffect(() => { getCustomers() }, []);
  const getCustomers =  function(){
    setCustomers(returnsCustomers());
  }

  const handleInputChange = function (event) {
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = {...formObject}
    newFormObject[name] = value;
    setFormObject(newFormObject);
  }

  const handleListClick = function(item){
    if(formObject.id === item.id){
      setFormObject(blankCustomer);
    }else{
      setFormObject(item);
    }
  }  


  let onSaveClick = function () {
    if (mode === 'Add') {
      post(formObject);
    }
    if (mode === 'Update') {
      put(formObject.id, formObject);
    }
    setFormObject(blankCustomer);
  }

  let onCancelClick = function () {
    setFormObject(blankCustomer);
  }

  let onDeleteClick = function () {
    if(formObject.id >= 0){
      deleteById(formObject.id);
    }
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
    <div className="App">
      <header className="App-header">
        <div className="pageTitle">
               Welcome to the CUSTOMER LOOKUP TABLE WHERE YOU CAN DO CUSTOMER LOOKUP FOR LOOKING UP CUSTOMERS IN THE CUSTOMER LOOKUP TABLE
        </div>
        <div className="pageTitle">
                Welcome to the CUSTOMER LOOKUP TABLE WHERE YOU CAN DO CUSTOMER LOOKUP FOR LOOKING UP CUSTOMERS IN THE CUSTOMER LOOKUP TABLE
        </div>
      </header>
      <Display 
        customers={customers}
        formObject={formObject}
        handleListClick={handleListClick}
      />
      <Input {...pvars}/>
      <footer>
        <img id="frog" src={frog}></img>
      </footer>
    </div>
  );
}

export default App;
