import React, { useState, useEffect } from "react";
import EmployeesContainer from "../components/EmpoyeesView/EmployeesContainer";
import axios from "axios";
import toast from "../components/toast";

export default function Employees () {
  
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  const fetchMyAPI = async () => {
    try{
      const employees = await axios.get("http://localhost:3001/employees");
      setEmployees(employees.data);}
    catch (error) {
      console.log(error.response.status);
      toast.error("cannot get Employyes from the server");
    }
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
    try{
      await axios.put(`http://localhost:3001/employees/${id}`, rest);
      toast.success(" the employee's details were stored");}
    catch{
      toast.error("the employee's details were not stored");
    }
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