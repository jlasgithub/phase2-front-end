import React, { useState } from 'react';
import './Input.css';

function Input(props) {
    return (
        <div>
            <form>
                <table>
                    <tr className="tb-container">
                        <td className={'label'} ></td>
                        <td><input
                            className="textbox"
                            type="text"
                            name="name"
                            onChange={(e) => props.handleInputChange(e)}
                            value={props.formObject.name}
                            placeholder="Customer Name"
                            required /></td>
                    </tr>
                    <tr>
                        <td className={'label'} ></td>
                        <td><input
                            className="textbox"
                            type="email"
                            name="email"
                            onChange={(e) => props.handleInputChange(e)}
                            value={props.formObject.email}
                            placeholder="name@company.com" /></td>
                    </tr>
                    <tr>
                        <td className={'label'} ></td>
                        <td><input
                            className="textbox"
                            type="text"
                            name="password"
                            onChange={(e) => props.handleInputChange(e)}
                            value={props.formObject.password}
                            placeholder="password" /></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <input className="button-85" type="button" value="Delete" onClick={props.onDeleteClick} />
                        <input className="button-85" type="button" value="Save" onClick={props.onSaveClick} />
                        <input className="button-85" type="button" value="Cancel" onClick={props.onCancelClick} />

                    </tr>
                </table>



            </form>
        </div>
    )
}

export default Input;