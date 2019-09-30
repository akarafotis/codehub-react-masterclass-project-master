/* eslint-disable react/prop-types */
import React from "react";
import { Row, Col } from "reactstrap";
import EmployeeDetails from "./EmployeeDetails";
import EmployeesList from "./EmployeesList"; 

//export default function employeesContainer ({ employees,  selectedEmployee, onSelectEmployee, onInputChange, onFormSubmit, onSelectChange}) {
export default function employeesContainer () {  
  return(
    <Row>
      <Col xs={12}>
        <div className="employees-container">
          <EmployeesList />
          <EmployeeDetails />
        </div>
      </Col>
    </Row>);
}