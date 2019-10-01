import React  from "react";
import { Container } from "reactstrap";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Employees from "./components/EmpoyeesView/Employees";
import ErrorBoundary from "./errorBoundary/ErrorBoundary";
import AppContextProvider from "./context/app-context";

export default function App () {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <Container>
          <Header />
          <Employees />
          <Footer />
        </Container>
      </AppContextProvider>
    </ErrorBoundary>
  );
}