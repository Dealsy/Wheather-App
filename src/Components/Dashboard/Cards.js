import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Sunny from "../../Assests/img/Sunny.jpg";
import Clouds from "../../Assests/img/Clouds.jpg";
import Loading from "../Helpers/Loading";

function Cards({ apiData, isLoading, error }) {
  console.log("cards", apiData);

  if (isLoading) {
    return <Loading />;
  } else if (apiData.cod === "400") {
    return <h1> Please Enter a Town or City </h1>;
  } else if (apiData.cod === "404") {
    return <h1> You must enter a vaild city or town</h1>;
  } else if (isLoading === false) {
    return (
      <CardGroup style={{ marginTop: "50px" }}>
        <Card>
          {apiData.list[0].weather[0].main === "Clouds" ? (
            <Card.Img
              variant="top"
              style={{ width: "50rem", margin: "auto" }}
              src={Clouds}
            />
          ) : (
            <Card.Img
              variant="top"
              style={{ width: "50rem", margin: "auto" }}
              src={Sunny}
            />
          )}
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
