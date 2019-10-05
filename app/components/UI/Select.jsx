/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import  {AppContext} from "../../context/app-context";

export default function Select ({ title , name }) {
  
  const {selectedEmployee, onSelectChange } = useContext(AppContext);
  return(
    <div className="form-group">
    <label htmlFor={name}>{title}</label>
    <select
      name= {name}
      id = {name} 
      className="form-control"
      value = {selectedEmployee.gender}
      onChange={onSelectChange}
    >
      <option>male</option>
      <option>female</option>
    </select>
  </div>
  )};