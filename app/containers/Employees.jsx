import React, { useState, useEffect } from "react";
import EmployeesContainer from "../components/EmpoyeesView/EmployeesContainer";
import axios from "axios";

export default function Employees () {
  
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  const fetchMyAPI = async () => {
    const employees = await axios.get("http://localhost:3001/employees");
    setEmployees(employees.data);
  };

  useEffect(() => {
    fetchMyAPI();
  },[]);

  const onSelectEmployee = (e, emp) => {
    e.preventDefault();
    setSelectedEmployee({ ...emp });
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setSelectedEmployee({...selectedEmployee, [name]: value });
  };

  const onSelectChange = (e) => {
    const { value } = e.target;
    setSelectedEmployee({...selectedEmployee, gender : value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const { id, ...rest } = selectedEmployee;
    await axios.put(`http://localhost:3001/employees/${id}`, rest);
    const employees = await axios.get("http://localhost:3001/employees");
    setEmployees(employees.data);
  };

  return (
    <EmployeesContainer
      onSelectEmployee = {onSelectEmployee}
      employees = {employees}
      selectedEmployee = {selectedEmployee}
      onInputChange ={onInputChange}
      onFormSubmit ={onFormSubmit}
      onSelectChange ={onSelectChange}
    />
  );
}