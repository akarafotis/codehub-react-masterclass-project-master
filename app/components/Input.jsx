/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ id, name, value, onChange }) => (
  <input
    type="text"
    className="form-control"
    id={id}
    name= {name}
    value={value}
    onChange={onChange}
  />
);
export default Input;