import React from "react";

function StateDisplay({ state, apiData }) {
  if (apiData.cod === "400") {
    return <div></div>;
  } else if (apiData.cod === "404") {
    return <div></div>;
  } else
    return (
      <div>
        <h1>{state}</h1>
      </div>
    );
}

export default StateDisplay;
