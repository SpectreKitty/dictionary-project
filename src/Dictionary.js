import React, { useState } from "react";
import Results from "./Results.js";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "713092c61foacbc30bt952afba0b4c71";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form className="text-center" onSubmit={handleSubmit}>
            <label for="search">
              <strong>What word do you want to look up?</strong>
            </label>
            <br />
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">
            suggested words: flowers, sunrise, yoga, love
          </div>
          {props.phonetic}
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
