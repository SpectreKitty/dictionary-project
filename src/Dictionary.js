import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "713092c61foacbc30bt952afba0b4c71";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div ClassName="Dictionary">
      <form className="text-center" onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
