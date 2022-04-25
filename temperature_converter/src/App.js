import { CardText, CardTitle, Card, Container, Row, Col } from "reactstrap";

import Button from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="2"></Col>
          <Col xs="8" class=" text-center">
            <Card body className="text-center bg-light">
              <CardTitle class="border" tag="h3">Hava Nasıl?</CardTitle>
              <CardText>
                Sıcaklık Dönüşümü Uygulaması
              </CardText>
              <Button/>
            </Card>
          </Col>
          <Col xs="2"></Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
