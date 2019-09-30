/* eslint-disable react/prop-types */
import React, { useContext} from "react";
import { Row, Col } from "reactstrap";
import  {AppContext} from "../context/app-context";

export default function footerView () {
  const ctx = useContext(AppContext);
  return(
    <Row>
      <Col xs={12}>
        <footer>
          {ctx.user && (
            <div>
                logged in as {ctx.user.name} {ctx.user.admin && "(admin)"}
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