import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import toast from "../components/UI/toast";


export const AppContext = React.createContext({
  onSelectEmployee: () => { },
  employees: [],
  selectedEmployee: null,
  onInputChange: () => { },
  onFormSubmit: () => { },
  onSelectChange: () => { }
});

const AppContextProvider = props => {

  const { data } = useFetch("http://localhost:3001/employees");
  const { data : user } = useFetch("http://localhost:3001/user");
  const [employees, setEmployees] = useState(data);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const onSelectEmployee = (e, emp) => {
    e.preventDefault();
    setSelectedEmployee({ ...emp });
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setSelectedEmployee({ ...selectedEmployee, [name]: value });
  };

  const onSelectChange = (e) => {
    const { value } = e.target;
    setSelectedEmployee({ ...selectedEmployee, gender: value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const { id, ...rest } = selectedEmployee;
    try{
      let response = await axios.put(`http://localhost:3001/employees/${id}`, rest);
      const toUpdate = employees.map(e => { return e.id === response.data.id ? response.data : e; });
      setEmployees(toUpdate);
      toast.success(" the employee's details were stored");
    }
    catch (error) {
      toast.error(" the employee's details didn't stored");
    }
    
  };
  useEffect(() => {
    setEmployees(data);
  }, [data]);

  return (
    <AppContext.Provider value={{
      user: user,
      employees: employees,
      onSelectEmployee: onSelectEmployee,
      onInputChange: onInputChange,
      onSelectChange: onSelectChange,
      onFormSubmit: onFormSubmit,
      selectedEmployee: selectedEmployee
    }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
