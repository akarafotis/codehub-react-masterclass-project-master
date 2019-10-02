/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import Image from "./Image";
import { Row, Col, Navbar, NavbarBrand, Nav, Media } from "reactstrap";
import  {AppContext} from "../../context/app-context";

export default function Header () {
  const {user} = useContext(AppContext);
  return(
    <Row>
      <Col xs={12}>
        <Navbar color="light" light>
          <NavbarBrand href="#">Code.Hub Dashboard</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {user && (
              <Media>
                <Media left>
                  <Image 
                    src={user.imgPath} 
                    alt={user.name} 
                    className ={"rounded-circle"}
                    width={50}
                    height={50}
                  />
                </Media>
                <Media body className="user-text">
                  {user.name}
                </Media>
              </Media>
            )}
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
}