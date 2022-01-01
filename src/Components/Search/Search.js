import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";

function Search({ setApiData, apiData, setIsLoading }) {
  const [state, setState] = useState("South Melbourne");
<<<<<<< HEAD
  const API_KEY = process.env.REACT_APP_WHEATHER_API;
=======
  const API_KEY = "some key";
>>>>>>> 2d367f19f3dd35a6c4b50697d02658a9993b5a28
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${state}&units=metric&appid=${API_KEY}`;

  console.log(apiData);

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .then(() => setIsLoading(false));
  }, [apiUrl, setApiData, setIsLoading]);

  const [value, setvalue] = useState("");

  function HandleSubmit() {
    setState(value);
  }

  return (
    <div>
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
      <h1>{state}</h1>
    </div>
  );
}

export default Search;
