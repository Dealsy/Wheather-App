import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Alert from "react-bootstrap/Alert";
import Sunny from "../../Assests/img/Sunny.jpg";
import Clouds from "../../Assests/img/Clouds.jpg";
import Loading from "../Helpers/Loading";

function Cards({ apiData, isLoading }) {
  console.log("cards", apiData);

  if (isLoading) {
    return <Loading />;
  } else if (apiData.cod === "400") {
    return <Alert variant="warning"> Please Enter a Town or City </Alert>;
  } else if (apiData.cod === "404") {
    return (
      <Alert variant="warning"> You must enter a vaild city or town </Alert>
    );
  } else if (isLoading === false) {
    return (
      <CardGroup>
        <Card className="bg-[url('Assests/img/Background.jpg')] bg-cover pb-20">
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
            <Card.Title className="text-white">{apiData.city.name}</Card.Title>
            <Card.Text className="text-white font-bold text-lg">
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
