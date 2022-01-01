import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Loading_Img from "../../Assests/img/Loading.jpg";
import React from "react";
function Loading() {
  return (
    <CardGroup style={{ marginTop: "50px" }}>
      <Card>
        <Card.Img
          variant="top"
          style={{ width: "50rem", margin: "auto" }}
          src={Loading_Img}
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
