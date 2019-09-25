/* eslint-disable react/prop-types */
import React from "react";
import { Row, Col } from "reactstrap";
import EmployeeDetails from "./EmployeeDetails";
import EmployeesList from "./EmployeesList"; 

const employeesContainer = ({ employees,  selectedEmployee, onSelectEmployee, onInputChange, onFormSubmit, onSelectChange}) => (
  <Row>
    <Col xs={12}>
      <div className="employees-container">
        <EmployeesList 
          employees = {employees}
          onSelectEmployee = {onSelectEmployee}
        />
        <EmployeeDetails
          selectedEmployee = {selectedEmployee}
          onInputChange = {onInputChange}
          onFormSubmit = {onFormSubmit}
          onSelectChange = {onSelectChange}
        />
      </div>
    </Col>
  </Row>
);
export default employeesContainer;