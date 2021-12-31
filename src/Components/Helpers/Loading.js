import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Sunny from "../../Assests/img/Sunny.jpg";
import React from "react";
function Loading() {
  return (
    <CardGroup style={{ marginTop: "50px" }}>
      <Card>
        <Card.Img
          variant="top"
          style={{ width: "50rem", margin: "auto" }}
          src={Sunny}
        />
        <Card.Body>
          <Card.Title>Loading</Card.Title>
          <Card.Text>Please wait</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Loading;
