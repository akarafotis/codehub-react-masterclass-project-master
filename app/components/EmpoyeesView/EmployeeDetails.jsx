/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import Input from "../UI/Input";
import  {AppContext} from "../../context/app-context";

export default function employeeDetails (){
  const ctx = useContext(AppContext);
  return(
    <div className="employee-details">
      {ctx.selectedEmployee ? (
                <>
                  <h3>
                    {ctx.selectedEmployee.id}:{" "}
                    {`${ctx.selectedEmployee.firstName} ${ctx.selectedEmployee.lastName}`} (
                    {ctx.selectedEmployee.department})
                  </h3>
                  <form onSubmit={ctx.onFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName">First name:</label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={ctx.selectedEmployee.firstName}
                        onChange={ctx.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last name:</label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={ctx.selectedEmployee.lastName}
                        onChange={ctx.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender">Gender:</label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        value = {ctx.selectedEmployee.gender}
                        onChange={ctx.onSelectChange}
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
                        value={ctx.selectedEmployee.email}
                        onChange={ctx.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone:</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={ctx.selectedEmployee.phone}
                        onChange={ctx.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mobile">Mobile:</label>
                      <Input
                        id="mobile"
                        name="mobile"
                        value={ctx.selectedEmployee.mobile}
                        onChange={ctx.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="age">Age:</label>
                      <Input
                        id="age"
                        name="age"
                        value={ctx.selectedEmployee.age}
                        onChange={ctx.onInputChange}
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