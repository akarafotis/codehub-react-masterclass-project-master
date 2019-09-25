/* eslint-disable react/prop-types */
import React from "react";
import Image from "../Image";

const employeesList = ({ employees,  onSelectEmployee}) => (  
  <div className="employees-list">
    <ul>
      {employees.length &&
                  employees.map((employee) => (
                    <li key={employee.id} className="employee-list-item">
                      <a href="#" onClick={(e) => onSelectEmployee(e, employee)}>
                        <div className="img">
                          <Image
                            width={70}
                            height={70}
                            className={"rounded-circle"}
                            src={employee.picture}
                            alt={`${employee.firstName} ${employee.lastName} photo`}
                          />
                        </div>
                        <div className="info">
                          <p className="name">{`${employee.firstName} ${employee.lastName}`}</p>
                          <p className="email">{employee.email}</p>
                        </div>
                      </a>
                    </li>
                  ))}
    </ul>
  </div>
);
export default employeesList;