import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const CalculatorKeys = () => {
  return (
    <Container>
      <>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Display" />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary">C</Button>
          </Col>
          <Col>
            {" "}
            <Button variant="secondary">+/-</Button>
          </Col>
          <Col>
            {" "}
            <Button variant="secondary">%</Button>
          </Col>
          <Col>
            <Button variant="success">/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light">7</Button>
          </Col>
          <Col>
            <Button variant="light">8</Button>
          </Col>
          <Col>
            <Button variant="light">9</Button>
          </Col>
          <Col>
            <Button variant="success">X</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light">4</Button>
          </Col>
          <Col>
            <Button variant="light">5</Button>
          </Col>
          <Col>
            <Button variant="light">6</Button>
          </Col>
          <Col>
            <Button variant="success">-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light">1</Button>
          </Col>
          <Col>
            <Button variant="light">2</Button>
          </Col>
          <Col>
            <Button variant="light">3</Button>
          </Col>
          <Col>
            <Button variant="success">+</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button class="w-100 bg-light" variant="light">
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light">.</Button>
          </Col>
          <Col>
            <Button variant="success">=</Button>
          </Col>
        </Row>
      </>
    </Container>
  );
};

export default CalculatorKeys;
