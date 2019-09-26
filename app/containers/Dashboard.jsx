import React , {useState, useEffect} from "react";
import { Container } from "reactstrap";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Employees from "./Employees";
import ErrorBoundary from "./ErrorBoundary";

//convert class component to functional component
export default function Dashboard () {

  const [user, setUser] = useState(null);

  const fetchMyAPI = async () => {
    const user = await axios.get("http://localhost:3001/user");
    setUser(user.data);
  };

  useEffect(() => {
    fetchMyAPI();
  },[]);

  return (
    <ErrorBoundary>
      <Container>
        <Header user ={user} />
        <Employees />
        <Footer user ={user}/>
      </Container>
    </ErrorBoundary>
  );
}