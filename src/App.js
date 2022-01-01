import React, { useState } from "react";
import "./App.css";

import Dashboard from "./Components/Dashboard/Dashboard";
import Search from "./Components/Search/Search";

function App() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log("Dash", apiData);
  return (
    <div className="App bg-[url('Assests/img/Background.jpg')]  bg-cover bg-teal-600">
      <h1> Wheather App</h1>
      <Search
        apiData={apiData}
        setApiData={setApiData}
        setIsLoading={setIsLoading}
      />
      <Dashboard apiData={apiData} isLoading={isLoading} />
    </div>
  );
}

export default App;
