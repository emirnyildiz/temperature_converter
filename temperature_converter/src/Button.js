import React, { Component } from "react";
import { Button } from "reactstrap";

import { ListGroup, ListGroupItem } from "reactstrap";


class button extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(event) {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        <div class="border m-1" > Mevcut Sıcaklık:{this.state.value}</div>
        <Button class="m-1" onClick={this.buttonClicked}>Arttır</Button>
        <div>
          <h5 class=" m-1 text-center">Sıcaklık Ölçümleri</h5>
          <ListGroup>
            <ListGroupItem>Celcius:{this.state.value}</ListGroupItem>
            <ListGroupItem>Fahreneit:{this.state.value*9/5+32}</ListGroupItem>
            <ListGroupItem>Kelvin:{this.state.value+273.15}</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default button;
