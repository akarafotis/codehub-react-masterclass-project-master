import React  from "react";
import { Container } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Employees from "./Employees";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppContextProvider from "../context/app-context";

export default function Dashboard () {
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