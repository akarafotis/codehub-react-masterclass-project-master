/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import  {AppContext} from "../../context/app-context";
import ListItem from "../UI/ListItem";

export default function employeesList () {  
  
  const { employees } = useContext(AppContext);
  
  return(
    <div className="employees-list">
      <ul>
        {employees && employees.map((employee) => (                    
          <ListItem key ={employee.id} employee = {employee}/>
        ))}
      </ul>
    </div>
  );
}