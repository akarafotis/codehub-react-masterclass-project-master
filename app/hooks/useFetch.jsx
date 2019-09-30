import { useState, useEffect } from "react";
import axios from "axios";
import toast from "../components/UI/toast";

const useFetch = (url) => {

  const [user, setUser] = useState (null);
  const [employees, setEmployees] = useState([]);

  const fetchMyAPI = async () => {
    try{
      const response = await axios({
        url: url});
      url.substr(url.length - 4) === "user" ? setUser(response.data) : setEmployees(response.data);}
    catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchMyAPI();
  }, [employees, user]);

  return {
    employees, user
  };
};

export default useFetch;