/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import { Row, Col } from "reactstrap";
import  {AppContext} from "../../context/app-context";

export default function Footer () {
  const {user} = useContext(AppContext);
  return(
    <Row>
      <Col xs={12}>
        <footer>
          {user && (
            <div>
                logged in as {user.name} {user.admin && "(admin)"}
            </div>
          )}
          <div>
              Made with ?? in Athens, Greece | <a href="https://tsevdos.me">tsevdos.me</a>
          </div>
        </footer>
      </Col>
    </Row>
  );
}