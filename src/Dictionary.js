import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000017c8b26bbeff9467cbb8c6c17c4109f89";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={search}>
          <div className="d-flex">
            <div className="flex-grow-1">
              <input
                type="search"
                onChange={handleKeywordChange}
                className="form-control"
                placeholder="Search"
              />
            </div>
            <div className="mx-1">
              <button
                value="Search"
                className="btn mx-1 px-4  text-center"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="hint">Sugested words: code, sunset, yoga...</div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
