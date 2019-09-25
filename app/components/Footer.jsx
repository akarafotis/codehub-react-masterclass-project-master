/* eslint-disable react/prop-types */
import React from "react";
import { Row, Col } from "reactstrap";

const footerView = ({ user }) => (
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
export default footerView;