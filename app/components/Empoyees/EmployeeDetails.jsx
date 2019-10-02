/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import Input from "../UI/Input";
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
                    <div className="form-group">
                      <label htmlFor="firstName">First name:</label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={selectedEmployee.firstName}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last name:</label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={selectedEmployee.lastName}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender">Gender:</label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        value = {selectedEmployee.gender}
                        onChange={onSelectChange}
                      >
                        <option>male</option>
                        <option>female</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <Input
                        id="email"
                        name="email"
                        value={selectedEmployee.email}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone:</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={selectedEmployee.phone}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mobile">Mobile:</label>
                      <Input
                        id="mobile"
                        name="mobile"
                        value={selectedEmployee.mobile}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="age">Age:</label>
                      <Input
                        id="age"
                        name="age"
                        value={selectedEmployee.age}
                        onChange={onInputChange}
                      />
                    </div>

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