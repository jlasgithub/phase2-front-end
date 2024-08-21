import React, { useState } from "react";
import './Display.css';

function Display(props) {

  const [state, setState] = useState(props.customers);

  return (
    <div>
      <table className="cust-list">
        <tbody>
          <div className="row">
            {/* <tr key={"header"}>
                {Object.keys(state[0]).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>
              {state.map((item) => (
                <tr key={item.id}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))} */}
            <tr className="header">
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
            {props.customers.map((item, index) => {
              return (<tr key={item.id}
                className={(item.id === props.formObject.id) ? 'selected' : ''}
                onClick={() => props.handleListClick(item)}
              >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>);
            })}
          </div>
        </tbody>
      </table>
    </div>
  )
}

export default Display;