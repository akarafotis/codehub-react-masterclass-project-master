/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";
import  {AppContext} from "../../context/app-context";

export default function employeeDetails (){
  const {selectedEmployee, onFormSubmit, onInputChange, onSelectChange } = useContext(AppContext);
  return(
    <div className="employee-details">
      {selectedEmployee ? (
                <>
                  <h3>
                    {selectedEmployee.id}:{" "}
                    {`${selectedEmployee.firstName} ${selectedEmployee.lastName}`} (
                    {selectedEmployee.department})
                  </h3>
                  <form onSubmit={onFormSubmit}>
                      <Input
                        title = "FirstName:"
                        name="firstName"
                        value={selectedEmployee.firstName}
                      />
                      <Input
                        title = "LastName:"
                        name="lastName"
                        value={selectedEmployee.lastName}
                      />
                      <Select
                        title = "Gender:"
                        name="gender"
                      />
                      <Input
                        title = "Email:"
                        name="email"
                        value={selectedEmployee.email}
                      />
                      <Input
                        title = "Phone:"
                        name="phone"
                        value={selectedEmployee.phone}
                      />
                      <Input
                        title = "Mobile:"
                        name="mobile"
                        value={selectedEmployee.mobile}
                      />
                      <Input
                        title = "Age:"
                        name="age"
                        value={selectedEmployee.age}
                      />
                    <button type="submit" className="btn btn-primary float-sm-right">
                      Submit
                    </button>
                  </form>
                </>
      ) : (
        <h3>Please select a user to view and edit his data....</h3>
      )}
    </div>
  )
}