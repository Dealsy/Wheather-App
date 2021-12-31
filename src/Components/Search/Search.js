import React, { useState, useEffect } from "react";

function Search({ setApiData, apiData, setIsLoading }) {
  const [state, setState] = useState("South Melbourne");
  const API_KEY = "e91de17dd11f9857f551792559e8e236";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${state}&units=metric&appid=${API_KEY}`;

  console.log(apiData);
  console.log("state", state);

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .then(() => setIsLoading(false));
  }, [apiUrl, setApiData]);

  const [value, setvalue] = useState("");

  function HandleSubmit() {
    setState(value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search…"
        id="docs-search-input"
        className="form-control ds-input"
        autoComplete="off"
        spellCheck="false"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded="false"
        aria-label="search input"
        aria-owns="algolia-autocomplete-listbox-0"
        dir="auto"
        onChange={(e) => setvalue(e.target.value)}
        style={{ position: "relative", verticalAlign: "top" }}
      ></input>
      <button onClick={HandleSubmit} type="submit">
        Get Wheather
      </button>
      <h1>{state}</h1>
    </div>
  );
}

export default Search;
