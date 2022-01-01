import React, { useState, useEffect } from "react";
import StateDisplay from "../Helpers/StateDisplay";
import Col from "react-bootstrap/Col";

function Search({ setApiData, apiData, setIsLoading }) {
  const [state, setState] = useState("South Melbourne");
  const API_KEY = process.env.REACT_APP_WHEATHER_API;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${state}&units=metric&cnt=3&appid=${API_KEY}`;

  console.log(apiData);
  console.log(state);

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .then(() => setIsLoading(false));
  }, [apiUrl, setApiData, setIsLoading]);

  const [value, setvalue] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();
    setState(value);
  }
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      HandleSubmit();
    }
  };

  return (
    <form>
      <Col>
        <input
          type="text"
          placeholder="Search…"
          id="docs-search-input"
          className="w-50 mt-4  border-2 border-teal-600 p-2"
          autoComplete="off"
          spellCheck="false"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="false"
          aria-label="search input"
          aria-owns="algolia-autocomplete-listbox-0"
          dir="auto"
          onChange={(e) => setvalue(e.target.value)}
          onKeyPress={handleKeypress}
        ></input>
      </Col>
      <Col>
        <button
          className="border-2 border-cyan-500 bg-cyan-700 p-2  mt-2 text-white hover:bg-sky-700 focus:ring focus:drop-shadow-2xl "
          onClick={HandleSubmit}
          type="submit"
        >
          Get Wheather
        </button>
      </Col>
      <StateDisplay state={state} apiData={apiData} />
    </form>
  );
}

export default Search;
