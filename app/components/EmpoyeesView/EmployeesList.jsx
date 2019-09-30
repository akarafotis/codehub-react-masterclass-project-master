/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import  {AppContext} from "../../context/app-context";
import Image from "../UI/Image";

export default function employeesList () {  
  const ctx =useContext(AppContext);
  return(
    <div className="employees-list">
      <ul>
        {ctx.employees.length &&
                  ctx.employees.map((employee) => (
                    <li key={employee.id} className="employee-list-item">
                      <a href="#" onClick={(e) => ctx.onSelectEmployee(e, employee)}>
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
}