/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import  {AppContext} from "../../context/app-context";

export default function Input ({ title , name, value }) {
  
  const {onInputChange } = useContext(AppContext);
  return(
  <div className="form-group">
    <label htmlFor={name}>{title}</label>
    <input
      type="text"
      className="form-control"
      id={name}
      name= {name}
      value={value}
      onChange={onInputChange}
    />
  </div>
  )};