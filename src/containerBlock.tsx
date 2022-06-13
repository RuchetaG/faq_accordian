import React from "react";
import { Container, Col, Row } from "reactstrap";
const WomenDesktop = "./images/illustration-woman-online-desktop.svg";

export const ContainerBlock = () => {
  return (
    <Container>
      <h6>xs="2"</h6>
      <Row xs="2">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs="3"</h6>
      <Row xs="3">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs="4"</h6>
      <Row xs="4">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs="4"</h6>
      <Row xs="4">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border" xs="6">
          xs="6"
        </Col>
        <Col className="bg-light border">Column</Col>
      </Row>
      <h6>xs="1" sm="2" md="4"</h6>
      <Row md="4" sm="2" xs="1">
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
        <Col className="bg-light border">Column</Col>
      </Row>
    </Container>
    // <Container className="container">
    //   <Row>
    //     <Col xs="6" md="6" lg="6" sm="6" xl="6" xxl="6">
    //       <img src={WomenDesktop}></img>
    //     </Col>
    //     <Col xs="6" md="6" lg="6" sm="6" xl="6" xxl="6">
    //       Ok
    //     </Col>
    //   </Row>
    // </Container>
  );
};
