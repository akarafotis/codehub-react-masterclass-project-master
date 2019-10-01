import { useState, useEffect } from "react";
import axios from "axios";
import toast from "../components/UI/toast";

const useFetch = (url) => {

  const [data, setData] = useState (null);

  const fetchMyAPI = async () => {
    try{
      const response = await axios({url});
      setData(response.data);}
    catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return {
    data
  };
};

export default useFetch;