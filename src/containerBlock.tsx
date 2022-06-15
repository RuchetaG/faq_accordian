import React from "react";
import { Col, Row, Card } from "antd";
const WomenDesktop = "./images/illustration-woman-online-desktop.svg";

export const ContainerBlock = () => {
  return (
    <Card className="container">
      <Row gutter={12}>
        <Col span={6}>
          <img src={WomenDesktop}></img>
        </Col>
        <Col className="backgound-color" span={6}>
          Ok
        </Col>
      </Row>
    </Card>
  );
};
