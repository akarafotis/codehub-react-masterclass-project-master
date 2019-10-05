import React, { useContext} from "react";
import  {AppContext} from "../../context/app-context";
import Image from "../UI/Image";

export default function ListItem ({ employee }) {
    const { onSelectEmployee } = useContext(AppContext);
    return(
    <li className="employee-list-item">
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
    </li>);
};