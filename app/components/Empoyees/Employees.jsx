import React from "react";
import { Row, Col } from "reactstrap";
import EmployeeDetails from "./EmployeeDetails";
import EmployeesList from "./EmployeesList";

const Employees = () => (
  <Row>
    <Col xs={12}>
      <div className="employees-container">
        <EmployeesList />
        <EmployeeDetails />
      </div>
    </Col>
  </Row>);

export default Employees;