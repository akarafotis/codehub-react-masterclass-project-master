/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import Image from "./Image";
import { Row, Col, Navbar, NavbarBrand, Nav, Media } from "reactstrap";
import  {AppContext} from "../../context/app-context";

export default function Header () {
  const ctx = useContext(AppContext);
  return(
    <Row>
      <Col xs={12}>
        <Navbar color="light" light>
          <NavbarBrand href="#">Code.Hub Dashboard</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {ctx.user && (
              <Media>
                <Media left>
                  <Image 
                    src={ctx.user.imgPath} 
                    alt={ctx.user.name} 
                    className ={"rounded-circle"}
                    width={50}
                    height={50}
                  />
                </Media>
                <Media body className="user-text">
                  {ctx.user.name}
                </Media>
              </Media>
            )}
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
}