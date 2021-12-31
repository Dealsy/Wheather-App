import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Sunny from "../../Assests/img/Sunny.jpg";
import Loading from "../Helpers/Loading";

function Cards({ apiData, isLoading }) {
  console.log("cards", apiData);

  if (isLoading) {
    return <Loading />;
  } else if (isLoading === false) {
    return (
      <CardGroup style={{ marginTop: "50px" }}>
        <Card>
          <Card.Img
            variant="top"
            style={{ width: "50rem", margin: "auto" }}
            src={Sunny}
          />
          <Card.Body>
            <Card.Title>{apiData.city.name}</Card.Title>
            <Card.Text>
              {apiData.list[0].main.temp}{" "}
              {apiData.list[0].weather[0].description}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}

export default Cards;
